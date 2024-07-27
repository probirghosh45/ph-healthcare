import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon  from "@/assets/landing_page/facebook.png"
import instagramIcon  from "@/assets/landing_page/instagram.png"
import linkedInIcon  from "@/assets/landing_page/linkedin.png"
import twitterIcon  from "@/assets/landing_page/twitter.png"

const Footer = () => {
    return (
        <Box bgcolor="#111828" py={5}>
            <Container>
                <Stack direction="row" justifyContent="center" gap={4} alignItems="center" >
                    <Typography color="#fff" component={Link} href="/consutlation" >Consutlation</Typography>
                    <Typography color="#fff" component={Link} href="/health-plans" >Health Plans</Typography>
                    <Typography color="#fff" component={Link} href="/medicine">Medicine</Typography>
                    <Typography color="#fff" component={Link} href="/diagonostics">Diagonostics</Typography>
                    <Typography color="#fff" component={Link} href="/ngos">NGOs</Typography>
                </Stack>

                <Stack direction="row" justifyContent="center" gap={3} py={3}>
                    <Image src={facebookIcon} alt="" height={25} width={25}/>
                    <Image src={instagramIcon} alt="" height={25} width={25}/>
                    <Image src={linkedInIcon} alt="" height={25} width={25}/>
                    <Image src={twitterIcon} alt="" height={25} width={25}/>
                </Stack>
                <div className="border-b-[1px] border-dashed" ></div>
                <Stack direction="row" justifyContent="space-between" alignItems="center" py={5} >
                    <Typography color="#fff">&copy;2024 PH Health Care.All Rights Reserved</Typography>
                   <Typography component={Link} href="/" variant="h4" fontWeight={600}  color="#fff"  >P<Box component="span" color="primary.main" >H</Box> Health Care</Typography>
                    <Typography color="#fff">Privacy Policy ! Terms & Conditions</Typography>                    
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;