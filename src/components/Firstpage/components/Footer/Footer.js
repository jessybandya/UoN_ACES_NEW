import React from 'react';
import {
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	FooterLogo,
	SocialIcon,
	FooterRights,
	FooterSocialIcon,
	FooterWrapper,
	FooterAddress,
	FooterColumn,
	FooterGrid,
} from './FooterStyles';
import { footerData, footerSocialData } from '../../data/FooterData';
import { Row, Section } from '../../globalStyles';
import { Link } from "react-router-dom"
function Footer({ data }) {

	if (data) {
		var networks = data.social.map(function (network) {
		  return (
			<li key={network.name}>
			  <a href={network.url}>
				<i className={network.className}></i>
			  </a>
			</li>
		  );
		});
	  }
	
	return (
		<Section padding="4rem 0 2rem 0">
			<FooterWrapper>
				<FooterGrid justify="space-between">
					<FooterColumn id="footerLogo">
						<FooterLogo to="/">
							<SocialIcon src="./assets/logo.png" />
							UoN_ACES
						</FooterLogo>
						<FooterAddress>
							University way, Civil Block, Nairobi
						</FooterAddress>

						<Row align="center" margin="auto  0 0 0" gap="1rem">
							{footerSocialData.map((social, index) => (
								<FooterSocialIcon
									key={index}
									target="_blank"
									href={"http://"+social.link}
									rel="noopener"
									aria-label={social.name}
								>
									{social.icon}
								</FooterSocialIcon>
							))}
							{/* {networks} */}
						</Row>
					</FooterColumn>
					{footerData.map((footerItem, index) => (
						<FooterLinkItems key={index}>
							<FooterLinkTitle>{footerItem.title}</FooterLinkTitle>
							{footerItem.links.map((link, linkIndex) => (
								<FooterLink key={linkIndex} to="/">
									{link}
								</FooterLink>
							))}
						</FooterLinkItems>
					))}
				</FooterGrid>
				<FooterRights>ACES © 2021</FooterRights>
			</FooterWrapper>
		</Section>
	);
}

export default Footer;
