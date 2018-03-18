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
  yellow: {
    color: yellow[500],
    '& + $bar': {
      backgroundColor: yellow[500],
    },
  },
  blue: {
    color: blue[500],
    '& + $bar': {
      backgroundColor: blue[500],
    },
  },
  red: {
    color: red[500],
    '& + $bar': {
      backgroundColor: red[500],
    },
  },
  grey: {
    color: grey[300],
    '& + $bar': {
      backgroundColor: grey[300],
    },
  },
  bar: {},
});

const Switches = (props) => {
  const {
    classes,
    switches,
    onChange,
    title
  } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title}>{title}</Typography>
        <FormControl component="fieldset">
          <FormGroup>
            {switches.map(s =>
              (<FormControlLabel
                control={
                  <Switch
                    checked={s.state}
                    onChange={(event, checked) => onChange([s.id], checked)}
                    value={toString(s.id)}
                    classes={{
                      checked: classes[s.color],
                      bar: classes.bar,
                    }}
                  />
                }
                key={s.id}
                label={s.name}
              />))
            }
            <div>
              <Button
                color="primary"
                variant="raised"
                className={classes.button}
                onClick={() => onChange(switches.map(s => s.id), true)}
              >
                All On
              </Button>
              <Button
                color="secondary"
                variant="raised"
                onClick={() => onChange(switches.map(s => s.id), false)}
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
  switches: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(Switches);
