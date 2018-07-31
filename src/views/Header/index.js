import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link, withRouter } from 'react-router-dom';
import { styles } from './style';
import { withStyles } from '@material-ui/core/styles'


function header(props) {
    const {classes} = props;
    return (
            <AppBar className={classes.headerAppBar}>
            <Tabs value={props.value} onChange={props.handleChange} centered>
                <Tab component={Link} to='/about' label='О нас'/>
                <Tab component={Link} to='/counters' label='Счетчики'/>
            </Tabs>
            </AppBar>
    )
}
export default withStyles(styles)(withRouter(header));
