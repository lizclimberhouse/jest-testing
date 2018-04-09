import React from 'react';
import { shallow, mount } from 'enzyme'; // mount will give me a more realistic DOM.
import TodoList from '../TodoList';
import toJson from 'enzyme-to-json';

describe(<TodoList />, () => {

  describe('render', () => {
    let component;
    beforeEach( () => {
      component = shallow(<TodoList />);
    });
  // })

  // get rid of the commented out stuff becuase of the describe written above.
  // it('renders without crashing', () => {
  //   shallow(<TodoList />);
  // });
  
  it('matches a snapshot', () => {
    // const component = shallow(<TodoList />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot();
  })
})

describe('functionality', () => {
  let component;
  const expected = 'Hello World';
  beforeEach( () => {
    component = mount(<TodoList />)
    // component = shallow(<TodoList />)
    let input = component.find('input');
    input.simulate('focus');
    input.simulate('change', 
      { target: { name: 'name', value: expected }}
    )
  });

  it('submits the form', () => {
    expect(component.state('items').length).toEqual(0)
    // let input = component.find('input');
    // input.simulate('focus');
    // input.simulate('change', { tagert: { name: 'name', value: 'Hello World' }})
    component.find('form').simulate('submit');
    expect(component.state('items').length).toEqual(1)
  })

  it('updates state on change', () => {
    // const expected = "Hello World";
    //find input
    // let input = component.find('input')
    //focus on input
    // input.simulate('focus')
    // input.simulate('change',
    //   { target: { name: 'name', value: expected }
    
    //change e { target: {name: '', value: ''}}
    const actual = component.state('name')
    expect(actual).toEqual(expected)
    //test that state updated
    })

  })
})
