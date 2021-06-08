// demo elements from https://material-ui.com/components/selects/

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, TextField, Button } from "@material-ui/core/";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
// import InputBase from "@material-ui/core/InputBase";

import '../Components/form.css';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CustomizedSelects() {
  const classes = useStyles();
  const [artikel, setArtikel] = React.useState("");
  const [aantal, setAantal] = React.useState("");
  const [locatie, setLocatie] = React.useState("");

  const handleChangeArtikel = (event) => {
    setArtikel(event.target.value);
  };
  const handleChangeAantal = (event) => {
    setAantal(event.target.value);
  };
  const handleChangeLocatie = (event) => {
    setLocatie(event.target.value);
  };

  const handleBlur = (event) => {
    // format value
    const value = new Intl.NumberFormat("nl-NL").format(event.target.value);
    console.log(value);
    setAantal(value);
  };

  const handleSubmit = () => {
    window.location.href = "/checks";
  };

  return (
    <div className="form">
      <Grid container component={Paper} direction="column" spacing={5}>
        <Grid item xs={1}>
          <h3>Receptioneren</h3>
        </Grid>
        <FormControl className={classes.margin}>
          <InputLabel id="demo-customized-select-label">Artikel</InputLabel>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={artikel}
            onChange={handleChangeArtikel}
          >
            <MenuItem value={1}>COMBIFIXPUNT</MenuItem>
            <MenuItem value={2}>BASIS 71MM</MenuItem>
            <MenuItem value={3}>BASIS 91MM</MenuItem>
            <MenuItem value={4}>BASIS 111MM</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.margin}>
          <TextField
            id="standard-basic"
            label="Aantal"
            // type="number"
            value={aantal}
            onChange={handleChangeAantal}
            onBlur={handleBlur}
          />
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel id="demo-customized-select-label">Locatie</InputLabel>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={locatie}
            onChange={handleChangeLocatie}
          >
            <MenuItem value={1}>BC03 E01</MenuItem>
            <MenuItem value={2}>BC03 E02</MenuItem>
            <MenuItem value={3}>BC04 E01</MenuItem>
            <MenuItem value={4}>BC04 E02</MenuItem>
          </Select>
          <br />
        </FormControl>
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Verstuur
        </Button>
      </Grid>
    </div>
  );
}
