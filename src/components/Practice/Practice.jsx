import { AppBar, CssBaseline, Divider, Drawer, Grid, Input, TextField, Toolbar, Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system';
import { images } from '../../utils/constants/images';
import React from 'react'
import SidebarItem from '../SideBarItem/SidebarItem';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";



const Practice = () => {

    const theme = useTheme();
    const drawerWidth = 240;

    return (
        <div>

            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppBar
                    elevation={0}
                    position="fixed"
                    sx={{
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                        background: theme.palette.navbar,
                    }}
                >
                    <Toolbar sx={{ marginLeft: "10px" }}>
                        <img src={images.logo} alt="logo" width="149px" height="42px" />
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: {
                            width: drawerWidth,
                            boxSizing: "border-box",
                        },
                    }}
                >
                    <Toolbar />
                    <Box sx={{ overflow: "auto", fontWeight: 500 }}>
                        <SidebarItem text="Users" active={true} />
                        <SidebarItem text="Roles" />
                        <SidebarItem text="Companies" />
                        <SidebarItem text="Wholesalers" />
                    </Box>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />




                    <Grid container spacing={1}>
                        <Grid item sx={{ marginLeft: "30px" }}>
                            <Typography
                                sx={{
                                    fontWeight: "600",
                                    marginTop: "8px",
                                    fontSize: 20
                                }}
                            > Users </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <PrimaryButton
                                titleName={"Add User"}
                                variant="outlined"
                                size="small"
                                sx={{ width: "70px", marginLeft: "60rem", marginTop: "4px" }}>
                                Add
                            </PrimaryButton>
                        </Grid>

                        <Grid item xs={2}>
                            <PrimaryButton
                                titleName={"Delete User"}
                                variant="outlined"
                                size="small"
                                sx={{ width: "80px", marginLeft: "52rem", marginTop: "4px" }}>
                                Filter
                            </PrimaryButton>
                        </Grid>

                    </Grid>

                    <Divider sx={{ marginTop: "20px" }} />

                    <Box sx={{
                        marginTop: "1rem",
                        textAlign: "left"
                    }}>
                        <Grid container spacing={6} sx={{ color: theme.palette.headerFont }}>
                            <Grid item xs={2}>
                                <Typography
                                >First Name</Typography>
                            </Grid>
                            <Grid item xs={1.7}>
                                <Typography>Last Name</Typography>
                            </Grid>
                            <Grid item xs={2.4}>
                                <Typography>Email ID</Typography>
                            </Grid>
                            <Grid item xs={3.1}>
                                <Typography>Company Name</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography sx={{
                                    color: theme.palette.headerFont
                                }}>
                                    Actions
                                </Typography>
                            </Grid>

                        </Grid>
                    </Box>

                    <Box sx={{ padding: "5px" }}>
                        <Grid container spacing={2} sx={{
                            marginTop: "15px",
                            backgroundColor: theme.palette.secondary.main,
                            borderRadius: "6px",
                            marginBottom: "1rem",
                            height: "4rem"

                        }}>
                            <Grid item xs={2}>
                                <Typography>
                                    Tanishqa
                                </Typography>
                            </Grid>
                            <Grid item xs={1.8}>
                                <Typography>
                                    Raut
                                </Typography>
                            </Grid>
                            <Grid item xs={2.5}>
                                <Typography>
                                    tanishqa.raut@gmail.com
                                </Typography>
                            </Grid>
                            <Grid item xs={2.5}>
                                <Typography>
                                    Clover Bay Technologies
                                </Typography>
                            </Grid>
                            <Grid item xs={0.4} sx={{ marginLeft: "70px" }}>
                                <Typography>
                                    <EditOutlinedIcon
                                        fontSize="small"
                                        sx={{
                                            cursor: "pointer",
                                            color: theme.palette.primary.main,

                                        }}
                                    />
                                </Typography>
                            </Grid>
                            <Grid item xs={0.5} sx={{ marginLeft:"0.2px"  }}>
                                <Typography>
                                    <DeleteOutlineOutlinedIcon
                                        fontSize="small"
                                        sx={{
                                            cursor: "pointer",
                                            color: theme.palette.primary.main,
                                        }}
                                    />
                                </Typography>
                            </Grid>

                        </Grid>
                    </Box>



                    {/* <Box
                        sx={{
                            my: 2,
                            mx: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "left",
                            borderColor: "black",
                            borderWidth: "0.2px",
                            borderStyle: "solid",
                            padding: "30px",
                            borderRadius: "5px",
                            height: "400px",
                            width: "600px",
                            alignContent: "center",
                            marginLeft: "15rem"

                        }}
                    >
                        <Divider />
                        <Grid container spacing={2} sx={{ textAlign: "center", marginTop: "0.5rem", borderColor: "black", borderWidth: "2px" }} >

                            <Grid item
                                xs={12} sm={6}
                                marginTop={"3rem"}
                                sx={{ textAlign: "left" }} >
                                <Typography>
                                    First Name
                                </Typography>
                            </Grid>

                            <Grid item
                                xs={12} sm={6}
                                marginTop={"3rem"}
                                sx={{ textAlign: "left" }}>
                                <Typography>
                                    Last Name
                                </Typography>
                            </Grid>


                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    placeholder='first name' />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    placeholder='last name' />
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} sx={{ textAlign: "center", borderColor: "black", borderWidth: "2px" }} >

                            <Grid item xs={12} sm={6}
                                marginTop={"3rem"}
                                sx={{ textAlign: "left" }}>
                                <Typography>
                                    Email ID
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6}
                                marginTop={"3rem"}
                                sx={{ textAlign: "left" }}>
                                <Typography>
                                    Company Name
                                </Typography>
                            </Grid>


                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    placeholder='email id' />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    placeholder='company name' />
                            </Grid>


                        </Grid>

                    </Box> */}


                </Box>
            </Box>






            <Grid >hi</Grid>

        </div>

    );
}

export default Practice;