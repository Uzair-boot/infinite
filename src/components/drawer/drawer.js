import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import { Bounce, Flip } from 'react-reveal';
import logo from '../assets/logo.png';

import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';


export default function SwipeableTemporaryDrawer({ data }) {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{
                background: '#1F456E',
                height: '100%',
                width: '100%',
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,

            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >



            <List sx={{ paddingLeft: '8%' }}>
                {data.map((text, index) => (
                    <Box key={text} sx={{ color: 'white', }}>
                        <ListItem button  >

                            {/* <ListItem button key={text} >
                                <ListItemText primary={text} />
                            </ListItem> */}

                            <HashLink to={`/#${text}`} smooth
                                style={{
                                    textDecoration: 'none',
                                    color: '#FFFFFF'
                                }}
                            >
                                <ListItemText primary={text} />
                            </HashLink>
                        </ListItem>
                        <Divider />
                    </Box>
                ))}
            </List>




{/* 
            <List sx={{ paddingLeft: '8%' }}>
                {data.map((text, index) => (
                    <Box key={text} sx={{ color: 'white', }}>
                        <ListItem button  >
                            <ListItemText primary={text} />

                            <NavLink style={({ isActive }) => {
                                    return {
                                        textDecoration: 'none',
                                        color: isActive ? 'red' : 'white'
                                    }
                                }}
                                    to= {`/#${text}`}
                                >
                                </NavLink>


                            <NavLink to={`/#${text}`} smooth="true"
                                style={{
                                    textDecoration: 'none',
                                    color: '#FFFFFF'
                                }}
                            >
                            </NavLink>
                        </ListItem>
                        <Divider />
                    </Box>
                ))}
            </List> */}


        </Box>
    );

    return (
        <Box>

            {['left'].map((anchor) => (
                <React.Fragment key={anchor}  >
                    <Button onClick={toggleDrawer(anchor, true)}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <MenuIcon style={{ color: '#ede7f6' }} />
                        </IconButton>
                    </Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >

                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </Box>
    );
}
