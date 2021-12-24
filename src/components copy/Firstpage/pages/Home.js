import React,{ useState, useEffect} from 'react';
import Carousel from '../components/Carousel/Carousel';
import { Content } from '../components/Content/Content';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import { heroOne, heroTwo, heroThree } from '../data/HeroData';
import Navbar from '../components/../../Grid/Firstpagenavbar'
// Hero Feature Content Carousel

const Home = () => {
	const [resumeData, setResumeData] = useState({});

	useEffect(() => {
	  fetch("/resumeData.json")
		.then((res) => res.json())
		.then((data) => {
		  setResumeData(data);
		});
	}, []);
	return (
		<>
		<Navbar />
			<Hero />
			<Features />
			<Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
			<Carousel />
			<Footer data={resumeData.main}/>
		</>
	);
};

export default Home;
