import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const data = [
    {
      image: '/img/sneakers/01.jpg',
      favorite: true,
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      price: 12999,
    },
    {
      image: '/img/sneakers/02.jpg',
      favorite: false,
      title: 'Мужские Кроссовки Nike Air Max 270',
      price: 15699,
    },
    {
      image: '/img/sneakers/03.jpg',
      favorite: false,
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      price: 12999,
    },
    {
      image: '/img/sneakers/04.jpg',
      favorite: true,
      title: 'Кроссовки Puma X Aka Boku Future Rider',
      price: 8999,
    },
  ]

  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <main className="page">
        <div className="page__sneakers sneakers">
          <div className="sneakers__actions">
            <h1 className="title sneakers__title">Кроссовки</h1>
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
              data.map((obj, index) => (
                <Card 
                  title={obj.title}
                  price={obj.price}
                  image={obj.image}
                  favorite={obj.favorite}
                  onClick={() => console.log(obj)}
                  key={index}
                />
              ))
            }
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
