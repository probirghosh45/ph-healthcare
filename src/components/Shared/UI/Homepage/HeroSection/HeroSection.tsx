import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        my: 16,
      }}
    >
      <Box sx={{ flex: 1, position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            width: "700px",
            left: "-90px",
            top: "-120px",
          }}
        >
          <Image src={assets.svgs.grid} alt="bgImage" />
        </Box>
        <Typography variant="h2" component="h1" fontWeight={600}>
          Healthhier Hearts
        </Typography>
        <Typography variant="h2" component="h1" fontWeight={600}>
          Come From
        </Typography>
        <Typography
          variant="h2"
          component="h1"
          fontWeight={600}
          color="primary.main"
        >
          Preventive Care
        </Typography>
        <Typography sx={{ my: 4 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          voluptates blanditiis omnis fugit ratione. Cupiditate laborum, esse
          doloribus impedit laudantium deserunt veritatis repellendus? Aperiam
          placeat culpa, reprehenderit debitis natus praesentium?
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button>Make Appointment</Button>
          <Button variant="outlined">Contact Us</Button>
        </Box>
      </Box>

      <Box
        sx={{
          // flex: 1,
          display: "flex",
          justifyContent: "center",
          // alignItems:"center",
          position: "relative",
          mt: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-35px",
            left: "150px",
          }}
        >
          <Image src={assets.svgs.arrow} alt="arrow" width="100" height="100" />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box mt={4}>
            <Image
              src={assets.images.doctor1}
              width={240}
              height={180}
              alt="doctor1"
            />
          </Box>
          <Box>
            <Image
              src={assets.images.doctor2}
              width={240}
              height={350}
              alt="doctor2"
            />
          </Box>
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "212px",
            left: "105px",
          }}
        >
          <Image
            src={assets.images.doctor3}
            width={245}
            height={240}
            alt="doctor3"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            //  top : "300px",
            //  left : "360px",
            bottom: "-65px",
            right: "-53px",
            zIndex: "-1",
          }}
        >
          <Image
            src={assets.images.stetoscope}
            // width={300}
            // height={450}
            width={200}
            height={180}
            alt="stetoscope"
          />
        </Box>
      </Box>
    </Container>
  );
};
export default HeroSection;
