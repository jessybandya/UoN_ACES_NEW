import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Structural Engineering',
		description: 'This type of Civil Engineering is related to analyzing and designing the structures of physical infrastructures like bridges, overpasses, complex platforms for railway lines, offshore structures like oil, gas fields in the sea, etc. In analyzing and designing aspects of Structural Engineering, a civil engineer has to make measurements and assumptions about the pressures and loads that the structures will have in its lifetime, its future impacts and how it can be safe for long-term use.',
		icon: iconStyle(BsFillShieldLockFill),
		imgClass: 'one',
	},
	{
		name: 'Transportation Engineering',
		description: 'Transportation Engineering is concerned with designing transportation systems that are efficient in functioning and sustainable. The transportation system can be public or private. It includes transportation structures for streets, air transportation, tunnels, overpasses, railways, etc. It consists of fields like transportation planning, pavement engineering and infrastructure management.',
		icon: iconStyle(IoIosOptions),
		imgClass: 'two',
	},
	{
		name: 'Water Engineering',
		description: 'Water engineering is about understanding how natural water bodies react to human intervention. This can lead to the conservation of potable water which is depleting rapidly. Nowadays, it is focused on the prevention of floods, drought, and understanding the nature of coastal waters.',
		icon: iconStyle(GrHostMaintenance),
		imgClass: 'three',
	},
	{
		name: 'Geotechnical Engineering',
		description: 'Amongst the varied types of Civil Engineering, Geotechnical Engineering is concerned with exploring the ground properties on which a construction project is to be made. Checking the soil quality, the quality of the stones and will the construction be able to hold the project safely. It is the job of a geotechnical engineer to detect any vulnerabilities. After understanding all these aspects, a Geotechnical Engineering assesses the feasibility of a project.',
		icon: iconStyle(BiSupport),
		imgClass: 'four',
	},
	{
		name: 'Environmental Engineering',
		description: 'Environmental Engineering involves the nature conservation and protection-related activities like green engineering, pollution elimination, solid waste treatment, handling hazardous waste materials, protection of densely populated areas, and natural resources situated in densely populated areas, amongst others.',
		icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
	{
		name: 'Coastal Engineering',
		description:
			'Coastal engineering is concerned with the management and protection of coastal areas from floods, erosion and other environmental factors. A coastal engineer is expected to apply certain techniques that help in the protection of the area.',
		icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'six',
	},{
		name: 'Earthquake Engineering',
		description:
			'It involves producing and designing an infrastructure or a project in such a way that it can withstand the hazardous effects of an earthquake. Civil engineers are in huge demand in earthquake-prone areas like Japan.',
		icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'six',
	},{
		name: 'Forensic Engineering',
		description:
			'This field comprises of the inspection of different types of materials that are used while constructing a physical infrastructure. It also involves retracing the process of construction to know what went wrong and where it went wrong so that it can be improved and avoided in the future.',
		icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'six',
	},{
		name: 'Highway Engineering',
		description:
			'The importance of roads, highways and tunnels is quite evident in our lives. Thus, a dedicated branch of Civil Engineering is created all together to specialize in making of these structures. Highway Engineering majorly deals with the construction of roads, highways and tunnels uging basic techniques like planning, designing, constructing and operating. Roadways are one of the major means of transportation, thus, safety and commutes of people and goods are in the hands of the constructors.',
		icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'six',
	},
];
