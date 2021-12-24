import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';
import { auth1 } from "../../../firebase"
import TypeWriter from "react-typewriter";

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/test.mp4" autoPlay muted  loop/>
			<Container>
			<MainHeading><TypeWriter typing={0.5}>UoN ACES </TypeWriter><p><TypeWriter typing={0.5}>MOTIVATE || INSPIRE || INNOVATE</TypeWriter></p></MainHeading>
				
			<TypeWriter typing={1.0}>
			<HeroText>
					<i>We provide the best civil engineering direction skills in and out of academic field</i>
				</HeroText>	
			</TypeWriter>


				<ButtonWrapper>
					{!1?.currentUser?.uid &&(
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
