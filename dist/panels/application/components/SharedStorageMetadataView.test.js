// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assertElement, assertShadowRoot, dispatchClickEvent, getCleanTextContentFromElements, getElementWithinComponent, renderElementIntoDOM, } from '../../../../test/unittests/front_end/helpers/DOMHelpers.js';
import { describeWithLocale } from '../../../../test/unittests/front_end/helpers/EnvironmentHelpers.js';
import * as Coordinator from '../../../ui/components/render_coordinator/render_coordinator.js';
import * as ReportView from '../../../ui/components/report_view/report_view.js';
import * as ApplicationComponents from './components.js';
const coordinator = Coordinator.RenderCoordinator.RenderCoordinator.instance();
const { assert } = chai;
function makeView(origin, metadata, resetBudget) {
    return new ApplicationComponents.SharedStorageMetadataView.SharedStorageMetadataView({
        getMetadata: async () => metadata,
        resetBudget: resetBudget || (async () => { }),
    }, origin);
}
describeWithLocale('SharedStorageMetadataView', () => {
    it('renders with a title', async () => {
        const component = makeView('https://a.test', {
            creationTime: 10,
            length: 4,
            remainingBudget: 8.3,
            bytesUsed: 200,
        });
        renderElementIntoDOM(component);
        assertShadowRoot(component.shadowRoot);
        await coordinator.done();
        const report = getElementWithinComponent(component, 'devtools-report', ReportView.ReportView.Report);
        const { textContent } = report.shadowRoot.querySelector('.report-title');
        assert.strictEqual(textContent, 'Shared storage');
    });
    it('renders report keys and values', async () => {
        const component = makeView('https://a.test', {
            creationTime: 10,
            length: 4,
            remainingBudget: 8.3,
            bytesUsed: 200,
        });
        renderElementIntoDOM(component);
        assertShadowRoot(component.shadowRoot);
        await coordinator.done({ waitForWork: true });
        const keys = getCleanTextContentFromElements(component.shadowRoot, 'devtools-report-key');
        assert.deepEqual(keys, [
            'Origin',
            'Creation Time',
            'Number of Entries',
            'Number of Bytes Used',
            'Entropy Budget for Fenced Frames',
        ]);
        const values = getCleanTextContentFromElements(component.shadowRoot, 'devtools-report-value');
        assert.deepEqual(values, [
            'https://a.test',
            (new Date(10 * 1e3)).toLocaleString(),
            '4',
            '200',
            '8.3',
        ]);
    });
    it('renders default view when data is empty', async () => {
        const component = makeView('', {});
        renderElementIntoDOM(component);
        assertShadowRoot(component.shadowRoot);
        await coordinator.done({ waitForWork: true });
        const keys = getCleanTextContentFromElements(component.shadowRoot, 'devtools-report-key');
        assert.deepEqual(keys, [
            'Origin',
            'Creation Time',
            'Number of Entries',
            'Number of Bytes Used',
            'Entropy Budget for Fenced Frames',
        ]);
        const values = getCleanTextContentFromElements(component.shadowRoot, 'devtools-report-value');
        assert.deepEqual(values, [
            '',
            'Not yet created',
            '0',
            '0',
            '0',
        ]);
    });
    it('renders reset budget button', async () => {
        const resetBudgetHandlerSpy = sinon.spy();
        const component = makeView('https://a.test', {
            creationTime: 10,
            length: 4,
            remainingBudget: 8.3,
            bytesUsed: 200,
        }, resetBudgetHandlerSpy);
        renderElementIntoDOM(component);
        await coordinator.done({ waitForWork: true });
        const resetButtonComponent = component.shadowRoot.querySelector('devtools-button');
        assertElement(resetButtonComponent, HTMLElement);
        dispatchClickEvent(resetButtonComponent);
        assert.isTrue(resetBudgetHandlerSpy.calledOnce);
    });
});
//# sourceMappingURL=SharedStorageMetadataView.test.js.map