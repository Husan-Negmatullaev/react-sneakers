import React from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from './pages/Home';
import Favorites from "./pages/Favourites";

function App() {
   const _apiUrlProducts = "https://62fcf1686e617f88dea1b194.mockapi.io/products";
   const _apiUrlCart = "https://62fcf1686e617f88dea1b194.mockapi.io/cart";
   const _apiUrlFavoruites = "https://62fcf1686e617f88dea1b194.mockapi.io/favourites";

   const [products, setProducts] = React.useState([]);
   const [cartProducts, setCartProducts] = React.useState([]);
   const [favourites, setFavourites] = React.useState([]);
   const [isShowDrawer, setShowDrawer] = React.useState(false);
   const [searchQuery, setSearchQuery] = React.useState('')

   React.useEffect(() => {
      axios.get(_apiUrlProducts)
         .then(res => setProducts(res.data));

      axios.get(_apiUrlCart)
         .then(res => setCartProducts(res.data));

      axios.get(_apiUrlFavoruites)
         .then(res => setFavourites(res.data));
   }, [])

   const onAddToCart = (obj) => {
      if (obj.isAdded) {
         axios.post(_apiUrlCart, obj);
      } else {
         axios.delete(`${_apiUrlCart}/${obj.id}`);
      }
      axios.put(`${_apiUrlProducts}/${obj.id}`, obj);

      setCartProducts(prev => {
         const removeRepeated = [...prev, obj].filter(item => obj.isAdded || item.id !== obj.id);

         return [...removeRepeated];
      })
   }

   const onAddFavoruite = async (obj) => {
      // const changeIsFavourite = { ...obj, isFavourite: false }

      try {
         if (obj.isFavourite) {
            const { data } = await axios.post(_apiUrlFavoruites, obj);
            axios.put(`${_apiUrlProducts}/${data.id}`, obj)
            setFavourites((prev) => [...prev, data])
         } else {
            axios.put(`${_apiUrlProducts}/${obj.id}`, obj)
            axios.delete(`${_apiUrlFavoruites}/${obj.id}`, obj);
            setFavourites((prev) => [...prev, obj].filter(item => item.id === obj.id))
            // setFavourites((prev) => [...prev].filter(item => item.id !== obj.id));
         }
      } catch (error) {
         alert("Не удалост добавить в Favourite");
      }
   }

   const onRemoveCartProduct = (cart) => {
      // try {
      const changeIsAdded = { ...cart, isAdded: false };
      axios.delete(`${_apiUrlCart}/${cart.id}`);
      // const { data } = await axios.put(`${_apiUrlProducts}/${changeIsAdded.id}`, changeIsAdded);

      setCartProducts((prev) => {
         const filterCarts = [...prev, changeIsAdded].filter(el => el.id !== cart.id);

         return [...filterCarts];
      });

      setProducts(() => {
         let idx = products.findIndex(el => el.id === cart.id);
         const afterData = products.slice(0, idx);
         const beforeData = products.slice(idx + 1);

         return [
            ...afterData,
            changeIsAdded,
            ...beforeData
         ]
      })
      // } catch (e) {
      //    alert("При удалении продукта из корзина произошла ошибка")
      // }
   }

   const onChangeSearchInput = (event) => {
      const targetItem = event.target.value ?? "";
      setSearchQuery(targetItem);
   }

   const searchFilter = (productsArr) => {
      return productsArr.filter(item => item.title.toLowerCase()
         .includes(
            searchQuery.toLowerCase()
         ))
   }

   return (
      <div className="wrapper">
         <Drawer
            onRemoveCart={onRemoveCartProduct}
            products={cartProducts}
            onClose={() => setShowDrawer(false)}
            isShow={isShowDrawer}
         />
         <Header onClickCart={() => setShowDrawer(true)} />
         <main className="page">
            <Route path="/" exact>
               <Home
                  products={products}
                  searchQuery={searchQuery}
                  searchFilter={searchFilter}
                  onAddToCart={onAddToCart}
                  onAddFavoruite={onAddFavoruite}
                  onChangeSearchInput={onChangeSearchInput}
               />
            </Route>
            <Route path="/favourites" exact>
               <Favorites favourites={favourites} onAddFavoruite={onAddFavoruite} />
            </Route>
         </main>
      </div>
   );
}

export default App;
