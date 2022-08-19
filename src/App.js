import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const _apiUrl = "https://62fcf1686e617f88dea1b194.mockapi.io/products";

  const [products, setProducts] = React.useState([]);
  const [cartProducts, setCartProducts] = React.useState([]);
  const [isShowDrawer, setShowDrawer] = React.useState(false);

  React.useEffect(() => {
    fetch(_apiUrl)
      .then(response => response.json())
      .then(data => setProducts(data));
  }, [])

  const onAddToCart = (obj) => {
    setCartProducts(prev => {
      const removeRepeated = [...prev, obj].filter(item => obj.isAdded || item.id !== obj.id);

      return [...removeRepeated];
    })
  }

  const onRemoveCartProduct = (id, productCarts) => {
    const addedCartId = productCarts.findIndex(el => el.id === id);
    setCartProducts(() => {
      const before = productCarts.slice(0, addedCartId);
      const after = productCarts.slice(addedCartId + 1);

      return [...before, ...after];
    });

    setProducts((prev) => {
      const addedProductId = prev.findIndex(el => el.id === addedCartId);
      const oldProduct = prev[addedProductId];
      const newProduct = {...oldProduct, isAdded: false};
      
      console.log(
        ...prev.slice(0, addedProductId),
        newProduct,
        ...prev.slice(addedProductId + 1)
      );

      return [
        ...prev
      ]
    })
  }

  return (
    <div className="wrapper">
      {isShowDrawer && <Drawer onRemoveCart={onRemoveCartProduct} products={cartProducts} onClose={() => setShowDrawer(false)} />}
      <Header onClickCart={() => setShowDrawer(true)} />
      <main className="page">
        <section className="page__sneakers sneakers">
          <div className="sneakers__actions">
            <h1 className="title sneakers__title">Все кроссовки</h1>
            <div className="sneakers__form form-search">
              <img
                src="/img/magnifer.svg"
                alt=""
                className="form-search__icon"
              />
              <input
                type="text"
                placeholder="Поиск..."
                className="form-search__input"
              />
            </div>
          </div>
          <div className="sneakers__body"> 
            {
              products.map((product, index) => (
                <Card 
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  id={product.id}
                  isAdded={product.isAdded}
                  onFavorite={() => console.log('Добавили в корзину')}
                  onClickAdd={(obj) => onAddToCart(obj)}
                  key={index}
                />
              ))
            }
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
