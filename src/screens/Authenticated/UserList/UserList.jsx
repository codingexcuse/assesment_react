import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import AddUser from '../AddUser/AddUser';
import { Backdrop, Modal, Fade } from '@mui/material';


const columns = [

    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    { field: 'email', headerName: 'Email ID', width: 200 },

    {
        field: 'phoneNumber',
        headerName: 'Phone Number',
        type: 'string',
        width: 200,
    },

    {
        field: 'userState',
        headerName: 'User State',
        type: 'boolean',
        width: 200,
    },

    {
        field: 'companyName',
        headerName: 'Company Name',
        type: 'string',
        width: 200,
    },
    {
        field: 'actions',
        headerName: 'Actions',
        width: 200,
    },


];


export default function DataTable() {

    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);

    const fetchData = async () => {
        const response = await axios.get('http://13.233.74.100/users/get');
        setData(response.data);
        console.log(response.data)
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }


    return (
        <div style={{ height: 400, width: '100%' }}>

            <button onClick={handleOpen}>Add</button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>

                    <div className="popform">
                        <button onClick={handleClose}>CLOSE</button>
                        <AddUser />
                    </div>
                </Fade>
            </Modal>


            <DataGrid
                rows={data}
                columns={columns}
            />
        </div>
    );
}
