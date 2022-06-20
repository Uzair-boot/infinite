import React from 'react'
import { Container, Box, Grid, Typography, useMediaQuery,Button } from '@mui/material';
import union from '../assets/Union.png'
import logo from '../assets/logo.png'
import background from '../assets/background.png'

export default function Business() {

    const myfontsize = useMediaQuery("(max-width: 900px)")
    console.log("here")
    let starter1 = ['To Those Who Don’t Know Us' ]
    let starter2 = ['We Like To Introduce' ]
    let starter3 = ['Ourselves Through Our Vision' ]

    return (
        <>
            <Box
                sx={{
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "100% 100%",
                    backgroundSize: 'cover',
                }}>
                <Container>

                    <Grid container
                        sx={{
                            alignItems: "center",
                            pt: '5%',
                            display: 'flex',
                        }}>

                       <Grid item xs={12} lg={6} >     
                        <Box>
                            <Box 
                            sx={{
                                // p:'20%'
                                pr: '40%'
                            }}
                            >
                            <Typography>
                                <span
                                    style={{
                                        color: '#F47642',
                                        fontSize: myfontsize ? '7px' : '15px',
                                        fontWeight: 600,
                                        lineHeight: '22.5px',
                                    }}> To Those Who Don’t Know Us</span>
                            </Typography>

                            <Typography>
                                <span
                                    style={{
                                        fontSize: myfontsize ? '17px' : '30px',
                                        fontWeight: 500,
                                        lineHeight: '45px',
                                    }}> We Like To Introduce</span>

                            </Typography>
                            <Typography>
                                <span
                                    style={{
                                        fontSize: myfontsize ? '17px' : '30px',
                                        fontWeight: 500,
                                        lineHeight: '45px',
                                    }}> Ourselves Through Our Vision</span>

                            </Typography>
                            <Typography>
                                <Box
                                    sx={{
                                        borderBottom: '3px solid black',
                                    }}
                                >
                                    <span
                                        style={{
                                            // color: '#F47642',
                                            fontSize: myfontsize ? '37px' : '70px',
                                            fontWeight: 600,
                                            lineHeight: '105px',
                                        }}>Business</span>
                                </Box>
                            </Typography>

                            <Typography>
                                <span
                                    style={{
                                        fontSize: myfontsize ? '9px' : '15px',
                                        fontWeight: 600,
                                        lineHeight: '22.5px',
                                        // textAlign: 'justify'
                                    }}>
                                    We Believe Our Specialization In Business Areas To Be The Best Means To Reached The Greatest Depth In All Fields Of Knowledge For There , We Rethink Them Through And Through
                                </span>
                            </Typography>
                            </Box>
                        </Box>
                        </Grid>

                        <Grid item xs={12} lg={6}>

                        <Box
                        sx={{
                            backgroundImage: `url(${union})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: "center crop",
                            maxWidth: '100%'
                            // backgroundSize: '100% 100%',
                            // height: "37rem",
                            // width: '40rem'
                        }}
                        >
                           <Box pt='35%' pl='13%' >
                                    <Typography
                                        sx={{
                                            color: '#FFFFFF',
                                            fontSize: '60px',
                                            fontWeight: '600',
                                            lineHeight: '105px'
                                        }}
                                    >
                                        Technology
                                    </Typography>
                                </Box>
                            {/* <img width='100%' src={logo} /> */}
                        </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
