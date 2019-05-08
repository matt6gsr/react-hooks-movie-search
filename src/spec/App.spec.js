import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { App } from '../App';
import { Header } from '../components/Header';

describe('React-hooks-movie-search', () => {
  const wrapper = shallow(<App />);

  describe('App.js', () => {
    it('should render a header component', () => {
      expect(wrapper.find('Header')).to.have.lengthOf(1);
    });
  });
});
