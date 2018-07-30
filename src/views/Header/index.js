import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link, withRouter } from 'react-router-dom';


function header(props) {
    return (
        <div>
            <AppBar position="static">
            <Tabs value={props.value} onChange={props.handleChange} centered>
                <Tab component={Link} to='/about' label='О нас'/>
                <Tab component={Link} to='/counters' label='Счетчики'/>
            </Tabs>
            </AppBar>
        </div>
    )
}
export default withRouter(header);