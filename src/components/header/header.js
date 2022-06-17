import React from 'react'
import Button from '@mui/material/Button';
import background from '../assets/headerBackground.png';
import dots from '../assets/dots.png'
import { Grid, Typography, useMediaQuery, Container, Box } from '@mui/material';
// import { Fade } from 'react-reveal';
import { NavLink } from "react-router-dom";

export default function Header() {

    let activeStyle = {
        textDecoration: "none",
        color: 'red',
      };
    
      let activeClassName = "none";
    

    const myDisplay = useMediaQuery("(max-width: 900px)");
    const random = useMediaQuery("(max-width: 900px)")
    const myfontsize = useMediaQuery("(max-width: 900px)")

   
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
