import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';

const placeHolder =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=";

let observer;
let didCancel = false;

class CardImage extends Component{
	static propTypes = {
		src: PropTypes.string.isRequired,
		alt: PropTypes.string,
		imageStyle: PropTypes.object,
		className: PropTypes.string,
	  };
	
	constructor(props){
		super(props);
		this.imageRef = createRef();
		this.state = {
			imageSrc : placeHolder
		}
	}

	componentDidMount(){
		didCancel = false;
		if (this.imageRef && this.state.imageSrc !== this.props.src) {
		  if (IntersectionObserver) {
			observer = new IntersectionObserver(
			  entries => {
				entries.forEach(entry => {
				  if (
					!didCancel &&
					(entry.intersectionRatio > 0 || entry.isIntersecting)
				  ) {
					this.setState({ imageSrc : this.props.src });
					//this.imageRef.current ? observer.unobserve(this.imageRef.current) : null;
				  }
				});
			  },
			  {
				threshold: 0.01,
				rootMargin: "75%"
			  }
			);
			observer.observe(this.imageRef.current);
		  } else {
			// Old browsers fallback
			this.setState({ imageSrc : this.props.src });
		  }
		} else {
			// Old browsers fallback
			this.setState({ imageSrc : this.props.src });
		}
	}

	componentWillUnmount(){
		didCancel = true;
        // on component cleanup, we remove the listner
        if (observer && observer.unobserve) {
          observer.unobserve(this.imageRef.current);
        }
	}

	onLoad = event => {
		event.target.classList.add("loaded");
	  };
 
	 onError = event => {
		event.target.classList.add("has-error");
	  };

	render(){
		return (
			<img 
				ref={this.imageRef}
				className={`${this.props.className}`} 
				style={{...this.props.imageStyle}} 
				alt={this.props.alt}
				src={this.state.imageSrc} 
				onLoad={this.onLoad}
				onError={this.onError}
			/>
		)
	}
}

export default CardImage;