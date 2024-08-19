import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Specialist = async () => {
  const res = await fetch("http://localhost:3000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialties } = await res.json();
  console.log(specialties);

  return (
    <Container>
      <Box
        className=""
        sx={{
          margin: "150px 0px",
          // textAlign : "center"
        }}
      >
        <Box
          sx={{
            textAlign: "start",
          }}
        >
          <Typography variant="h4" fontWeight={600} color="#000">
            Explore Treatments across Specialties
          </Typography>
          <Typography
            component="p"
            fontWeight={300}
            color="#6E7186"
            fontSize={18}
          >
            Find experienced doctors across all specialties
          </Typography>
        </Box>
        <Stack direction="row" gap={4} mt={5}>
          {specialties.map((specialty: any) => (
            <Box
              key={specialty.id}
              sx={{
                flex: 1,
                width: "150px",
                // backgroundColor: "#F5F5F5"
                backgroundColor: "rgba(245, 245, 245,1)",
                border: "rgba(250, 250, 250,1)",
                borderRadius: "10px",
                textAlign : "center",	
                padding : "40px 10px",
                "& img": {
                  width: "50px",
                  height: "50px", 
                  margin: "0 auto",
                },
                "&:hover" : {
                    border : "1px solid blue",
                    borderRadius : "10px",
                    cursor : "pointer",
                    transition : "all 0.5s linear"
                }
              }}
            >
              <Image
                src={specialty.icon}
                alt="specialty icon"
                width={100}
                height={100}
              />
              <Box>
                <Typography component="p" fontWeight={300} fontSize={18} mt={2} >
                  {specialty.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
        <Box sx={{
            textAlign : "center",
            paddingTop : "20px"
        }}><Button variant="outlined">View All</Button></Box>
      </Box>
    </Container>
  );
};

export default Specialist;
