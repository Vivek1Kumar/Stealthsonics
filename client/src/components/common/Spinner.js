import React from 'react';
import circle from './circle.png';

export default () => {
	return (
		<div>
			<img 
				src = {circle}
				style ={{width: "200px", margin: "auto", display: 'block'}}
				alt="loading..."
			/>
		</div>
	)
}