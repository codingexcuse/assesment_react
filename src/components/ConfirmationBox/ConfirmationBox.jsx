import { useState } from 'react';
import { useTheme } from "@mui/material";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({ deleteData, id }) {

  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseDelete = () => {
    setOpen(false);
    deleteData(id);
  };

  const handleCloseCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <DeleteOutlineOutlinedIcon
        onClick={handleClickOpen}
        fontSize="small"
        sx={{
          marginLeft: "2rem",
          cursor: "pointer",
          color: theme.palette.primary.main,
        }}
      />
      <Dialog className='confirmBox'
        open={open}
        onClose={handleCloseCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you really want to delete this user?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseCancel}>Cancel</Button>
          <Button onClick={handleCloseDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}