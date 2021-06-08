import React, { useState } from "react";
// eslint-disable-next-line
// import postDoorvoer from "../Api/Doorvoer";

import Knoppie from '../Components/IOSSwitch'

import { useForm } from "react-hook-form";
import { Grid, TextField, makeStyles, Paper, Button, Typography } from "@material-ui/core/";

import './form.css'

// demo imports might use later
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: "red",
  },
}));

export default function DoorvoerForm() {
  const [lev, setLev] = useState("");
  const { register, handleSubmit } = useForm();
  const classes = useStyles();

  const submit = (data) => {
    let arr = JSON.parse(localStorage.getItem("leveringen"));
    if(lev === 1) {
      data.LEVNAAM = "Boorsma";
    } else if (lev === 2) {
      data.LEVNAAM = "Spijkstra";      
    }
    data.ID = arr.length + 1;
    data.DATUM = data.DATUMTIJD.split("T")[0];
    data.TIJD = data.DATUMTIJD.split("T")[1];
    data.CGEREED = true;
    data.LEVNR = 333331 + arr.length;
    console.log("kijk:", data);
    arr.push(data);
    localStorage.setItem("leveringen", JSON.stringify(arr));
    window.location.href = "/";
  };

  const handleChange = (event) => {
    setLev(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Grid container component={Paper} direction="column" spacing={5}>
        <Grid item xs={12}>
          <TextField
            id="datetime-local"
            label="Aankomst tijd"
            type="datetime-local"
            className={classes.textField}
            required={true}
            InputLabelProps={{
              shrink: true,
            }}
            {...register("DATUMTIJD")}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="demo-customized-textbox"></InputLabel>
          </FormControl>
          <FormControl className={classes.margin} style={{minWidth: 120}}>
            <InputLabel id="demo-customized-select-label">Leverancier *</InputLabel>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={lev}
              onChange={handleChange}
              
            >
              <MenuItem value={1}>Boorsma</MenuItem>
              <MenuItem value={2}>Spijkstra</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} >
          <TextField
            id="npallets"
            label="Aantal pallets"
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            {...register("NPALLETS")}
          />
        </Grid>
        <Grid item xs={12}>
            <Typography>of</Typography>
        </Grid>
        <Grid item xs={12} >
          <TextField
            id="ncolli"
            label="Aantal colli"
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            {...register("NCOLLI")}
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            id="opmerking"
            label="Opmerking"
            multiline
            rows={4}
            {...register("OPMERKING")}
          />
        </Grid>
        <Grid item xs={12}>
          <Knoppie />
        </Grid>
        <Button variant="contained" type="submit">Verstuur</Button>
      </Grid>
    </form>
  );
}
