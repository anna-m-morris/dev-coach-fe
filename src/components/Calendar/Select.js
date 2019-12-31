// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles(theme => ({
//     button: {
//         display: 'block',
//         marginTop: theme.spacing(2),
//     },
//     formControl: {
//         margin: theme.spacing(1),
//         minWidth: 120,
//     },
// }));

// export default function ControlledOpenSelect() {
//     const classes = useStyles();
//     const [age, setAge] = React.useState('');
//     const [open, setOpen] = React.useState(false);

//     const handleChange = event => {
//         setAge(event.target.value);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     const handleOpen = () => {
//         setOpen(true);
//     };

//     return (
//         <div>
//             <FormControl className={classes.formControl}>
//                 <InputLabel id="demo-controlled-open-select-label">Length</InputLabel>
//                 <Select
//                     labelId="demo-controlled-open-select-label"
//                     id="demo-controlled-open-select"
//                     open={open}
//                     onClose={handleClose}
//                     onOpen={handleOpen}
//                     value={null}
//                     onChange={handleChange}
//                 >
//                     <MenuItem value="">
//                         <em>None</em>
//                     </MenuItem>
//                     <MenuItem value={10}>30 Minutes</MenuItem>
//                     <MenuItem value={20}>1 Hour</MenuItem>
//                 </Select>
//             </FormControl>

//             <FormControl className={classes.formControl}>
//                 <InputLabel id="demo-controlled-open-select-label">Topic</InputLabel>
//                 <Select
//                     labelId="demo-controlled-open-select-label"
//                     id="demo-controlled-open-select"
//                     open={open}
//                     onClose={handleClose}
//                     onOpen={handleOpen}
//                     value={null}
//                     onChange={handleChange}
//                 >
//                     <MenuItem value="">
//                         <em>None</em>
//                     </MenuItem>
//                     <MenuItem value={1}>Frontend</MenuItem>
//                     <MenuItem value={2}>Backend</MenuItem>
//                     <MenuItem value={3}>Algortihms / Data Structes</MenuItem>
//                     <MenuItem value={4}>Behavorial Interview</MenuItem>
//                     <MenuItem value={5}>System Design</MenuItem>
//                     <MenuItem value={6}>React</MenuItem>
//                 </Select>
//             </FormControl>
//         </div>
//     );
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

let data = {'topic-select': null, 'length-select': null}; 
// global value for now => later handle change with redux

export default function GroupedSelect() {
    const [length, setLength] = React.useState('');

    const handleChange = event => {
        setLength(event.target.value);
        // check event target name and decide which input (handle with redux)
        
        data[event.target.name] = event.target.value;

        // safe data object as redux state and if longer than 1 so the last 
        // data got added let the screen disappear and let the student make the payment
        
        console.log(event.target.name, event.target.value, data)
    };

    const classes = useStyles();

    return (
        <div>
            {/* <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">Length</InputLabel>
                <Select native defaultValue=""
                    input={<Input onChange={handleChange} name="length-select" id="length-select" />}>
                    <MenuItem value={1}>30 Minutes</MenuItem>
                    <MenuItem value={2}>1 Hour</MenuItem>
                </Select>
            </FormControl> */}

            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-select">Length</InputLabel>
                <Select defaultValue="Frontend" input={<Input onChange={handleChange} name="length-select" id="length-select" />}>
                    <MenuItem value={1}>30 Minutes</MenuItem>
                    <MenuItem value={2}>1 Hour</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-select">Topic</InputLabel>
                <Select defaultValue="Frontend" input={<Input onChange={handleChange} name="topic-select" id="topic-select" />}>
                    <MenuItem value={1}>Frontend</MenuItem>
                    <MenuItem value={2}>Backend</MenuItem>
                    <MenuItem value={3}> Algortihms / Data Structes</MenuItem>
                    <MenuItem value={4}>Behavorial Interview</MenuItem>
                    <MenuItem value={5}>System Design</MenuItem>
                    <MenuItem value={6}>React</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
