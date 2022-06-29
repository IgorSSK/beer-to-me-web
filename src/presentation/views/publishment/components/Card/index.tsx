import React from 'react';

// import { Container } from './styles';
export type PublishmentCardProps = {
	id: string,
	title: string,
	price?: string,
	image?: string,
}

const Card: React.FC<PublishmentCardProps> = ({id,title, price, image}) => {
	return <div key={id}>
		<img src={image} alt="" />
		<h3>{title}</h3>
		<span>{ price }</span>
	</div>;
}

export default Card;
