import React from 'react'
import { Container, Box, Grid, Typography, useMediaQuery, Button } from '@mui/material';
import lessIsMore from '../assets/lessIsMore.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { borderRadius } from '@mui/system';

export default function LessIsMore() {
    const myfontsize = useMediaQuery("(max-width: 900px)")

    let data =[
        {first1: "Banking", first2: 'Front to back Treasury solutions, Wholesale Risks, Corporate banking and asset management, ALM, Regulation, Finance and Compliance.',},
        {second1: "Insurance", second2: 'Insurance consulting services that help increase the efficiency of critical systems and achieve regulatory compliance.',},
        {third1: "Estate", third2: 'Consulting services and specialized solutions for Non Performing Loans and Real Estate Asset management companies.',},
        {forth1: "Industries", forth2: 'We bring our business experience together with a set of our own solutions to design industry 5.0',}
    ]

    return (
        <>
            <Box
                sx={{
                    backgroundImage: `url(${lessIsMore})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "100% 100%",
                    backgroundSize: 'cover',
                }}>
                <Container>

                    <Grid container alignItems='center'>
                        <Grid item xs={12} lg={6} spacing={2} >
                            <Box display='flex' >
                                <Box>
                                    <span
                                        style={{
                                            // color: '#F47642',
                                            fontSize: myfontsize ? '37px' : '70px',
                                            fontWeight: 700,
                                            lineHeight: '105px',
                                            marginRight: '10px'
                                        }}
                                    >Less</span>
                                </Box>

                                <Box>
                                    <Typography>
                                        <Box
                                            sx={{
                                                borderBottom: '3px solid #F47642',
                                            }}>

                                            <span
                                                style={{
                                                    color: '#F47642',
                                                    fontSize: myfontsize ? '37px' : '70px',
                                                    fontWeight: 700,
                                                    lineHeight: '105px',
                                                }}>Is More</span>
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
                                            With its own technical capabilities and special care in delivery. <br /> We provide end to end services in the financial and insurance sectors.
                                        </span>
                                    </Typography>
                                    <Button
                                        sx={{
                                            color: '#F47642',
                                            textTransform: "capitalize",
                                            border: "3px solid #F47642",
                                            borderRadius: "30px",
                                            width: "200px",
                                            fontSize: { xs: "14px", md: "15px" },
                                            fontWeight: "700",
                                            boxShadow: 4,
                                            mt: '2%',
                                            '&:hover': {
                                                background: "#F47642a5",
                                                color: 'white',
                                                border: "3px solid #FFFFFF",
                                            }
                                        }}
                                    >
                                                What Do We Do
                                            </Button>
                                </Box>

                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={6} >
                            <Box alignItems='center' pl='10%'>
                                <Typography>
                                    <span
                                        style={{
                                            fontSize: '18px',
                                            lineHeight: '27px',
                                            fontWeight: '500'
                                        }}
                                    >
                                        WE HAVE ALWAYS GROWN
                                    </span>
                                </Typography>
                                <Typography>
                                    <span
                                        style={{
                                            fontSize: '24px',
                                            lineHeight: '36px',
                                            fontWeight: '600'
                                        }}
                                    >
                                        Adding value from deep
                                    </span>
                                    <span
                                        style={{
                                            color: '#F47642',
                                            fontSize: '24px',
                                            lineHeight: '36px',
                                            fontWeight: '600',
                                            marginLeft: '1%'
                                        }}
                                    >knowledge</span>
                                </Typography>
                                <Typography>
                                    <span
                                        style={{
                                            color: '#F47642',
                                            fontSize: '24px',
                                            lineHeight: '36px',
                                            fontWeight: '600',
                                        }}
                                    >of the business.</span>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                   
                    <Grid container  mt={5} spacing={5}>

                    <Grid item lg={3} md={3} sm={12} xs={12}
                     sx={{
                         
                        border: '1px solid black',
                        borderRadius: '13px',
                        // mr: '1%'

                    }}
                    >
                        <Box
                        sx={{
                            padding: '8%',
                            
                        }}
                        >
                           <Box>
                           
                               <span
                               style={{
                                   fontSize:'20px',
                                    lineHeight: '30px',
                                    fontWeight: '650'
                               }}
                               >
                                   Banking
                               </span>
                               
                           </Box>
                           <Box mt={3}>
                               <span 
                               style={{
                                fontSize:'15px',
                                lineHeight: '22.5px',
                                fontWeight: '400',
                               }}
                               >
                               Front to back Treasury solutions, Wholesale Risks, Corporate banking and asset management, ALM, Regulation, Finance and Compliance.
                               </span>
                           </Box>
                           <Box 
                           sx={{
                            display: 'flex',
                            alignItems:'base-line',
                            mt: '35%',
                            cursor: 'pointer',


                           }}
                           >
                               <Box flexGrow= '1' ></Box>
                               <Box fontWeight='600'>See more</Box>
                               <Box sx={{}} > <ArrowRightAltIcon/> </Box>
                               
                           </Box>
                        </Box>
                    </Grid>

                    <Grid item lg={3} md={3} sm={12} xs={12}
                     sx={{
                        border: '1px solid black',
                        borderRadius: '13px',
                        // ml: '1%'
                    }}
                    >
                        <Box
                        sx={{
                            padding: '8%'
                        }}
                        >
                           <Box>
                           
                               <span
                               style={{
                                   fontSize:'20px',
                                    lineHeight: '30px',
                                    fontWeight: '650'
                               }}
                               >
                                   Insurance
                               </span>
                               
                           </Box>
                           <Box mt={3}>
                               <span 
                               style={{
                                fontSize:'15px',
                                lineHeight: '22.5px',
                                fontWeight: '400',
                               }}
                               >
                               Insurance consulting services that help increase the efficiency of critical systems and achieve regulatory compliance.
                               </span>
                           </Box>
                           <Box 
                           sx={{
                            display: 'flex',
                            alignItems:'base-line',
                            mt: '43%',
                            cursor: 'pointer',


                           }}
                           >
                               <Box flexGrow= '1' ></Box>
                               <Box fontWeight='600'>See more</Box>
                               <Box sx={{}} > <ArrowRightAltIcon/> </Box>
                               
                           </Box>
                        </Box>
                    </Grid>

                    <Grid item lg={3} md={3} sm={12} xs={12}
                     sx={{
                        border: '1px solid black',
                        borderRadius: '13px'
                    }}
                    >
                        <Box
                        sx={{
                            padding: '8%'
                        }}
                        >
                           <Box>
                           
                               <span
                               style={{
                                   fontSize:'20px',
                                    lineHeight: '30px',
                                    fontWeight: '650'
                               }}
                               >
                                   Estate
                               </span>
                               
                           </Box>
                           <Box mt={3}>
                               <span 
                               style={{
                                fontSize:'15px',
                                lineHeight: '22.5px',
                                fontWeight: '400',
                               }}
                               >
                                   Consulting services and specialized solutions for Non Performing Loans and Real Estate Asset management companies.
                               </span>
                           </Box>
                           <Box 
                           sx={{
                            display: 'flex',
                            alignItems:'base-line',
                            mt: '43%',
                            cursor: 'pointer',


                           }}
                           >
                               <Box flexGrow= '1' ></Box>
                               <Box fontWeight='600'>See more</Box>
                               <Box sx={{}} > <ArrowRightAltIcon/> </Box>
                               
                           </Box>
                        </Box>
                    </Grid>

                    <Grid item lg={3} md={3} sm={12} xs={12}
                     sx={{
                        border: '1px solid black',
                        borderRadius: '13px'
                    }}
                    >
                        <Box
                        sx={{
                            padding: '8%'
                        }}
                        >
                           <Box>
                           
                               <span
                               style={{
                                   fontSize:'20px',
                                    lineHeight: '30px',
                                    fontWeight: '650'
                               }}
                               >
                                   industries   
                               </span>
                               
                           </Box>
                           <Box mt={3}>
                               <span 
                               style={{
                                fontSize:'15px',
                                lineHeight: '22.5px',
                                fontWeight: '400',
                               }}
                               >
                                   We bring our business experience together with a set of our own solutions to design industry 5.0
                               </span>
                           </Box>
                           <Box 
                           sx={{
                            display: 'flex',
                            alignItems:'base-line',
                            mt: '53%',
                            cursor: 'pointer',


                           }}
                           >
                               <Box flexGrow= '1' ></Box>
                               <Box fontWeight='600'>See more</Box>
                               <Box sx={{}} > <ArrowRightAltIcon/> </Box>
                               
                           </Box>
                        </Box>
                    </Grid>


                    </Grid>
                    

                </Container>
            </Box>
        </>
    )
}
