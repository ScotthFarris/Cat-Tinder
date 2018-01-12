import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App.js';
import { mount } from 'enzyme'

//test that it renders app without crashing
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

//test to create cat form
it("renders create a cat form", ()=>{
  const app = mount(<App />)
  expect(app.find('.subtitle').text()).toEqual('Add a Cat')
})

//test cat index
it("links to cat index", () => {
  const app = mount(<App />)
  app.find('a#cats-link').simulate('click', {button: 0})
  expect(app.find('.subtitle').text()).toEqual('All the Cats')
})
