import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { Calendar, momentLocalizer } from 'react-big-calendar'

function CalendarEmbed() {
  const { isAuthenticated } = useAuth0();

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      display: "flex",
      flexWrap: "wrap"
    },
    paper: {
      padding: theme.spacing(2),
      margin: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
      backgroundColor: " offwhite"
    },
    contentContainer: {
      margin: "30px"
    },
    banner: {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      color: "white",
      height: "302px",
      backgroundColor: " rgba(0, 174, 88,50)"
    },
    newstext: {
      textAlign: "left"
    }
  }));

  const classes = useStyles();
  const localizer = momentLocalizer(moment)

  return (
    <>
      <div className={classes.newstext}>
        <h1>CALENDAR</h1>
        <Calendar
          localizer={localizer}
          style={{ height: "420px" }}
          events={[]}
        />
      </div>
    </>
  );
}

export default CalendarEmbed;

/////
