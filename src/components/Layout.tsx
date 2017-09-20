import * as React from 'react';
import AppFooter from './Footer';
import Header from './Header';

export default class Layout extends React.Component {

  constructor(public state: any) {
    super(state);
  }

  public changeTitle(title: string): void {
    this.setState({title});
  }

  render() {
    const title = 'another new title';
    return (
      <div>
        <AppFooter />
        <Header title={title} changeTitle={this.changeTitle} />
      </div>
    );
  }
}
