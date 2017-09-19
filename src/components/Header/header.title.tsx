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
      <button className='button is-primary'>Button</button>
    )
  }

}
