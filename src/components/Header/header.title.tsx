import * as React from 'react';
import * as mob from 'mobx';

export default class HeaderTitle extends React.Component {
  public Todo() {
    const id = Math.random()
    mob.extendObservable(this, {
        title: "",
        finished: false
    })
}

  render() {
    return (
      <h1>React Typescript and Webpack Scaffold</h1>
    )
  }

}
