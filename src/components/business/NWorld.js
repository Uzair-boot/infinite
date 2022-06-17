import React from 'react'
import { Container, Box, Grid, Typography, useMediaQuery, Button } from '@mui/material';
import newworld from '../assets/NWorld.png'

export default function NWorld() {
    return (
        <>
            <Box
                sx={{
                    backgroundImage: `url(${newworld})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "100% 100%",
                    backgroundSize: 'cover',
                    height: '100%',
                    width: '100%'
                }}
            >
                <Container>
                    <Box
                    sx={{
                        p:"20%"
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

                        <Box
                                sx={{
                                    display: "flex",
                                }}>
                                <Box border="2.5px solid #FFFFFF" borderRadius="30px" mt={3} sx={{ width: 'fit-content' }} >
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
                                        }}
                                    >
                                        N World
                                    </Button>
                                </Box>
                            </Box>
                    </Box>
                </Container>
            </Box>

        </>
    )
}
