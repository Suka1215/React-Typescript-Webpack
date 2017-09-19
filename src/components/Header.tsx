import * as React from 'react';
import HeaderTitle from './Header/header.title';

export default class AppHeader extends React.Component<any> {

  constructor() {
    super();
  }

  render() {
    console.log(this.props.title);
    return (
      <HeaderTitle title={this.props.title}/>
    )
  }

}
