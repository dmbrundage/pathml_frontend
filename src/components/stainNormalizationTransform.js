import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
    },box: {
        bgcolor: 'background.paper',
        m: 1,
        style: { width: '5rem', height: '5rem' },
        borderColor: 'text.primary',
      },
}));

export default function StainNormalizationTransform(props) {
    const classes = useStyles();
    const [stain, setStain] = React.useState('None');
    const [method, setMethod] = React.useState('None');
    const [stainOpen, setStainOpen] = React.useState(false);
    const [methodOpen, setMethodOpen] = React.useState(false);

    const handleStainChange = (event) => {
        setStain(event.target.value);
        props.staintypehandler(event.target.value)

    };

    const handleStainClose = () => {
        setStainOpen(false);
    };

    const handleStainOpen = () => {
        setStainOpen(true);
    };
    const handleMethodChange = (event) => {
        setMethod(event.target.value);
        props.stainmethodhandler(event.target.value)

    };

    const handleMethodClose = () => {
        setMethodOpen(false);
    };

    const handleMethodOpen = () => {
        setMethodOpen(true);
    };


    return (
        <div className={classes.root}>
          
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
                            open={stainOpen}
                            onClose={handleStainClose}
                            onOpen={handleStainOpen}
                            value={stain}
                            onChange={handleStainChange}
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

            <Typography >
                Select Method
            </Typography>
            <Grid container spacing={3} alignItems="center">
                <Grid item>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-controlled-open-select-label">Method</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={methodOpen}
                            onClose={handleMethodClose}
                            onOpen={handleMethodOpen}
                            value={method}
                            onChange={handleMethodChange}
                        >
                            <MenuItem value={'None'}>
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'vahadane'}>Vahadane</MenuItem>
                            <MenuItem value={'macenko'}>Macenko</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>


        </div>
        
    );
}