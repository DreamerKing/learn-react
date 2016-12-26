/**
 * Created by DK on 2016/12/26.
 */
jest.autoMockOff();

import React from 'react';
import ReactDOm from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ShallowTestUtils from 'react-shallow-testutils';

const shallowRenderer  = TestUtils.createRenderer();
const CheckboxWithLabel = require('../CheckboxWithLabel');

describe("CheckboxWithLabel", () => {
    shallowRenderer.render(<CheckboxWithLabel  labelOn="On"
                                               labelOff="Off" />);
    // const checkbox = shallowRenderer.getRenderOutput();
    // const component = ShallowTestUtils.getMountedInstance(shallowRenderer);
    //var checkboxNode = ReactDOm.findNode(checkbox);

    test("default to Off Label", () => {
        const expectedChildren = [
            <input type="checkbox" checked={false} onChange={component.onChange()} />,
            "Off"
        ];

        expect(checkbox.props.children[1]).toEqual(expectedChildren);

        // const inputField = checkbox.props.children[0];
        // const textNode = checkbox.props.children[1];
        // expect(inputField).toBe(false);
        // expect(textNode).toEqual("off");
        // expect(checkboxNode.textContent).toEqual("Off");
    });

    it("change the label after click", () => {
        component.onChange();
        const checkbox = shallowRenderer.getRenderOutput();
        expect(checkbox.props.children[1]).toEqual("On");
    });

    // test("default to unchecked", () => {
    //     let checkboxElement = TestUtils.findRenderedComponentWithType(checkbox, 'input');
    //     expect(checkboxElement.checked).toBe(false);
    // });
    //
    // it("change the label after click", () => {
    //     TestUtils.Simulate.change(
    //         TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')
    //     );
    //     expect(checkboxNode.textContent).toEqual("On");
    // });

});
