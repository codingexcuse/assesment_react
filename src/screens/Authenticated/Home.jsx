import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { images } from "../../utils/constants/images";
import { useTheme } from "@mui/material";
import SidebarItem from "../../components/SideBarItem/SidebarItem";
import Users from "./Users/Users";

const drawerWidth = 240;

export default function Home() {
  const theme = useTheme();
  return (
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
        <Toolbar sx={{ marginLeft: "36px" }}>
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
          <SidebarItem text="Users" active={true}/>
          <SidebarItem text="Roles" />
          <SidebarItem text="Companies"  />
          <SidebarItem text="Wholesalers" />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Users />
      </Box>
    </Box>
  );
}
























// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import AppBar from '@mui/material/AppBar';
// import CssBaseline from '@mui/material/CssBaseline';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// // import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// // import ListItemText from '@mui/material/ListItemText';
// import { images } from '../../utils/constants/images';
// import {  useTheme } from '@mui/material';
// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
// import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
// import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
// import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
// import Stack from '@mui/material/Stack';
// import Users from './Users/Users';

// // const sideBarList = ["Users", "Roles","Companies","Users"]
// // const siderBarIcons = [PersonOutlineOutlinedIcon,MilitaryTechOutlinedIcon,BusinessOutlinedIcon,GroupAddOutlinedIcon]


// const drawerWidth = 240;

// export default function Home() {
//     const theme = useTheme()
//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar elevation={0} position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 , background:theme.palette.navbar}}>
//         <Toolbar sx={{marginLeft:"36px"}}>
//             <img src={images.logo} alt="logo" width="149px" height="42px" />
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
//         }}
//       >
//         <Toolbar />
//         <Box sx={{ overflow: 'auto' ,fontWeight: 500}} >
//           <List >
//             {['Users', 'Roles', 'Companies', 'Users'].map((text, index) => (
//               <ListItem key={text} disablePadding >
//                 <ListItemButton>
//                   <ListItemIcon >
//                   <Stack spacing={2}>
//                     {index === 0 && <PersonOutlineOutlinedIcon />}
//                     {index === 1 && <MilitaryTechOutlinedIcon />}
//                     {index === 2 && <BusinessOutlinedIcon />}
//                     {index === 3 && <GroupAddOutlinedIcon />}
//                   </Stack>
                    
//                   </ListItemIcon>
//                   <Typography>{text}</Typography>
//                   {/* <ListItemText primary={text} sx={{fontWeight:"bold"}} /> */}
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <Toolbar />
//         <Users/>
//       </Box>
//     </Box>
//   );
// }