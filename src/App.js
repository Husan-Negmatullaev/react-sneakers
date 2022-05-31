import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
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
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
