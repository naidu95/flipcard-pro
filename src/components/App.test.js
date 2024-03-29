import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('renders the `Flashcard Pro` title', () => {
    expect(app.find('h2').text()).toEqual('FlashCardPro')
  });
  it('render the Stacklist',()=>{
    expect(app.find('Connect(StackList)').exists()).toBe(true);
  })
  it('render the link to create new stack',()=>{
    expect(app.find('Link h4').text()).toEqual('Create a New Stack')
  })
});