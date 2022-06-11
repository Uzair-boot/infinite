import React from 'react'
import Button from '@mui/material/Button';
import background from '../assets/headerBackground.png';
import logo from '../assets/logo.png';
import dots from '../assets/dots.png'
import DrawerMui from '../drawer/drawer'
import { Grid, Typography, useMediaQuery, Container, Box } from '@mui/material';
// import { Fade } from 'react-reveal';

export default function Header() {

    const myDisplay = useMediaQuery("(max-width: 900px)");
    const random = useMediaQuery("(max-width: 900px)")
    const myfontsize = useMediaQuery("(max-width: 900px)")

    const headerContent = [
        "Home",
        "About Us",
        "Services",
        "Case Study",
        "Contact Us",
    ];
    return (
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
                            <Box>Home</Box>
                            <Box>About Us</Box>
                            <Box>Servicrs</Box>
                            <Box>Case Study</Box>
                            <Box>Contact Us</Box>
                        </Box>
                    </Grid>

                </Grid>
                
                <Box 
                sx={{
                    py: '30%',
                    // mt: '30%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
                >
                    <Box
                    sx={{
                        mr:'10px',
                        pt: '5px'
                    }}
                    >
                        <img src={dots} alt="Dots Image" />
                    </Box>
                    <Box>
                        <Typography>
                            <span
                                style={{
                                    color: '#FFFFFF',
                                    // fontFamily: 'Poppins',
                                    // fontSize: '47px',
                                    fontSize: myfontsize ? '22px' : '47px',
                                    fontWeight: 600,
                                    lineHeight: '50px',
                                    letterSpacing: '0.10em',
                                }}> Empowering
                            </span>
                        </Typography>
                        <Typography>
                            <span
                                style={{
                                    color: '#FFFFFF',
                                    // fontFamily: 'Poppins',
                                    // fontSize: '47px',
                                    fontSize: myfontsize ? '22px' : '47px',
                                    fontWeight: 600,
                                    lineHeight: '50px',
                                    letterSpacing: '0.10em',
                                }}> The </span>


                            <span
                                style={{
                                    color: '#F47042',
                                    // fontFamily: 'Poppins',
                                    // fontSize: '47px',
                                    fontSize: myfontsize ? '22px' : '47px',
                                    fontWeight: 600,
                                    lineHeight: '50px',
                                    letterSpacing: '0.10em',
                                }}>Innovative</span>

                            <span
                                style={{
                                    color: '#FFFFFF',
                                    // fontFamily: 'Poppins',
                                    // fontSize: '47px',
                                    fontSize: myfontsize ? '22px' : '47px',
                                    fontWeight: 600,
                                    lineHeight: '50px',
                                    letterSpacing: '0.10em',
                                }}> Future</span>

                            <span
                                style={{
                                    color: '#F47042',
                                    fontSize: myfontsize ? '22px' : '47px',
                                    fontWeight: 600,
                                    lineHeight: '50px',
                                    letterSpacing: '0.16em',
                                    marginLeft: '7px'
                                }}>.</span>
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
        // </Box>
    )
}
