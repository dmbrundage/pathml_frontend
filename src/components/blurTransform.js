import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: 2,
    },
    formControl: {
        margin: 10,
        minWidth: 200,
    },
    root: {
        width: 250,
    },
    input: {
        width: 42,
    },
    box: {
        bgcolor: 'background.paper',
        m: 1,
        style: { width: '5rem', height: '5rem' },
        borderColor: 'text.primary',
      },
}));

export default function BlurTransform(props) {
    const classes = useStyles();
    const [blur_value, setBlur] = React.useState(0);
    const [thresh_value, setThresh] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [blurType, setBlurtype] = React.useState('None');
    const handleBlurSliderChange = (event, newValue) => {
        setBlur(newValue)
        props.blurvaluehandler(newValue)
       
    };

    const handleBlurInputChange = (event) => {
        setBlur(event.target.value === '' ? '' : Number(event.target.value));
        props.blurvaluehandler(event.target.value )
        
    };

    const handleBlur = () => {
        if (blur_value < 0) {
            setBlur(0);
        } else if (blur_value > 31) {
            setBlur(31);
        }
    };



    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleChange = (event) => {
        setBlurtype(event.target.value);
        props.blurtypehandler(event.target.value)
    };

    return (
    <React.Fragment>
          <Typography>Blur</Typography>
          <FormControl className={classes.formControl}>
                        <InputLabel id="demo-controlled-open-select-label">Bluring Method</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={blurType}
                            onChange={handleChange}
                        >
                            <MenuItem value={'None'}>
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'median'}>Median</MenuItem>
                            <MenuItem value={'box'}>Box</MenuItem>
                            <MenuItem value={'gaussian'}>Gaussian</MenuItem>
                        </Select>
                    </FormControl>
            <Grid container spacing={3} alignItems="left">
                <Grid item>

                </Grid>
                <Grid item xs>
                    <Slider
                        value={typeof blur_value === 'number' ? blur_value : 5}
                        onChange={handleBlurSliderChange}
                        aria-labelledby="blur-input-slider"
                        step={3}
                        max={31}
                    />

                </Grid>
                <Grid item>
                    <Input
                        className={classes.input}
                        value={blur_value}
                        margin="dense"
                        onChange={handleBlurInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 3,
                            min: 0,
                            max: 31,
                            type: 'number',
                            'aria-labelledby': 'blur-input-slider',
                        }}
                    />

                </Grid>
            </Grid>
           
            </React.Fragment>
        

        
    );
}