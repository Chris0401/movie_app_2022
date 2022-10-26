import React from 'react';
import PropTypes from 'prop-types'
function Food({name, picture, rating}) {
  return (
  <div>
  <h3>I Love Potato({name})</h3>
  <h4>{rating}/5.0</h4>
  <img src={picture} alt={name}/>
  </div>
  );
}
const foodILike = [
  {
    id: 1,
name: '김치',
image: 'https://m.unlimga.com/web/product/medium/202204/15fb42e1dec2d997bc18dad0a764f4d8.jpg',
rating: 5/5.0,
},
{
  id: 2,
  name: '삼겹살',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRThO1_StWKpULTBeTTlqVNXtVpuz-bEFuAog&usqp=CAU',
  rating: 5/5.0,
}
];



function App() {
 
  return (
   <div>
    <h1>집가고싶어요 보내주세요</h1>
    {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} raiting={dish.rating} />))}

  </div>
  );
}

  Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  };
    



export default App;
