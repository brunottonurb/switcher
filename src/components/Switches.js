import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  FormGroup,
  FormControlLabel,
} from 'material-ui/Form';
import Card, { CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import yellow from 'material-ui/colors/yellow';
import blue from 'material-ui/colors/blue';
import grey from 'material-ui/colors/grey';
import red from 'material-ui/colors/red';
import Switch from 'material-ui/Switch';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  card: {
    margin: theme.spacing.unit * 2,
    maxWidth: 400,
  },
  title: {
    fontSize: 14,
    color: theme.palette.text.secondary,
    textTransform: 'uppercase',
  },
  switch_0: {
    color: blue[500],
    '& + $bar': {
      backgroundColor: blue[500],
    },
  },
  switch_1: {
    color: grey[300],
    '& + $bar': {
      backgroundColor: grey[300],
    },
  },
  switch_2: {
    color: red[500],
    '& + $bar': {
      backgroundColor: red[500],
    },
  },
  switch_3: {
    color: yellow[500],
    '& + $bar': {
      backgroundColor: yellow[500],
    },
  },
  bar: {},
});

const Switches = (props) => {
  const {
    classes,
    switches,
    onChange,
    title,
    labels,
  } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title}>{title}</Typography>
        <FormControl component="fieldset">
          <FormGroup>
            {Object.keys(switches).map((id, index) =>
              (<FormControlLabel
                control={
                  <Switch
                    checked={switches[id]}
                    onChange={(event, checked) => onChange([id], checked)}
                    value={toString(id)}
                    classes={{
                      checked: classes[`switch_${index}`],
                      bar: classes.bar,
                    }}
                  />
                }
                key={id}
                label={labels[id]}
              />))
            }
            <div>
              <Button
                color="primary"
                variant="raised"
                className={classes.button}
                onClick={() => onChange(Object.keys(switches), true)}
              >
                All On
              </Button>
              <Button
                color="secondary"
                variant="raised"
                onClick={() => onChange(Object.keys(switches), false)}
              >
                All Off
              </Button>
            </div>
          </FormGroup>
        </FormControl>
      </CardContent>
    </Card>
  );
};

Switches.propTypes = {
  classes: PropTypes.object.isRequired,
  switches: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  labels: PropTypes.object.isRequired,
};

export default withStyles(styles)(Switches);
