import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function AddEventDialog({ handleSubmit, handleClose, open, setValue, value }) {

    return (
        <div>
            <Dialog fullWidth open={open} onClose={handleClose}>
                <DialogTitle>Add an event</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        name='title'
                        label="Enter title"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={value.title}
                        onChange={(e) =>
                            setValue((prevState) => ({
                                ...prevState,
                                [e.target.name]: e.target.value
                            }))}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name='start'
                        id="start"
                        label="yyyy-mm-dd"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={value.start}
                        onChange={(e) =>
                            setValue((prevState) => ({
                                ...prevState,
                                [e.target.name]: e.target.value
                            }))}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}