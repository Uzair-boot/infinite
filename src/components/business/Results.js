import React from 'react'
import { Container, Box, Grid, Typography, useMediaQuery, Button } from '@mui/material';
import union from '../assets/Union.png'
import uniontilt from '../assets/Uniontilt.png'
import logo from '../assets/logo.png'
import background from '../assets/background.png'
import headerBackground from '../assets/headerBackground.png'

export default function Business() {

    const myfontsize = useMediaQuery("(max-width: 900px)")

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

                        <Grid item xs={12} lg={6}>

                            <Box
                                sx={{
                                    backgroundImage: `url(${uniontilt})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: "center",
                                    backgroundSize: '100% 100%',
                                    height: "40rem",
                                    width: '40rem'
                                }}
                            >
                                <Box pt='15%' pl='13%' >
                                    <Typography
                                        sx={{
                                            color: '#FFFFFF',
                                            fontSize: '60px',
                                            fontWeight: '600',
                                            lineHeight: '105px'
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                p: "20%"
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    color: '#FFFFFF',
                                                    fontSize: '30px',
                                                    fontWeight: '600',
                                                    lineHeight: '45px'
                                                }}
                                            >
                                                NWorld
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    color: '#FFFFFF',
                                                    fontSize: '30px',
                                                    fontWeight: '500',
                                                    lineHeight: '45px'
                                                }}
                                            >
                                                Discover a  unique Ecosystem of Capabilities
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    color: '#FFFFFF',
                                                    fontSize: '30px',
                                                    fontWeight: '500',
                                                    lineHeight: '45px'
                                                }}
                                            >
                                                under the same vision
                                            </Typography>

                                            <Button
                                                sx={{
                                                    color: '#FFFFFF',
                                                    textTransform: "capitalize",
                                                    border: "1.5px solid white",
                                                    borderRadius: "30px",
                                                    width: "200px",
                                                    fontSize: { xs: "14px", md: "18px" },
                                                    fontWeight: "700",
                                                    boxShadow: 4,
                                                    textAlign: 'center',
                                                    py: "5%",
                                                    '&:hover': {
                                                        background: "#3892A8a5",
                                                    },
                                                }}>
                                                N World
                                            </Button>

                                        </Box>

                                    </Typography>
                                </Box>
                                {/* <img width='100%' src={logo} /> */}
                            </Box>
                        </Grid>
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
                                            }}> TO THOSE WHO KNOW US FOR OUR </span>
                                    </Typography>

                                    <Typography>
                                        <Box
                                            sx={{
                                                borderBottom: '3px solid black',
                                                marginTop: '7%',
                                            }}
                                        >
                                            <span
                                                style={{
                                                    // color: '#F47642',
                                                    fontSize: myfontsize ? '37px' : '70px',
                                                    fontWeight: 600,
                                                    lineHeight: '105px',

                                                }}>Results</span>
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
                                            We were born and have always grown by being able to provide high value solutions to our client's problems.                                </span>
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>

                    {/* <Box
                    sx={{
                        clipPath: 'polygon(60% 0, 100% 49%, 60% 100%, 0 100%, 0 0)',
                        border: '2px solid red',
                    }}
                    >
                        <img src={headerBackground} />
                    </Box> */}
                </Container>
            </Box>
        </>
    )
}
