// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assertNotNullOrUndefined } from '../../core/platform/platform.js';
import * as Root from '../../core/root/root.js';
import * as SDK from '../../core/sdk/sdk.js';
import * as Accessibility from './accessibility.js';
import { createTarget, stubNoopSettings } from '../../../test/unittests/front_end/helpers/EnvironmentHelpers.js';
import { describeWithMockConnection, setMockConnectionResponseHandler } from '../../../test/unittests/front_end/helpers/MockConnection.js';
const { assert } = chai;
const NODE_ID = 1;
describeWithMockConnection('AccessibilitySidebarView', () => {
    let target;
    let view;
    beforeEach(() => {
        stubNoopSettings();
        target = createTarget();
        setMockConnectionResponseHandler('DOM.getDocument', () => ({ root: { nodeId: NODE_ID } }));
        setMockConnectionResponseHandler('DOM.getNodesForSubtreeByStyle', () => ({ nodeIds: [] }));
        Root.Runtime.experiments.register("full-accessibility-tree" /* Root.Runtime.ExperimentName.FULL_ACCESSIBILITY_TREE */, '');
    });
    afterEach(() => {
        view.detach();
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updatesUiOnEvent = (event, inScope) => async () => {
        SDK.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
        const domModel = target.model(SDK.DOMModel.DOMModel);
        assertNotNullOrUndefined(domModel);
        const accessibilityModel = target.model(SDK.AccessibilityModel.AccessibilityModel);
        assertNotNullOrUndefined(accessibilityModel);
        const requestPartialAXTree = sinon.stub(accessibilityModel, 'requestPartialAXTree');
        requestPartialAXTree.resolves();
        const node = new SDK.DOMModel.DOMNode(domModel);
        view = Accessibility.AccessibilitySidebarView.AccessibilitySidebarView.instance({ forceNew: true, throttlingTimeout: 0 });
        view.markAsRoot();
        view.show(document.body);
        view.setNode(node);
        await new Promise(resolve => setTimeout(resolve, 0));
        requestPartialAXTree.resetHistory();
        domModel.dispatchEventToListeners(event, { node });
        await new Promise(resolve => setTimeout(resolve, 0));
        assert.strictEqual(requestPartialAXTree.called, inScope);
    };
    it('updates UI on in scope attribute modified event', updatesUiOnEvent(SDK.DOMModel.Events.AttrModified, true));
    it('does not update UI on out of scope attribute modified event', updatesUiOnEvent(SDK.DOMModel.Events.AttrModified, false));
    it('updates UI on in scope attribute removed event', updatesUiOnEvent(SDK.DOMModel.Events.AttrRemoved, true));
    it('does not update UI on out of scope attribute removed event', updatesUiOnEvent(SDK.DOMModel.Events.AttrRemoved, false));
    it('updates UI on in scope charachter data modified event', updatesUiOnEvent(SDK.DOMModel.Events.CharacterDataModified, true));
    it('does not update UI on out of scope charachter data modified event', updatesUiOnEvent(SDK.DOMModel.Events.CharacterDataModified, false));
    it('updates UI on in scope child node count updated event', updatesUiOnEvent(SDK.DOMModel.Events.ChildNodeCountUpdated, true));
    it('does not update UI on out of scope child node count updated event', updatesUiOnEvent(SDK.DOMModel.Events.ChildNodeCountUpdated, false));
});
//# sourceMappingURL=AccessibilitySidebarView.test.js.map