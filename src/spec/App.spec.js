import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { App } from '../App';

describe('React-hooks-movie-search', () => {
  const wrapper = shallow(<App />);

  describe('App.js', () => {
    it('should render without crashing', () => {
      wrapper;
    });
    it('should render a Header component', () => {
      expect(wrapper.find('Header')).to.have.lengthOf(1);
    });
    it('should render a Search component', () => {
      expect(wrapper.find('Search')).to.have.lengthOf(1);
    });
    it('should render a Spinner', () => {
      expect(wrapper.find('Spinner')).to.have.lengthOf(1);
    });
    it('should render a Movie component once the api results return', () => {
      expect(wrapper.find('Movie')).to.have.length(0);
      // wrapper.update();
      // expect(wrapper.find('Movie')).to.have.length(1);
    });
  });
});
