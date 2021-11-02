import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';


const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: 2,
    },
    formControl: {
        margin: 1,
        minWidth: 240,
    },
    root: {
        width: 250,
    },
    input: {
        width: 42,
    },
}));

export default function TissueDetection(props) {
    const classes = useStyles();
    const [stain, setStain] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [blur_value, setBlur] = React.useState(0);
    const [thresh_value, setThresh] = React.useState(0);
    const [code_params, setParams] = React.useState()
    const [nuclei, setNuclei] = React.useState(false);
    const [checked, setChecked] = React.useState(false);
    const [returnedImage, setReturnedImage] = React.useState();

    const handleCheck = (event) => {
      setChecked(event.target.checked);
      setParams({
        'blur': blur_value,
        'threshold': thresh_value,
        'stain': stain,
        'detect_nuclei':event.target.checked
    })
    console.log(code_params)
    };

    const runCode = () => {
        console.log(code_params)
        fetch('http://35.223.139.33:5000/run_code/', {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(code_params)
}).then(response => response.json())
.then(response => {
    setReturnedImage(response['image'])
    props.handler(response['image'])

})
    }

    const handleChange = (event) => {
        setStain(event.target.value);
        setParams({
            'blur': blur_value,
            'threshold': thresh_value,
            'stain': event.target.value,
            'detect_nuclei':nuclei
        })
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleBlurSliderChange = (event, newValue) => {
        setBlur(newValue)
        setParams({
            'blur': newValue,
            'threshold': thresh_value,
            'stain': stain,
            'detect_nuclei':nuclei
        });
       
    };

    const handleBlurInputChange = (event) => {
        setBlur(event.target.value === '' ? '' : Number(event.target.value));
        setParams({
            'blur': event.target.value,
            'threshold': thresh_value,
            'stain': stain,
            'detect_nuclei':nuclei
        })
        
    };

    const handleBlur = () => {
        if (blur_value < 0) {
            setBlur(0);
        } else if (blur_value > 300) {
            setBlur(300);
        }
    };


    const handleThreshSliderChange = (event, thresh_value) => {
        setThresh(thresh_value);
        setParams({
            'blur': blur_value,
            'threshold': thresh_value,
            'stain': stain,
            'detect_nuclei':nuclei
            
        })
        
        
    };

    const handleThreshInputChange = (event) => {
        setThresh(event.target.value === '' ? '' : Number(event.target.value));
        setParams({
            'blur': event.target.value ,
            'threshold': thresh_value,
            'stain': stain,
            'detect_nuclei':nuclei
        })
    };

    const handleThreshBlur = () => {
        if (thresh_value < 0) {
            setThresh(0);
        } else if (thresh_value > 300) {
            setThresh(300);
        }
    };

    const handleCheckChange = (event) => {
        setNuclei(event.target.checked);
        setParams({
            'blur': blur_value,
            'threshold': thresh_value,
            'stain': stain,
            'detect_nuclei':event.target.checked
        })
        console.log(code_params)
      };

    return (
        
        <div className={classes.root}>
            <Typography id="blur-input-slider" gutterBottom>
            
            Tissue Detection
        </Typography>
                      <FormGroup row>
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={handleCheck} name="checkedA" />}
        label="Use Saturation"
      />

    </FormGroup>
          
            <Typography id="blur-input-slider" gutterBottom>
            
                Kernel Size
            </Typography>
            <Grid container spacing={3} alignItems="left">
                <Grid item>

                </Grid>
                <Grid item xs>
                    <Slider
                        value={typeof blur_value === 'number' ? blur_value : 0}
                        onChange={handleBlurSliderChange}
                        aria-labelledby="blur-input-slider"
                        step={3}
                        max={300}
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
                            max: 300,
                            type: 'number',
                            'aria-labelledby': 'blur-input-slider',
                        }}
                    />

                </Grid>
            </Grid>
            <Typography id="input-slider2" gutterBottom>
                N Morphological Iterations
            </Typography>
            <Grid container spacing={3} alignItems="left">
                <Grid item>

                </Grid>
                <Grid item xs>
                    <Slider
                        value={typeof thresh_value === 'number' ? thresh_value : 0}
                        onChange={handleThreshSliderChange }
                        aria-labelledby="input-slider2"
                        max={300}
                    />

                </Grid>
                <Grid item >
                    <Input
                        className={classes.input}
                        value={thresh_value}
                        margin="dense"
                        onChange={handleThreshInputChange}
                        onBlur={handleThreshBlur}
                        inputProps={{
                            step: 10,
                            min: 0,
                            max: 300,
                            type: 'number',
                            'aria-labelledby': 'input-slider2',
                        }}
                    />

                </Grid>
            </Grid>
            <Typography id="input-slider2" gutterBottom>
                Tissue Region Size
            </Typography>
            <Grid container spacing={3} alignItems="left">
                <Grid item>

                </Grid>
                <Grid item xs>
                    <Slider
                        value={typeof thresh_value === 'number' ? thresh_value : 0}
                        onChange={handleThreshSliderChange }
                        aria-labelledby="input-slider2"
                        max={300}
                    />

                </Grid>
                <Grid item >
                    <Input
                        className={classes.input}
                        value={thresh_value}
                        margin="dense"
                        onChange={handleThreshInputChange}
                        onBlur={handleThreshBlur}
                        inputProps={{
                            step: 10,
                            min: 0,
                            max: 300,
                            type: 'number',
                            'aria-labelledby': 'input-slider2',
                        }}
                    />

                </Grid>
            </Grid>
            <Typography >
                Select Stain Normalization
            </Typography>
            <Grid container spacing={3} alignItems="center">
                <Grid item>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-controlled-open-select-label">Stain</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={stain}
                            onChange={handleChange}
                        >
                            <MenuItem value={'None'}>
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'normalize'}>Normalize</MenuItem>
                            <MenuItem value={'hematoxylin'}>Hematoxylin</MenuItem>
                            <MenuItem value={'eosin'}>Eosin</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <FormGroup row>
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={handleCheck} name="checkedA" />}
        label="Outer Contours Only"
      />

    </FormGroup>
    <Typography id="input-slider2" gutterBottom>
                Maximum Hole Size
            </Typography>
            <Grid container spacing={3} alignItems="left">
                <Grid item>

                </Grid>
                <Grid item xs>
                    <Slider
                        value={typeof thresh_value === 'number' ? thresh_value : 0}
                        onChange={handleThreshSliderChange }
                        aria-labelledby="input-slider2"
                        max={300}
                    />

                </Grid>
                <Grid item >
                    <Input
                        className={classes.input}
                        value={thresh_value}
                        margin="dense"
                        onChange={handleThreshInputChange}
                        onBlur={handleThreshBlur}
                        inputProps={{
                            step: 10,
                            min: 0,
                            max: 300,
                            type: 'number',
                            'aria-labelledby': 'input-slider2',
                        }}
                    />

                </Grid>
            </Grid>



            

        </div>
        
    );
}