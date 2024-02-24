// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { deinitializeGlobalVars, initializeGlobalVars, } from '../../../../../test/unittests/front_end/helpers/EnvironmentHelpers.js';
import * as Common from '../../../../core/common/common.js';
import * as UI from '../../legacy.js';
import * as ColorPicker from './color_picker.js';
const displayP3Color = Common.Color.parse('color(display-p3 1 1 1)');
const rgbColor = Common.Color.parse('rgb(255 0 0)');
describe('ColorPicker aka Spectrum', () => {
    beforeEach(async () => {
        await initializeGlobalVars();
        const forceNew = true;
        const actionRegistry = UI.ActionRegistry.ActionRegistry.instance({ forceNew });
        UI.ShortcutRegistry.ShortcutRegistry.instance({ forceNew, actionRegistry });
    });
    afterEach(async () => {
        await deinitializeGlobalVars();
    });
    describe('sRGB overlay', () => {
        it('should show sRGB overlay when the format supports display-p3 colors', () => {
            const spectrum = new ColorPicker.Spectrum.Spectrum();
            spectrum.setColor(displayP3Color, "display-p3" /* Common.Color.Format.DISPLAY_P3 */);
            assert.isNotNull(spectrum.contentElement.querySelector('devtools-spectrum-srgb-overlay'));
        });
        it('should not show sRGB overlay when the format doesn\'t support display-p3 colors', () => {
            const spectrum = new ColorPicker.Spectrum.Spectrum();
            spectrum.setColor(rgbColor, "rgb" /* Common.Color.Format.RGB */);
            assert.isNull(spectrum.contentElement.querySelector('devtools-spectrum-srgb-overlay'));
        });
    });
});
//# sourceMappingURL=Spectrum.test.js.map