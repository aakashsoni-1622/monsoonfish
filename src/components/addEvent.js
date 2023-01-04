import * as React from 'react';
import { Button } from '@mui/material'
import AddEventDialog from './addEventDialog';

function AddEvent({ event }) {

    //add event dialog box state variable
    const [open, setOpen] = React.useState(false);

    //add event dialog box field value object
    const [value, setValue] = React.useState({
        'title': '',
        'start': ''
    })

    /** below functions for opening and closing the dialog box */
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //add event dialog box submit function
    const handleSubmit = () => {
        event.push(value)
        setOpen(false);
        localStorage.setItem('data', JSON.stringify(event))
        window.location.reload()
    };

    return (
        <div style={{ textAlign: 'center', margin: 50 }}>
            <Button type='submit' onClick={handleClickOpen} variant="contained">Add Event</Button>
            <AddEventDialog value={value} setValue={setValue} handleSubmit={handleSubmit} handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} />
        </div>
    )
}

export default AddEvent