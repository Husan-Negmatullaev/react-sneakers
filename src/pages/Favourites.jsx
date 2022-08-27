import Card from '../components/Card';

function Favorites({ favourites, onAddFavoruite }) {
  return (
      <section className="page__sneakers sneakers">
         <div className="sneakers__actions">
            <h1 className="title sneakers__title">Мои закладки</h1>
            <div className="sneakers2__form form-search"></div>
         </div>
         <div className="sneakers__body">
            {favourites.map((item) => (
               <Card
                  key={item.id}
                  isFavourite={item.isFavourite}
                  onFavorite={(obj) => onAddFavoruite(obj)}
                  {...item}
               />
            ))}
         </div>
      </section>
  );
}

export default Favorites;
