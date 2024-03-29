// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { createTarget, stubNoopSettings } from '../../../test/unittests/front_end/helpers/EnvironmentHelpers.js';
import { describeWithMockConnection } from '../../../test/unittests/front_end/helpers/MockConnection.js';
import * as Common from '../../core/common/common.js';
import { assertNotNullOrUndefined } from '../../core/platform/platform.js';
import * as SDK from '../../core/sdk/sdk.js';
import * as Elements from './elements.js';
const { assert } = chai;
describeWithMockConnection('ElementsTreeElementHighlighter', () => {
    let target;
    let treeOutline;
    let throttler;
    let throttlerSchedule;
    beforeEach(() => {
        stubNoopSettings();
        target = createTarget();
        treeOutline = new Elements.ElementsTreeOutline.ElementsTreeOutline();
        treeOutline.wireToDOMModel(target.model(SDK.DOMModel.DOMModel));
        throttler = new Common.Throttler.Throttler(0);
        throttlerSchedule = sinon.stub(throttler, 'schedule');
        throttlerSchedule.resolves();
    });
    const highlightsNodeOnRequestEvent = (inScope) => () => {
        SDK.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
        new Elements.ElementsTreeElementHighlighter.ElementsTreeElementHighlighter(treeOutline, throttler);
        const model = target.model(SDK.OverlayModel.OverlayModel);
        assertNotNullOrUndefined(model);
        const node = new SDK.DOMModel.DOMNode(target.model(SDK.DOMModel.DOMModel));
        const treeElement = new Elements.ElementsTreeElement.ElementsTreeElement(node, /* isClosingTag=*/ true);
        sinon.stub(treeOutline, 'createTreeElementFor').withArgs(node).returns(treeElement);
        const treeOutlineSetHoverEffect = sinon.spy(treeOutline, 'setHoverEffect');
        const treeElementReveal = sinon.spy(treeElement, 'reveal');
        model.dispatchEventToListeners("HighlightNodeRequested" /* SDK.OverlayModel.Events.HighlightNodeRequested */, node);
        assert.strictEqual(throttlerSchedule.calledOnce, inScope);
        if (inScope) {
            throttlerSchedule.firstCall.firstArg();
            assert.isTrue(treeOutlineSetHoverEffect.calledOnce);
            assert.isTrue(treeElementReveal.called);
        }
    };
    it('highlights node on in scope request event', highlightsNodeOnRequestEvent(true));
    it('highlights node on out of scope request event', highlightsNodeOnRequestEvent(false));
});
//# sourceMappingURL=ElementsTreeElementHighlighter.test.js.map