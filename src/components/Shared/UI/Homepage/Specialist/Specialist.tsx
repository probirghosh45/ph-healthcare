import { Box, Container, Typography } from "@mui/material";

const Specialist = () => {
  return (
     <Container>
         <Box className=""
         sx={{
            margin : "150px 0px",
            // textAlign : "center"
         }}
         
         >
            <Box
            sx={{
                textAlign : "start",
            }}
            
            >
                <Typography variant="h4" fontWeight={600} color="#000"   >Explore Treatments across Specialties</Typography>
                <Typography component="p" fontWeight={300} color="#6E7186" fontSize={18} >Find experienced doctors across all specialties</Typography>
            </Box>
         </Box>
     </Container>
    )
};

export default Specialist;
