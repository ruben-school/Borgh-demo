import React from 'react';

// Styling imports
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Button, Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  })
);

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} data-testid="Nav">
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          <a href="/doorvoertijden" style={{ textDecoration: 'none', color: 'black'}} data-testid="/doorvoertijden">
            <Button variant="contained">Doorvoertijden</Button>
          </a>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained">Test knop</Button>
        </Grid>
      </Grid>
    </div>
  );
}
