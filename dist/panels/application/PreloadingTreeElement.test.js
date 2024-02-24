// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const { assert } = chai;
import * as SDK from '../../core/sdk/sdk.js';
import * as Application from './application.js';
import { createTarget } from '../../../test/unittests/front_end/helpers/EnvironmentHelpers.js';
import { describeWithMockConnection } from '../../../test/unittests/front_end/helpers/MockConnection.js';
import { assertNotNullOrUndefined } from '../../core/platform/platform.js';
describeWithMockConnection('PreloadingTreeElement', () => {
    it('shows view even if initialization happens after selection', () => {
        const target = createTarget();
        const model = target.model(SDK.PreloadingModel.PreloadingModel);
        assertNotNullOrUndefined(model);
        const spy = sinon.spy();
        const panel = {
            showView: spy,
        };
        const preloadingRuleSetTreeElement = new Application.PreloadingTreeElement.PreloadingRuleSetTreeElement(panel);
        preloadingRuleSetTreeElement.onselect(false);
        assert.isTrue(spy.notCalled);
        preloadingRuleSetTreeElement.initialize(model);
        assert.isTrue(spy.calledOnce);
    });
});
//# sourceMappingURL=PreloadingTreeElement.test.js.map