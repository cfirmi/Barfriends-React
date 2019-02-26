import styled from 'styled-component'
import TouchCarousel from 'react-touch-carousel'

const ListOfScreens = [


];

const Carousel = (props) => (
  
  <TouchCarousel
  component={CarouselContainer}
  cardCount={listOfData.length}
  cardSize={375}
  renderCard={renderCard}
  loop
  autoplay={3000}
/>
);

export default Carousel;