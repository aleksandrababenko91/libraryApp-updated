import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import '../Styles/Slides.css';


function Slider({slides}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    console.log('selected index', selectedIndex);
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {slides.map((slide) => (
      <Carousel.Item key={slide.image} interval={slide.interval}>
        <img 
          src={slide.image}
          className='slides'
        />
        <Carousel.Caption className="items">
          <h3 className='title'>{slide.title}</h3>
          <p>{slide.subtitile}</p>
          <img src={slide.svg} className='svg'></img>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;