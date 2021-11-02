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
        minWidth: 240,
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

export default function SuperpixelTransform(props) {
    const classes = useStyles();
    const [region_size, setRegion] = React.useState(0);
    const [iterations, setIterations] = React.useState(0);
    //handle region size slider changes
    const handleRegionSliderChange = (event, newValue) => {
        setRegion(newValue)
        props.regionsizehandler(newValue)
       
    };

    const handleRegionInputChange = (event) => {
        setRegion(event.target.value === '' ? '' : Number(event.target.value));
        props.regionsizehandler(event.target.value)
        
    };

    const handleRegion = () => {
        if (region_size < 0) {
            setRegion(0);
        } else if (region_size > 100) {
            setRegion(100);
        }
    };
    //handle iterations slider changes
    const handleIterSliderChange = (event, newValue) => {
        setIterations(newValue)
        props.iterationshandler(newValue)
       
    };

    const handleIterInputChange = (event) => {
        setIterations(event.target.value === '' ? '' : Number(event.target.value));
        props.iterationshandler(event.target.value)
        
    };

    const handleIter = () => {
        if (iterations < 0) {
            setIterations(0);
        } else if (iterations > 100) {
            setIterations(100);
        }
    }

    return (
        <div className={classes.root}>
          
          <Typography>Superpixel Interpolation</Typography>
            <Grid container spacing={3} alignItems="left">
                <Grid item>

                </Grid>
                <Grid item xs>
                    <Typography>Region Size</Typography>
                    <Slider
                        value={typeof region_size === 'number' ? region_size : 0}
                        onChange={handleRegionSliderChange}
                        aria-labelledby="blur-input-slider"
                        step={5}
                        min={5}
                        max={100}
                    />

                </Grid>
                <Grid item>
                    <Input
                        className={classes.input}
                        value={region_size}
                        margin="dense"
                        onChange={handleRegionInputChange}
                        onBlur={handleRegion}
                        inputProps={{
                            step: 5,
                            min: 5,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'blur-input-slider',
                        }}
                    />

                </Grid>

            </Grid>
            <Grid container spacing={3} alignItems="left">
                <Grid item>

                </Grid>
            <Grid item xs>
                    <Typography>Iterations</Typography>
                    <Slider
                        value={typeof iterations === 'number' ? iterations : 0}
                        onChange={handleIterSliderChange}
                        aria-labelledby="blur-input-slider"
                        step={5}
                        min={5}
                        max={100}
                    />

                </Grid>
                <Grid item>
                    <Input
                        className={classes.input}
                        value={iterations}
                        margin="dense"
                        onChange={handleIterInputChange}
                        onBlur={handleIter}
                        inputProps={{
                            step: 5,
                            min: 5,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'blur-input-slider',
                        }}
                    />

                </Grid></Grid>

      
         

        </div>
        
    );
}