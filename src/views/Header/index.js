import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link, withRouter } from "react-router-dom";

function header(props) {
  return (
    <div>
      <AppBar position="static">
        <Tabs value={props.value} onChange={props.handleChange} scrollable>
          <Tab component={Link} to="/react/about" label="О нас" />
          <Tab component={Link} to="/react/counters" label="Счетчики" />
          <Tab component={Link} to="/react/login" label="войти" />
          <Tab
            component={Link}
            to="/react/login-redux/"
            label="войти с помощью redux"
          />
          <Tab
            component={Link}
            to="/react/login-redux-form/"
            label="Войти с помощью redux-form"
          />
        </Tabs>
      </AppBar>
    </div>
  );
}
export default withRouter(header);
