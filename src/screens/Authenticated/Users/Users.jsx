import React, { useState, useEffect } from "react";
import axios from 'axios';

import { Grid, Box, Typography, Divider } from "@mui/material";
import { useTheme } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import LoadingBar from "react-top-loading-bar";

import './Users.css';
import PaginationComponent from "../../../components/Pagination/Pagination";
import AddUser from '../AddUser/AddUser';
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import ModalComponent from "../../../components/Modal/ModalComponent";
import UpdateForm from "../Update/UpdateForm";
import FilterForm from "../Filter/Filter";
import AlertDialog from "../../../components/ConfirmationBox/ConfirmationBox";
import NotificationBox from "../../../components/NotificationBox/NotificationBox";


const Users = () => {

  const theme = useTheme();

  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [prevPage, setPrevPage] = useState(5);
  const [totalPage, setTotalPage] = useState(0);
  const [showPage, setShowPage] = useState(1);
  const [order, setOrder] = useState("ASC");
  const [updateOpen, setUpdateOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [user, setUser] = useState("");
  const [dataAvailability, setdataAvailability] = useState(false);

  const [showDeleteErrorMessage, setDeleteShowErrorMessage] = useState(false);
  const [showDeleteSuccessMessage, setDeleteSuccessMessage] = useState(false);
  const [showAddErrorMessage, setAddShowErrorMessage] = useState(false);
  const [showAddSuccessMessage, setShowAddSuccessMessage] = useState(false);
  const [responseErrorMessage, setResponseErrorMessage] = useState("");
  const [progress, setProgress] = useState(0);


  const handleDeleteMessage = () => {
    setTimeout(() => {
      setDeleteShowErrorMessage(false);
      setDeleteSuccessMessage(false);
      setAddShowErrorMessage(false);
      setShowAddSuccessMessage(false);
    }, 5000);
  };


  const fetchData = async () => {
    setProgress(30);
    try {
      const response = await axios.get('http://13.233.74.100/users/get');
      setProgress(60);
      setData(response.data);
      setTotalPage(Math.ceil(response.data.length / 5));

    } catch (e) {
      setProgress(60)
      setdataAvailability(true);
      if (e.status !== 200) {
        console.log("Something went wrong!");
      }
    }
    setProgress(100)
  }

  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = async (userId) => {
    setProgress(30)
    console.log("ID", userId)
    let id = userId + 1
    try {
      await axios.delete(`http://13.233.74.100/users/delete/${id}`);
      setDeleteSuccessMessage(true)
      fetchData();
      setProgress(60)

    } catch (e) {
      setProgress(60)
      console.log(e);
      setDeleteShowErrorMessage(true);
    }
    setProgress(100)
  }

  const handleSorting = (value) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[value].toLowerCase() > b[value].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[value].toLowerCase() < b[value].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };

  const handleUpdateClose = () => {
    setUpdateOpen(!updateOpen);
  }

  const handleFilterOpen = () => {
    setFilterOpen(true);
  }

  const handleFilterClose = () => {
    setFilterOpen(!filterOpen);
  }

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    console.log("Called")
    setOpen(!open);
  }

  const handlePagination = (page) => {
    setPrevPage(page * 5);
  }

  const handleUpdateUser = (myuser) => {
    setUpdateOpen(true);
    setUser(myuser);
  }

  return (
    <div>
      <LoadingBar
        height={3}
        color="#4D47C3"
        progress={progress}
        shadow={true}
      />
      <Grid container spacing={2}>
        <Grid item xs={2.3}>
          <Typography
            sx={{ marginLeft: "10px" }}
            fontWeight={600}
            fontSize={18}
            color={theme.palette.primary.main}
          >
            Users
          </Typography>
        </Grid>
        <Grid item xs={6.7}>
          {handleDeleteMessage()}
          <NotificationBox
            isError={showDeleteErrorMessage}
            isSuccess={showDeleteSuccessMessage}
            errorMessage={`Please Try Again`}
            successMessage="Successfully Deleted!"
          />
          <NotificationBox
            isError={showAddErrorMessage}
            isSuccess={showAddSuccessMessage}
            errorMessage={responseErrorMessage}
            successMessage="Successfully Added!"
          />
        </Grid>
        <Grid item xs={3}>
          <ModalComponent
            showClearButton={false}
            open={open}
            handleClose={handleClose}
            fetchData={fetchData}
            Component={AddUser}
            title="Add User"
            setResponseErrorMessage={setResponseErrorMessage}
            setIsError={setAddShowErrorMessage}
            setIsSuccess={setShowAddSuccessMessage}
            setProgress={setProgress}
          />
          <ModalComponent
            showClearButton={false}
            open={updateOpen}
            handleClose={handleUpdateClose}
            fetchData={fetchData}
            Component={UpdateForm}
            // data={data[getId - 1]}
            data={user}
            setProgress={setProgress}
            title="Edit User"

            setIsError={setAddShowErrorMessage}
            setIsSuccess={setShowAddSuccessMessage}
            setResponseErrorMessage={setResponseErrorMessage}
          />
          <ModalComponent
            showClearButton={true}
            open={filterOpen}
            handleClose={handleFilterClose}
            fetchData={fetchData}
            Component={FilterForm}
            title="Filters"
          />

          <PrimaryButton
            titleName={"Add User"}
            variant="outlined"
            onClick={handleOpen}
            size="small"
            sx={{ width: "70px" }}>
            Add
          </PrimaryButton>

          <PrimaryButton
            size="small"
            startIcon={<FilterAltOutlinedIcon />}
            sx={{ width: "110px", marginLeft: "20px" }}
            variant="outlined"
            onClick={handleFilterOpen}
          >
            Filter
          </PrimaryButton>
        </Grid>
      </Grid>

      <Divider sx={{ marginTop: "1rem", borderBottomWidth: 2 }} />

      {dataAvailability && <Grid>
        <Typography sx={{
          color: theme.palette.headerFont,
          fontSize: 20,
          fontWeight: "300",
          marginLeft: "500px",
          marginTop: "1.5rem",

        }}>
          NO DATA AVAILABLE
        </Typography>
      </Grid>}

      {!dataAvailability &&
        <Box sx={{
          position: "relative",
          left: "23px",
          flexGrow: 1,
          marginTop: "1rem",
          marginBottom: "1rem",
         //height="400px"
        }}
          width="95%">


          <Grid container spacing={2}>
            <Grid item xs={1.6}>
              <Typography sx={{
                color: theme.palette.headerFont,
                fontSize: 14
              }}>
                <span
                  className="headerTitle"
                  onClick={() => handleSorting("firstName")}
                >
                  <span className="toggleArrow">Full Name</span>
                  {order === "ASC" && (
                    <ArrowUpwardOutlinedIcon
                      className="sortArrow"
                      sx={{ position: "relative", top: "0.3rem" }}
                    />
                  )}
                  {order === "DSC" && (
                    <ArrowDownwardOutlinedIcon
                      className="sortArrow"
                      sx={{ position: "relative", top: "0.3rem" }}
                    />
                  )}

                </span>
              </Typography>
            </Grid>
            <Grid item xs={2.5}>
              <Typography sx={{
                color: theme.palette.headerFont,
                fontSize: 14
              }}>

                <span
                  className="headerTitle"
                  onClick={() => handleSorting("email")}
                >
                  <span className="toggleArrow">Email</span>
                  {order === "ASC" && (
                    <ArrowUpwardOutlinedIcon
                      className="sortArrow"
                      sx={{ position: "relative", top: "0.3rem" }}
                    />
                  )}
                  {order === "DSC" && (
                    <ArrowDownwardOutlinedIcon
                      className="sortArrow"
                      sx={{ position: "relative", top: "0.3rem" }}
                    />
                  )}
                </span>

              </Typography>
            </Grid>
            <Grid item xs={1.7}>
              <Typography sx={{
                color: theme.palette.headerFont,
                fontSize: 14
              }}>
                <span
                  className="headerTitle"
                  onClick={() => handleSorting("phoneNumber")}
                >
                  <span className="toggleArrow">Phone Number</span>
                  {order === "ASC" && (
                    <ArrowUpwardOutlinedIcon
                      className="sortArrow"
                      sx={{ position: "relative", top: "0.3rem" }}
                    />
                  )}
                  {order === "DSC" && (
                    <ArrowDownwardOutlinedIcon
                      className="sortArrow"
                      sx={{ position: "relative", top: "0.3rem" }}
                    />
                  )}
                </span>
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography sx={{
                color: theme.palette.headerFont,
                fontSize: 14
              }}>
                <span
                  className="headerTitle"
                  onClick={() => handleSorting("userState")}
                >
                  <span className="toggleArrow">User State</span>
                  {order === "ASC" && (
                    <ArrowUpwardOutlinedIcon
                      className="sortArrow"
                      sx={{ position: "relative", top: "0.3rem" }}
                    />
                  )}
                  {order === "DSC" && (
                    <ArrowDownwardOutlinedIcon
                      className="sortArrow"
                      sx={{ position: "relative", top: "0.3rem" }}
                    />
                  )}
                </span>
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography sx={{
                color: theme.palette.headerFont,
                fontSize: 14
              }}>
                <span
                  className="headerTitle"
                  onClick={() => handleSorting("companyName")}
                >
                  <span className="toggleArrow">Company Name</span>
                  {order === "ASC" && (
                    <ArrowUpwardOutlinedIcon
                      className="sortArrow"
                      sx={{ position: "relative", top: "0.3rem" }}
                    />
                  )}
                  {order === "DSC" && (
                    <ArrowDownwardOutlinedIcon
                      className="sortArrow"
                      sx={{ position: "relative", top: "0.3rem" }}
                    />
                  )}
                </span>
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography sx={{
                color: theme.palette.headerFont,
                fontSize: 14,
                marginTop: "0.5rem"
              }}>
                Actions
              </Typography>
            </Grid>
          </Grid>
        </Box>}

      <Box sx={{ flexGrow: 1, position: "relative", left: "23px" }} width="95%" >
        {data.slice(prevPage - 5, prevPage).map((mydata) => {
          return (
            <div key={mydata.id}>
              <Grid container spacing={2} sx={{
                borderRadius: "8px",
                backgroundColor: theme.palette.secondary.main,
                marginTop: "1rem"
              }}>
                <Grid item xs={1.6}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      marginBottom: "1rem"
                    }}
                  >
                    {mydata.firstName + " " + mydata.lastName}
                  </Typography>
                </Grid>
                <Grid item xs={2.5}>
                  <Typography
                    sx={{ fontSize: 14 }}
                  >
                    {mydata.email}
                  </Typography>
                </Grid>
                <Grid item xs={1.7}>
                  <Typography
                    sx={{ fontSize: 14 }}
                  >
                    {mydata.phoneNumber}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography
                    sx={{ fontSize: 14 }}
                  >
                    {/* {console.log(response.data)} */}
                    {mydata.userState === true ? "Active" : "Inactive"}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography
                    sx={{ fontSize: 14 }}
                  >
                    {mydata.companyName}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography
                    sx={{ fontSize: 14 }}
                  >

                    <EditOutlinedIcon onClick={() => handleUpdateUser(mydata)}
                      fontSize="small"
                      sx={{
                        cursor: "pointer",
                        color: theme.palette.primary.main,

                      }}
                    />


                    <AlertDialog id={mydata.id - 1} deleteData={deleteData} />

                  </Typography>
                </Grid>
              </Grid>
            </div>
          );
        })}
      </Box>

      <Box sx={{ flexGrow: 1, position: "relative", left: "23px" }} width="95%">
        <Grid container spacing={2} sx={{ marginTop: "1rem", alignContent: "center" }}>
          <Grid item xs={4}>
            <Typography
              sx={{
                fontSize: 14,
                marginBottom: "1rem",
                color: theme.palette.headerFont,
              }}
            >
              Page: {showPage}
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <PaginationComponent
              totalPage={totalPage}
              handlePagination={handlePagination}
              setShowPage={setShowPage}
            />
          </Grid>
        </Grid>
      </Box>


    </div>
  );
};

export default Users;
