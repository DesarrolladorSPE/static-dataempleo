import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "./styles.css";
import { sliderData } from '../../../utils/sliderData.jsx';
import { SliderCard } from './SliderCard.jsx/index.jsx';

const SliderContainer = () => {

	const settings = {
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		style: {
			width: "90%",
			heigth: 400,
		},
		focusOnSelect: true,
	};

	return(
		<div className='slider-container'>
			<Slider {...settings}>
				{sliderData?.map((item, index) => (
					<SliderCard key={index} item={item}/>
				))}
			</Slider>
		</div>

	);
}

export { SliderContainer };