import CoffeeCardsListItem from '../coffe-cards-list-item/coffe-cards-list-item';

import './coffe-cards-list.css';

const CoffeeCardsList = ({data}) => {
  const elements = data.map(item => {
    const {id, ...itemProps} = item;
  
    return(
      <CoffeeCardsListItem
        key={id}
        {...itemProps}
      />
    )
  })

  return (
    <div className='coffee-cards-list'>
      {elements}
    </div>
  )
}

export default CoffeeCardsList;