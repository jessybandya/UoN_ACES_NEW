import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
	{
		name: 'Facebook',
		icon: iconStyle(FaFacebook),
		link: "/www.facebook.com"
	},
	{
		name: 'Instagram',
		icon: iconStyle(FaInstagram),
		link: "/www.instagram.com"
	},
	{
		name: 'YouTube',
		icon: iconStyle(FaYoutube),
		link: "/www.youtube.com"
	},
	{
		name: 'Twitter',
		icon: iconStyle(FaTwitter),
		link: "/www.twitter.com"
	},
	{
		name: 'LinkedIn',
		icon: iconStyle(FaLinkedin),
		link: "www.linkedin.com"
	},
];

export const footerData = [
	{
		title: 'Main',
		links: ['Blog'],
	},
	{
		title: 'Product',
		links: ['Login'],
	},
	{
		title: 'Press',
		links: ['Logos'],
	},
	{
		title: 'Legal',
		links: ['GDPR'],
	},
];
