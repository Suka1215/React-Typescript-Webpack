import * as React from 'react';
import AppFooter from './Footer';
import AppHeader from './Header';

export default class Layout extends React.Component {

  constructor(public state: any) {
    super(state);
    this.state = {
      title: 'Welcome',
    }
  }
  
  render() {
   
   console.log('tried')
    return (
      <div>
        <AppHeader title={this.state.title} />
        <AppHeader title={'Another Title'} />
        <AppFooter />
      </div>
    )
  }
}
