import React, { useState } from 'react';
import { makeStyles, Typography, Grid, TextField, Button, Snackbar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MuiAlert from '@material-ui/lab/Alert';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  menu: {
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(25),
  },
  icon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  title: {
    fontSize: 60,
    fontWeight: 800,
  },
  text: {
    fontSize: 20,
    fontWeight: 800,
  },
  input: {
    width: theme.spacing(22),
    marginLeft: theme.spacing(1),
  },
  button: {
    width: theme.spacing(28),
    height: theme.spacing(7),
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(4),
  },
  img: {
    height: 844,
  },
}));

function Alert(props) {
  return <MuiAlert elevation={7} variant="filled" {...props} />;
}

export default function LandingPage() {
  const classes = useStyles();
  const [location, setLocation] = useState('');
  const [messageOpen, setMessageOpen] = useState(false);
  const defaultTime = moment('1200', 'HH:mm').add(1, 'day');
  const [start, setStart] = useState(defaultTime.format('YYYY-MM-DDTHH:mm'));
  const [end, setEnd] = useState(defaultTime.add(1, 'day').format('YYYY-MM-DDTHH:mm'));

  const findSitters = (e) => {
    e.preventDefault();
    setMessageOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      setMessageOpen(false);
      return;
    }
  };

  return (
    <>
      <Grid container spacing={0} align="center" justify="center">
        <Grid item xs={6} align="left">
          <div className={classes.menu}>
            <Typography variant="h1" align="left" className={classes.title}>
              Seu bixinho, 
              <br />
              em boas mãos!
            </Typography>

            <Grid style={{ margin: '5%' }}>
              <Typography variant="subtitle1" align="left" gutterBottom className={classes.text}>
                LOCAL
              </Typography>
              <SearchIcon className={classes.icon} />
              <TextField
                className={classes.input}
                id="standard-basic"
                placeholder="localização"
                onChange={(e) => setLocation(e.target.value)}
              />
            </Grid>

            <Grid style={{ margin: '5%' }}>
              <Grid container>
                <Grid>
                  <Typography
                    variant="subtitle1"
                    align="left"
                    gutterBottom
                    className={classes.text}
                  >
                    RESERVA
                  </Typography>
                  <TextField
                    id="datetime-local"
                    type="datetime-local"
                    defaultValue={start}
                    className={classes.datePicker}
                    onChange={(e) => setStart(e.target.value)}
                  />
                </Grid>
                <Grid style={{ marginLeft: '5%' }}>
                  <Typography
                    variant="subtitle1"
                    align="left"
                    gutterBottom
                    className={classes.text}
                  >
                    RECUPERA
                  </Typography>
                  <TextField
                    id="datetime-local"
                    type="datetime-local"
                    defaultValue={end}
                    className={classes.datePicker}
                    onChange={(e) => setEnd(e.target.value)}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Button
              variant="contained"
              size="large"
              color="primary"
              className={classes.button}
              onClick={findSitters}
            >
              FIND MY DOG SITTER
            </Button>
          </div>
        </Grid>
        <Grid item xs={6} className={classes.img} align="right">
          <img
            alt="LovingSitters"
            src="/images/landing.jpg"
            style={{ width: '85%', height: '100%' }}
          ></img>
        </Grid>
      </Grid>
      <Snackbar open={messageOpen} autoHideDuration={1500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info">
          This feature is currently under construction.
        </Alert>
      </Snackbar>
    </>
  );
}
