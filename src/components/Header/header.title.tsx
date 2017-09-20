import * as React from 'react';

// tslint:disable-next-line:no-empty-interface
export interface IHeaderTitleProperties {
  compiler: string;
  framework: string;
}

export default class Title extends React.Component<IHeaderTitleProperties, any> {
  render() {
    console.log(this.props);
    return (
      <h1>this is {this.props.compiler} and then it is {this.props.framework}</h1>
    );
  }
}
