import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import App from '../App';
import Card from '../Card';
import Search from '../Search';

describe('<App/> Component', () => {
  let component: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;

  beforeEach(() => {
    component = shallow(<App />);
  });

  test('Should render <App/> component', () => {
    expect(component).not.toBeNull();
  });

  test('Should not render <Card/> component', () => {
    expect(component.find(Card).length).toEqual(0);
  });

  test('Should render <Search/> component', () => {
    expect(component.find(Search)).toBeTruthy();
  });
});
