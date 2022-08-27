import Card from "../components/Card";

function Home({products, searchQuery, onAddToCart, onAddFavoruite, onChangeSearchInput, searchFilter}) {
   return (
      <section className="page__sneakers sneakers">
         <div className="sneakers__actions">
            <h1 className="title sneakers__title">
               { 
                  searchQuery.trim() ? 
                     `Посик по запросу: ${searchQuery}`
                     : 
                     "Все кроссовки"
               }
            </h1>
            <div className="sneakers__form form-search">
               <img
                  src="/img/magnifer.svg"
                  alt=""
                  className="form-search__icon"
               />
               {
                  searchQuery.trim() && <img src="/img/cross.svg" onClick={onChangeSearchInput} alt="" className="form-search__icon form-search__icon_cross"/>
               }
               <input
                  type="text"
                  placeholder="Поиск..."
                  className="form-search__input"
                  onChange={onChangeSearchInput}
                  value={searchQuery}
               />
            </div>
         </div>
         <div className="sneakers__body"> 
            {
               searchFilter(products).map(product => (
                  <Card 
                     key={product.id}
                     onFavorite={(obj) => onAddFavoruite(obj)}
                     onClickAdd={(obj) => onAddToCart(obj)}
                     {...product}
                  />
               ))
            }
         </div>
      </section>
    )
}

export default Home;