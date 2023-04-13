import { Backdrop, Fade, IconButton, Modal, Typography, useTheme } from '@mui/material'
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ClearButton = styled(Button)(({ theme, data }) => ({
    color: theme.palette.primary.main,
    backgroundColor: "transparent",

}));


const ModalComponent = ({ open, handleClose, fetchData, title, Component, showClearButton, data,setIsSuccess,
    setIsError,
    setResponseErrorMessage, setProgress }) => {

    console.log("modal data:", data)
    const theme = useTheme();

    return (
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

                    {showClearButton && <ClearButton
                        sx={{ position: "relative", left: "48rem", top: "4.5rem" }}
                        size="small"
                        variant="outlined"
                    >
                        Clear Filter
                    </ClearButton>
                    }

                    <Typography
                        sx={{
                            position: "relative",
                            top: "3rem",
                            left: "3.9rem",
                            fontStyle: "normal",
                            fontWeight: "600",
                            fontSize: "20px",
                            color: "#4D47C3",
                            lineHeight: "24px",
                            marginBottom: "10px",
                        }}
                    >
                        {title}
                    </Typography>

                    <IconButton
                        onClick={handleClose} sx={{

                            marginLeft: "900px",
                            marginTop: "5px",
                            backgroundColor: theme.palette.secondary.main,
                            color: theme.palette.primary.main,
                            borderRadius: "0.5rem",
                        }}><CloseSharpIcon fontSize={"small"} /></IconButton>

                    <Component fetchData={fetchData} data={data} handleClose={handleClose} setIsSuccess={setIsSuccess}
  setIsError={setIsError} setResponseErrorMessage={setResponseErrorMessage} setProgress={setProgress}
   />

                </div>
            </Fade>
        </Modal>
    )
}

export default ModalComponent;