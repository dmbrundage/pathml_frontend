import React from 'react';
import { withStyles } from '@material-ui/styles';

import Switch from '@material-ui/core/Switch';


const AntSwitch = withStyles((theme) => ({

  switchBase: {
    padding: 12,
    color: 'grey',
    '&$checked': {
      transform: 'translateX(12px)',
      color: 'white',
      '& + $track': {
        opacity: 1,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid grey`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: 'white',
  },
  checked: {},
}))(Switch);

export default function CustomizedSwitches(props) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    console.log(props.text)
    console.log(props.switch_state)
    if (props.text === 'Blur') {
      props.blurhandler(event.target.checked)
    }
    if (props.text === 'Superpixel Interpolation') {
      props.pixelhandler(event.target.checked)
    }
    if (props.text === 'Stain Normalization') {
      props.stainhandler(event.target.checked)
    }
  };

  return (

            <AntSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />


  );
}