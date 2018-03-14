import React from 'react';
import PropTypes from 'prop-types';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
} from 'material-ui/Form';
import Button from 'material-ui/Button';
import Switch from 'material-ui/Switch';

const Switches = (props) => {
  const { switches, onChange, title } = props;
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{title}</FormLabel>
      <FormGroup>
        {switches.map(s =>
          (<FormControlLabel
            control={
              <Switch
                checked={s.active}
                onChange={s.onChange}
                value={s.id}
              />
            }
            label={s.name}
          />))
        }
      </FormGroup>
      <Button variant="raised">
        All On
      </Button>
      <Button variant="raised">
        All Off
      </Button>
    </FormControl>
  );
};

Switches.propTypes = {
  switches: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Switches;
