import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { App } from '../App';

describe('React-hooks-movie-search', () => {
  const wrapper = mount(<App />);

  describe('App.js', () => {
    it('should render without crashing', () => {
      wrapper;
    });
    it('should render a header component', () => {
      expect(wrapper.find('Header')).to.have.lengthOf(1);
    });
    it('should render a movie component', () => {
      expect(wrapper.find('Movie')).to.have.lengthOf(1);
    });
  });
});
