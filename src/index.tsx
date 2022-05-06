import React, { FC } from 'react';

type Props = {
	name: string;
};

const Hello = ({ name }: Props) => {
	<h1 className='hello'>Hello {name || 'World'}</h1>;
};

export default Hello;
