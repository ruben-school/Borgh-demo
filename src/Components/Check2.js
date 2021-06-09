// https://material-ui.com/components/cards/
import React from "react";
import { Grid, Paper, TextField, Button } from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SingleSwitch from "../Components/Switch";

import "./form.css";
import icon from "./add.png";
import coating from "./coating.png";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 450,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function Checks2() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [photo, setPhoto] = React.useState("icon");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handlePictureClick = () => {
    setPhoto("photo");
  };

  const handleSubmit = () => {
    window.location.href = "/Borgh-demo/gelukt";
  };

  return (
    <div className="form">
      <Grid container component={Paper} direction="column" spacing={5}>
      <Grid item xs={12}>
          <Typography variant="body2" color="textSecondary" component="p">2/2</Typography>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea onClick={handlePictureClick}>
              {photo === "icon" && (
                <CardMedia
                  className="media"
                  component="img"
                  alt="foto"
                  image={icon}
                  title="foto"
                />
              )}
              {photo === "photo" && (
                <CardMedia
                  className="photo"
                  component="img"
                  alt="foto"
                  image={coating}
                  title="foto"
                />
              )}
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                BASIS 91MM
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Check effenheid coating 
              </Typography>
              <SingleSwitch />
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse
              className="collapse"
              in={expanded}
              timeout="auto"
              unmountOnExit
            >
              <TextField
                id="opmerking"
                className="comment"
                label="Opmerking"
                multiline
                rows={4}
              />
            </Collapse>
          </Card>
        </Grid>
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Verstuur
        </Button>
      </Grid>
    </div>
  );
}
