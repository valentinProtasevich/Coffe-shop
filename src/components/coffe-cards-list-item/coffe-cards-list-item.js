import './coffe-cards-list-item.css';

const CoffeeCardsListItem = (props) => {
  const {img, name, from, price} = props;
  const imgSrc = Object.values(img)[0];

  return (
    <div className='cards-items'>
      <img src={imgSrc} alt="" />
      <p>{name.toUpperCase()} Coffee 1 kg</p>
      <p>{from}</p>
      <p className='price'>{price}$</p>
    </div>
  )
}

export default CoffeeCardsListItem;