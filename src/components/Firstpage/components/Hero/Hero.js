import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';
import { auth } from "../../../firebase"
const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/test.mp4" autoPlay muted control loop/>
			<Container>
				<MainHeading>UoN ACES <p>MOTIVATE || INSPIRE || INNOVATE</p></MainHeading>
				<HeroText>
					We provide the best civil engineering direction skills in and out of academic field
				</HeroText>
				<ButtonWrapper>
					{!auth?.currentUser?.uid &&(
					<Link to="/register">
					<Button>Get Started</Button>
				</Link>
					)}
					<HeroButton>Find More</HeroButton>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
