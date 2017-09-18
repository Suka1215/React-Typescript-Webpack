import * as React from 'react';
import AppFooter from './Footer';
import AppHeader from './Header';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <AppHeader />
        <AppFooter />
      </div>
    )
  }
}
