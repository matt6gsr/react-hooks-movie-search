import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Header } from '../components/Header';

describe('Header.jsx', () => {
  const wrapper = shallow(<Header />);
  const divWrapper = wrapper.find('div');
  const headerWrapper = wrapper.find('header');
  const h2Wrapper = wrapper.find('h2');

  it('should render a div tag with a class name of "header-div"', () => {
    expect(divWrapper).to.have.lengthOf(1);
    expect(divWrapper.hasClass('header-div')).to.equal(true);
  });
  it('should render a header with the class name of "app-header"', () => {
    expect(headerWrapper).to.have.lengthOf(1);
    expect(headerWrapper.hasClass('app-header')).to.equal(true);
  });
  it('should render a h2 tag', () => {
    expect(h2Wrapper).to.have.lengthOf(1);
  });
});
