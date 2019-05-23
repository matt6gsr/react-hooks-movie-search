import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Movie } from '../components/Movie';
import data from '../data/fakeMovieData.json';

describe('Movie.jsx', () => {
  const wrapper = shallow(<Movie movie={data} />);
  const movieDiv = wrapper.find('div');
  const movieH2 = wrapper.find('h2');
  const movieImg = wrapper.find('img').props();
  const movieP = wrapper.find('p');

  it('should render 2 div tags', () => {
    expect(movieDiv).to.have.lengthOf(2);
  });
  it('should render one of the div tags with a class name of "movie"', () => {
    expect(movieDiv.first().hasClass('movie')).to.equal(true);
  });
  it('should render a h2 tag displaying a movie title', () => {
    expect(movieH2).to.have.lengthOf(1);
    expect(movieH2.text()).to.equal('Test Title');
  });
  it('should render an image of the movies poster', () => {
    expect(movieImg.width).to.equal('200');
    expect(movieImg.src).to.equal(
      'https://www.vintagemovieposters.co.uk/wp-content/uploads/2015/07/starwarsfactorshidebrandtlarge1.jpg'
    );
    expect(movieImg.alt).to.equal('The movie titled: Test Title');
  });
  it('should render a p tag displaying the year the movie was made', () => {
    expect(movieP).to.have.lengthOf(1);
    expect(movieP.text).to.equal('2019');
  });
});
