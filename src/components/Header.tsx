import * as React from 'react';
import Title from './Header/header.title';

export default class Header extends React.Component<any, any> {
  render() {
    this.props.changeTitle('Brand new title beign called');
    console.log(this.props);
    return (
      <div>
        <Title compiler='Typescript' framework='React' />
        <input />
      </div>
    );
  }
}
