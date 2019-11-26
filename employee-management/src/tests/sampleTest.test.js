import React from 'react';
import FooterComponent from "../components/footerComponent";

import { shallow } from 'enzyme';

it("should Render Component", () => {
    var footerComponent = shallow(<FooterComponent />)
    expect(footerComponent.find("div").length).toBe(1);
    expect(footerComponent.find("h5").length).toBe(1);
})

it("should Render H5 Component", () => {
    var footerComponent = shallow(<FooterComponent />)
    expect(footerComponent.find("h5").length).toBe(1);
})

it("should Render H5 Component Value", () => {
    var footerComponent = shallow(<FooterComponent name="Mayank"/>)
    expect(footerComponent.find("h5").text()).toBe("Mayank");
})


