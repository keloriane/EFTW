import React from "react";
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import homeButtonStyle from "../../assets/styles/jss/components/homeButtonStyle";

const HomeButton = ({
  classes,
  ...other
}) => < Button classes = {{ root: classes.root }}{
    ...other
  }/>

export default withStyles(homeButtonStyle)(HomeButton);
