// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { dispatchKeyDownEvent, renderElementIntoDOM } from '../../../test/unittests/front_end/helpers/DOMHelpers.js';
import { describeWithEnvironment } from '../../../test/unittests/front_end/helpers/EnvironmentHelpers.js';
import * as SDK from '../../core/sdk/sdk.js';
import * as Sources from './sources.js';
function setCodeMirrorContent(editor, content) {
    editor.dispatch({
        changes: { from: 0, to: editor.state.doc.length, insert: content },
    });
}
function setBreakpointType(dialog, newType) {
    const toolbar = dialog.contentElement.querySelector('.toolbar');
    const selectElement = toolbar.shadowRoot.querySelector('select');
    selectElement.value = newType;
    selectElement.dispatchEvent(new Event('change'));
}
// Note that we currently don't install a fake RuntimeModel + ExecutionContext for these tests.
// This means the 'BreakpointEditDialog' won't be able to check whether the
// condition is a complete JavaScript expression or not and simply assume it is.
describeWithEnvironment('BreakpointEditDialog', () => {
    it('reports a committed condition when the Enter key is pressed', async () => {
        const resultPromise = new Promise(resolve => {
            const dialog = new Sources.BreakpointEditDialog.BreakpointEditDialog(0, '', false, resolve);
            const { editorForTest: { editor } } = dialog;
            setCodeMirrorContent(editor, 'x === 5');
            dispatchKeyDownEvent(editor.contentDOM, { key: 'Enter' });
        });
        const { committed, condition } = await resultPromise;
        assert.isTrue(committed);
        assert.strictEqual(condition, 'x === 5');
    });
    it('does not report a commited condition when the ESC key is pressed', async () => {
        const resultPromise = new Promise(resolve => {
            const dialog = new Sources.BreakpointEditDialog.BreakpointEditDialog(0, '', false, resolve);
            const { editorForTest: { editor } } = dialog;
            setCodeMirrorContent(editor, 'hello');
            dispatchKeyDownEvent(editor.contentDOM, { key: 'Escape' });
        });
        const { committed } = await resultPromise;
        assert.isFalse(committed);
    });
    it('commits condition when close button is clicked', async () => {
        const resultPromise = new Promise(resolve => {
            const dialog = new Sources.BreakpointEditDialog.BreakpointEditDialog(0, '', false, resolve);
            const { editorForTest: { editor } } = dialog;
            setCodeMirrorContent(editor, 'x === 5');
            dialog.contentElement.querySelector('devtools-icon').click();
        });
        const { committed, condition } = await resultPromise;
        assert.isTrue(committed);
        assert.strictEqual(condition, 'x === 5');
    });
    it('leaves the condition as-is for logpoints', async () => {
        const resultPromise = new Promise(resolve => {
            const dialog = new Sources.BreakpointEditDialog.BreakpointEditDialog(0, '', true, resolve);
            const { editorForTest: { editor } } = dialog;
            setCodeMirrorContent(editor, 'x');
            dispatchKeyDownEvent(editor.contentDOM, { key: 'Enter' });
        });
        const { condition } = await resultPromise;
        assert.strictEqual(condition, 'x');
    });
    it('result includes isLogpoint for logpoints', async () => {
        const resultPromise = new Promise(resolve => {
            const dialog = new Sources.BreakpointEditDialog.BreakpointEditDialog(0, '', true, resolve);
            const { editorForTest: { editor } } = dialog;
            setCodeMirrorContent(editor, 'x');
            dispatchKeyDownEvent(editor.contentDOM, { key: 'Enter' });
        });
        const { isLogpoint } = await resultPromise;
        assert.isTrue(isLogpoint);
    });
    it('result includes isLogpoint for conditional breakpoints', async () => {
        const resultPromise = new Promise(resolve => {
            const dialog = new Sources.BreakpointEditDialog.BreakpointEditDialog(0, '', false, resolve);
            const { editorForTest: { editor } } = dialog;
            setCodeMirrorContent(editor, 'x === 5');
            dispatchKeyDownEvent(editor.contentDOM, { key: 'Enter' });
        });
        const { isLogpoint } = await resultPromise;
        assert.isFalse(isLogpoint);
    });
    it('prefills the input with the old condition', async () => {
        const dialog = new Sources.BreakpointEditDialog.BreakpointEditDialog(0, 'x === 42', false, () => { });
        const { editorForTest: { editor } } = dialog;
        assert.strictEqual(editor.state.doc.sliceString(0), 'x === 42');
    });
    it('focuses the editor input field after changing the breakpoint type', async () => {
        const dialog = new Sources.BreakpointEditDialog.BreakpointEditDialog(0, '', false, () => { });
        renderElementIntoDOM(dialog.contentElement);
        setBreakpointType(dialog, "LOGPOINT" /* SDK.DebuggerModel.BreakpointType.LOGPOINT */);
        const { editorForTest: { editor } } = dialog;
        assert.isTrue(editor.hasFocus);
        dialog.contentElement.remove(); // Cleanup.
    });
});
//# sourceMappingURL=BreakpointEditDialog.test.js.map