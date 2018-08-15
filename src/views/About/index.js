import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./style";

function about(props) {
  const { classes } = props;
  return <h1 className={classes.aboutInfo}>Something about iTechArt</h1>;
}

export default withStyles(styles)(about);
