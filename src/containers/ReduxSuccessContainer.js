import React, { Component } from "react";
import ReduxSuccess from "../views/ReduxSuccess";
import { connect } from "react-redux";

class ReduxSuccessContainer extends Component {
  render() {
    return <ReduxSuccess user={this.props.user} />;
  }
}

const mapStateToProps = state => {
  return {
    user: state.login.user
  };
};

export default connect(mapStateToProps)(ReduxSuccessContainer);
