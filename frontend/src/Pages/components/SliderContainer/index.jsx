import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "./styles.css";
import { sliderData } from '../../../utils/sliderData.jsx';
import { SliderCard } from './SliderCard/index.jsx';
import { NextArrowCard, PrevArrowCard } from './ArrowsCard/index.jsx';

const SliderContainer = () => {

	const settings = {
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		nextArrow: <NextArrowCard />,
		prevArrow: <PrevArrowCard />,
		// dots: true,
		// arrows: false,
		style: {
			width: "95%",
			heigth: "100%"
		},
		focusOnSelect: true,
		responsive: [
			{
			breakpoint: 1150,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
			breakpoint: 700,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
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