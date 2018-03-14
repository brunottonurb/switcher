import React from 'react';
import Switches from '../components/Switches';

const Switches = (props) => {
  const { switches, onChange, title } = props;
  return (
    <Switches
      switches={switches}
      onChange={onChange}
      title={title}
    />
  );
};

export default Switches;
