import React from 'react'
import { Box, Container, Grid, useMediaQuery } from '@mui/material'
import { NavLink } from 'react-router-dom'

import DrawerMui from '../drawer/drawer'

import logo from '../assets/logo.png';
import background from '../assets/headerBackground.png';




export default function NavBar() {

    const myDisplay = useMediaQuery("(max-width: 900px)");

    const headerContent = [
        'Home',
        "Business",
        "Technology",
        "Less Is More",
        "People",
        'Innovation',
        'New World',
        'Results'
    ];

    return (
        <>
            <Box id="header"
                sx={{
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "center right",
                    backgroundSize: 'cover',
                }}
            >
                <Container>

                <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'row', }}>
                    <Box sx={{ flexGrow: 1, }}>
                        <DrawerMui data={headerContent} />
                    </Box>
                </Box>


                    <Grid container
                        // align='center'
                        sx={{
                            alignItems: "center",
                            p: '1%'
                        }}
                    >

                        <Grid item lg={5} md={5}
                            sx={{
                                display: { sm: 'none', xs: 'none', md: 'block' }
                            }}
                        >
                            <img src={logo} alt="logo" />
                        </Grid>

                        <Grid item lg={7} md={7}  >

                            <Box sx={{
                                display: myDisplay ? { sm: 'none', xs: 'none', md: 'block' } : "flex",
                                cursor: 'pointer',
                                color: "white",
                                justifyContent: "space-around",
                                color: '#FFFFFF',
                                fontWeight: '500',
                                // fontFamily: 'Poppins',
                            }}>

                                <NavLink style={({ isActive }) => {
                                    return {
                                        textDecoration: 'none',
                                        color: isActive ? 'red' : 'white'
                                    }
                                }}
                                    to='/'
                                >
                                    Home
                                </NavLink>

                                <NavLink style={({ isActive }) => {
                                    return {
                                        textDecoration: 'none',
                                        color: isActive ? 'red' : 'white'
                                    }
                                }}
                                    to='business'
                                >
                                    Business
                                </NavLink>

                                <NavLink style={({ isActive }) => {
                                    return {
                                        textDecoration: 'none',
                                        color: isActive ? 'red' : 'white'
                                    }
                                }}
                                    to='Technology'
                                >
                                    Technology
                                </NavLink>

                                <NavLink style={({ isActive }) => {
                                    return {
                                        textDecoration: 'none',
                                        color: isActive ? 'red' : 'white'
                                    }
                                }}
                                    to='People'
                                >
                                    People
                                </NavLink>

                                <NavLink style={({ isActive }) => {
                                    return {
                                        textDecoration: 'none',
                                        color: isActive ? 'red' : 'white'
                                    }
                                }}
                                    to='Innovation'
                                >
                                    Innovation
                                </NavLink>

                                <NavLink style={({ isActive }) => {
                                    return {
                                        textDecoration: 'none',
                                        color: isActive ? 'red' : 'white'
                                    }
                                }}
                                    to='LessIsMore'
                                >
                                    Less Is More
                                </NavLink>

                                <NavLink style={({ isActive }) => {
                                    return {
                                        textDecoration: 'none',
                                        color: isActive ? 'red' : 'white'
                                    }
                                }}
                                    to='NWorld'
                                >
                                    New World
                                </NavLink>

                                <NavLink style={({ isActive }) => {
                                    return {
                                        textDecoration: 'none',
                                        color: isActive ? 'red' : 'white'
                                    }
                                }}
                                    to='Results'
                                >
                                    Results
                                </NavLink>

                            </Box>
                        </Grid>

                    </Grid>

                </Container>
            </Box>
        </>
    )
}
