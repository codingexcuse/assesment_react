import { useState } from 'react';
import axios from 'axios';

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import styledComponent from "styled-components";
import { Divider } from '@mui/material';

import './UpdateForm.css';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';


const CustomTextField = styledComponent(TextField)`
  & label.Mui-focused {
    color: #4D47C3;
    background-color: #4D47C3;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #4D47C3;
    }
  }
`;

const dropdownValue = [
    {
        value: "true",
        label: "Active",
    },
    {
        value: "false",
        label: "Inactive",
    }
];


const UpdateForm = ({ fetchData, handleClose, data,
    setIsSuccess,
    setIsError,
    setResponseErrorMessage, }) => {

    const [firstName, setFirstName] = useState(data.firstName);
    const [lastName, setLastName] = useState(data.lastName);
    const [email, setEmail] = useState(data.email);
    const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber);
    const [companyName, setCompanyName] = useState(data.companyName);
    const [userState, setuserState] = useState(data.userState);

    const handleUpdate = async () => {
        handleClose();
        const updatedData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            companyName: companyName,
            userState: userState
        }
        try {
            const response = await axios.put(`http://13.233.74.100/users/edit/${data.id}`, updatedData);
            console.log(response.data);
            fetchData();
            setIsSuccess(true);

        } catch (e) {
            setIsError(true);
            console.log(e);
            setResponseErrorMessage(e.response.data.message);
        }

    }

    return (
        <Box
            sx={{
                my: 2,
                mx: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
            }}
        >

            <Divider />

            <Grid container spacing={1}>
                <Grid item xs={12} sm={4}>
                    <Typography sx={{ color: "#8D8D8E" }} mt={3}>
                        First Name
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography sx={{ color: "#8D8D8E" }} mt={3}>
                        Last Name
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography sx={{ color: "#8D8D8E" }} mt={3}>
                        User Status
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <CustomTextField
                        sx={{ color: "red" }}
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <CustomTextField
                        required
                        fullWidth
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box
                        component="form"
                        sx={{
                            "& .MuiTextField-root": { width: 1 },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <CustomTextField
                            required
                            id="outlined-select-currency"
                            select
                            value={userState}
                            onChange={(event) => setuserState(event.target.value)}
                        >
                            {dropdownValue.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </CustomTextField>
                    </Box>
                </Grid>
            </Grid>

            <Grid container spacing={1} mt={1}>

                <Grid item xs={12} sm={4}>
                    <Typography sx={{ color: "#8D8D8E" }}>Email ID</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography sx={{ color: "#8D8D8E" }}>Phone Number</Typography>
                </Grid>
                <Typography sx={{ color: "#8D8D8E" }}>
                    Company Name
                </Typography>

                <Grid item xs={12} sm={4}>
                    <CustomTextField
                        autoComplete="given-name"
                        name="email"
                        required
                        fullWidth
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <CustomTextField
                        required
                        fullWidth
                        type="number"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <CustomTextField
                        required
                        fullWidth
                        id="companyName"
                        name="companyName"
                        value={companyName}
                        onChange={(event) => setCompanyName(event.target.value)}
                    />
                </Grid>
            </Grid>

            <Grid item xs={12} sm={12} mt={2}>
                <Stack spacing={2} direction="row">
                    <PrimaryButton
                        sx={{ width: "110px", marginTop: "20px" }}
                        variant="outlined"
                        onClick={handleUpdate}>
                        UPDATE
                    </PrimaryButton>
                </Stack>
            </Grid>

        </Box>
    );
};

export default UpdateForm;
