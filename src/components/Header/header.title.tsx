import * as React from 'react';
import * as mob from 'mobx';

export default class HeaderTitle extends React.Component<any> {
  render() {
    return (
      <h1>{this.props.title}</h1>
    )
  }

}
