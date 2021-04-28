import React, {Component} from 'react';
import './cardStyle.scss';

const Skeleton = ({width, height}) => { 
	return(
		<section class="loader" style={{width:width}}>
			<figure class="loader_screen loading" style={{height:height}}></figure>
	  	</section>
	)
}

export default Skeleton;