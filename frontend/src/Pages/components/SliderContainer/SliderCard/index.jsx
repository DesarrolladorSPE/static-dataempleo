import "./styles.css";

const SliderCard = ({item}) => {
    return(
        <div className="slider-card">
            {item?.icon}
            <div className="slider-info-container">
                <p>{item?.name}</p>
                <p>{item?.numericValue}</p>
                <p>{item?.percentValue}</p>
            </div>
        </div>
    );
}

export { SliderCard }