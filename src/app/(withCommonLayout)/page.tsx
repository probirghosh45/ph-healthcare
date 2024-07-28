// import { Button } from '@mui/material';
import HeroSection from '@/components/Shared/UI/Homepage/HeroSection/HeroSection';
import Specialist from '@/components/Shared/UI/Homepage/Specialist/Specialist';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';

const HomePage = () => {
  return (
    <div>
       <HeroSection/>
       <Specialist/>
    </div>
  );
};

export default HomePage;