import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckBox from "@material-ui/core/Checkbox";
import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import "roboto-fontface";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyle = makeStyles({
  root: {
    border: 0,
    borderRadius: 15,
    marginBottom: 15,
    color: "yellow",
    padding: "15 30px",
  },
});

const theme = createMuiTheme({
  typography: {
    h3: {
      fontSize: 2000,
    },
  },
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

function ButtonStyled() {
  const classes = useStyle();
  return <Button className={classes.root}>Styled Button </Button>;
}

function CheckBoxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel
      control={
        <CheckBox
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            "arial-label": "secondary checkbox",
          }}
        />
      }
      label="Testing CheckBox"
    />
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">
            <AppBar>
              <ToolBar>
                <IconButton>
                  <MenuIcon></MenuIcon>
                </IconButton>
                <Typography varient="h6">MUI Theming</Typography>
                <Button>Login</Button>
              </ToolBar>
            </AppBar>
            <Typography varient="h3" component="div">
              Welcome To MUI
            </Typography>
            <Typography varient="h5">Learn How To Use Material UI</Typography>
            <ButtonStyled />
            <Grid
              container
              spacing={4}
              justify="center"
              style={{ padding: 20 }}
            >
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }}></Paper>
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }}></Paper>
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }}></Paper>
              </Grid>
            </Grid>

            <TextField
              variant="outlined"
              color="secondary"
              type="email"
              label="The Email"
              placeholder="test@gail.com"
            />
            <CheckBoxExample />
            <ButtonGroup variant="contained" color="primary">
              <Button startIcon={<SaveIcon></SaveIcon>}>Save</Button>
              <Button startIcon={<DeleteIcon></DeleteIcon>}>Delete</Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
