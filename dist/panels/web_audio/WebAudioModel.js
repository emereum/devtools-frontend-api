// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import * as SDK from '../../core/sdk/sdk.js';
export class WebAudioModel extends SDK.SDKModel.SDKModel {
    enabled;
    agent;
    constructor(target) {
        super(target);
        this.enabled = false;
        this.agent = target.webAudioAgent();
        target.registerWebAudioDispatcher(this);
        // TODO(crbug.com/963510): Some OfflineAudioContexts are not uninitialized
        // properly because LifeCycleObserver::ContextDestroyed() is not fired for
        // unknown reasons. This creates inconsistency in AudioGraphTracer
        // and AudioContextSelector in DevTools.
        //
        // To resolve this inconsistency, we flush the leftover from the previous
        // frame when the current page is loaded. This call can be omitted when the
        // bug is fixed.
        SDK.TargetManager.TargetManager.instance().addModelListener(SDK.ResourceTreeModel.ResourceTreeModel, SDK.ResourceTreeModel.Events.FrameNavigated, this.flushContexts, this);
    }
    flushContexts() {
        this.dispatchEventToListeners("ModelReset" /* Events.ModelReset */);
    }
    async suspendModel() {
        this.dispatchEventToListeners("ModelSuspend" /* Events.ModelSuspend */);
        await this.agent.invoke_disable();
    }
    async resumeModel() {
        if (!this.enabled) {
            return Promise.resolve();
        }
        await this.agent.invoke_enable();
    }
    ensureEnabled() {
        if (this.enabled) {
            return;
        }
        void this.agent.invoke_enable();
        this.enabled = true;
    }
    contextCreated({ context }) {
        this.dispatchEventToListeners("ContextCreated" /* Events.ContextCreated */, context);
    }
    contextWillBeDestroyed({ contextId }) {
        this.dispatchEventToListeners("ContextDestroyed" /* Events.ContextDestroyed */, contextId);
    }
    contextChanged({ context }) {
        this.dispatchEventToListeners("ContextChanged" /* Events.ContextChanged */, context);
    }
    audioListenerCreated({ listener }) {
        this.dispatchEventToListeners("AudioListenerCreated" /* Events.AudioListenerCreated */, listener);
    }
    audioListenerWillBeDestroyed({ listenerId, contextId }) {
        this.dispatchEventToListeners("AudioListenerWillBeDestroyed" /* Events.AudioListenerWillBeDestroyed */, { listenerId, contextId });
    }
    audioNodeCreated({ node }) {
        this.dispatchEventToListeners("AudioNodeCreated" /* Events.AudioNodeCreated */, node);
    }
    audioNodeWillBeDestroyed({ contextId, nodeId }) {
        this.dispatchEventToListeners("AudioNodeWillBeDestroyed" /* Events.AudioNodeWillBeDestroyed */, { contextId, nodeId });
    }
    audioParamCreated({ param }) {
        this.dispatchEventToListeners("AudioParamCreated" /* Events.AudioParamCreated */, param);
    }
    audioParamWillBeDestroyed({ contextId, nodeId, paramId }) {
        this.dispatchEventToListeners("AudioParamWillBeDestroyed" /* Events.AudioParamWillBeDestroyed */, { contextId, nodeId, paramId });
    }
    nodesConnected({ contextId, sourceId, destinationId, sourceOutputIndex, destinationInputIndex }) {
        this.dispatchEventToListeners("NodesConnected" /* Events.NodesConnected */, { contextId, sourceId, destinationId, sourceOutputIndex, destinationInputIndex });
    }
    nodesDisconnected({ contextId, sourceId, destinationId, sourceOutputIndex, destinationInputIndex }) {
        this.dispatchEventToListeners("NodesDisconnected" /* Events.NodesDisconnected */, { contextId, sourceId, destinationId, sourceOutputIndex, destinationInputIndex });
    }
    nodeParamConnected({ contextId, sourceId, destinationId, sourceOutputIndex }) {
        this.dispatchEventToListeners("NodeParamConnected" /* Events.NodeParamConnected */, { contextId, sourceId, destinationId, sourceOutputIndex });
    }
    nodeParamDisconnected({ contextId, sourceId, destinationId, sourceOutputIndex }) {
        this.dispatchEventToListeners("NodeParamDisconnected" /* Events.NodeParamDisconnected */, { contextId, sourceId, destinationId, sourceOutputIndex });
    }
    async requestRealtimeData(contextId) {
        const realtimeResponse = await this.agent.invoke_getRealtimeData({ contextId });
        return realtimeResponse.realtimeData;
    }
}
SDK.SDKModel.SDKModel.register(WebAudioModel, { capabilities: 2 /* SDK.Target.Capability.DOM */, autostart: false });
//# sourceMappingURL=WebAudioModel.js.map