import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import Login from 'mallin-app/src/containers/Login';
import ShowMap from 'mallin-app/src/containers/ShowMap';
import Home from 'mallin-app/src/containers/Home';
import { addListener } from 'mallin-app/src/utils/redux';

export const AppNavigator = StackNavigator({
  Home: { screen: Home },
  ShowMap: { screen: ShowMap },
  Login: { screen: Login },
});

class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };

  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={{
          dispatch,
          state: nav,
          addListener,
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);