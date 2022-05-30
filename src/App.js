
function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <a href="#" className="header__logo">
          <img src="/img/logo.png" className="header__logo-image" />
          <div className="header__logo-info">
            <h3 className="header__logo-title">REACT SNEAKERS</h3>
            <p className="header__logo-text">Магазин лучших кроссовок</p>
          </div>
        </a>
        <div className="header__menu menu">
          <ul className="menu__list">
            <li>
              <img className="menu__icon" src="/img/cart.svg" alt="" />
              <span className="menu__text">1205 руб.</span>
            </li>
            <li>
              <img className="menu__icon" src="/img/favorite.svg" alt="" />
            </li>
            <li>
              <img className="menu__icon" src="/img/user.svg" alt="" />
            </li>
          </ul>
        </div>
      </header>
      <main className="page">
        <div className="page__sneakers sneakers">
          <h1 className="title sneakers__title">Кроссовки</h1>
          <div className="sneakers__body">
            <div className="sneakers__card sneakers-card">
              <div className="sneakers-card__img">
                <img src="/img/sneakers/01.jpg" alt="" />
              </div>
              <div className="sneakers-card__actions">
                <div className="sneakers-card__favourite">
                  {/* svg */}
                </div>
              </div>
              <h5 className="sneakers-card__title">Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="sneakers-card__info">
                <div className="sneakers-card__meta">
                  <div className="sneakers-card__subtitle">Цена:</div>
                  <span className="sneakers-card__price">12 990 руб.</span>
                </div>
                <div className="sneakers-card__button">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="sneakers__card sneakers-card">
              <div className="sneakers-card__img">
                <img src="/img/sneakers/02.jpg" alt="" />
              </div>
              <div className="sneakers-card__actions">
                <div className="sneakers-card__favourite">
                  {/* svg */}
                </div>
              </div>
              <h5 className="sneakers-card__title">Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="sneakers-card__info">
                <div className="sneakers-card__meta">
                  <div className="sneakers-card__subtitle">Цена:</div>
                  <span className="sneakers-card__price">12 990 руб.</span>
                </div>
                <div className="sneakers-card__button">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="sneakers__card sneakers-card">
              <div className="sneakers-card__img">
                <img src="/img/sneakers/03.jpg" alt="" />
              </div>
              <div className="sneakers-card__actions">
                <div className="sneakers-card__favourite">
                  {/* svg */}
                </div>
              </div>
              <h5 className="sneakers-card__title">Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="sneakers-card__info">
                <div className="sneakers-card__meta">
                  <div className="sneakers-card__subtitle">Цена:</div>
                  <span className="sneakers-card__price">12 990 руб.</span>
                </div>
                <div className="sneakers-card__button">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="sneakers__card sneakers-card">
              <div className="sneakers-card__img">
                <img src="/img/sneakers/01.jpg" alt="" />
              </div>
              <div className="sneakers-card__actions">
                <div className="sneakers-card__favourite">
                  {/* svg */}
                </div>
              </div>
              <h5 className="sneakers-card__title">Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="sneakers-card__info">
                <div className="sneakers-card__meta">
                  <div className="sneakers-card__subtitle">Цена:</div>
                  <span className="sneakers-card__price">12 990 руб.</span>
                </div>
                <div className="sneakers-card__button">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="sneakers__card sneakers-card">
              <div className="sneakers-card__img">
                <img src="/img/sneakers/01.jpg" alt="" />
              </div>
              <div className="sneakers-card__actions">
                <div className="sneakers-card__favourite">
                  {/* svg */}
                </div>
              </div>
              <h5 className="sneakers-card__title">Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="sneakers-card__info">
                <div className="sneakers-card__meta">
                  <div className="sneakers-card__subtitle">Цена:</div>
                  <span className="sneakers-card__price">12 990 руб.</span>
                </div>
                <div className="sneakers-card__button">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="sneakers__card sneakers-card">
              <div className="sneakers-card__img">
                <img src="/img/sneakers/02.jpg" alt="" />
              </div>
              <div className="sneakers-card__actions">
                <div className="sneakers-card__favourite">
                  {/* svg */}
                </div>
              </div>
              <h5 className="sneakers-card__title">Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="sneakers-card__info">
                <div className="sneakers-card__meta">
                  <div className="sneakers-card__subtitle">Цена:</div>
                  <span className="sneakers-card__price">12 990 руб.</span>
                </div>
                <div className="sneakers-card__button">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="sneakers__card sneakers-card">
              <div className="sneakers-card__img">
                <img src="/img/sneakers/03.jpg" alt="" />
              </div>
              <div className="sneakers-card__actions">
                <div className="sneakers-card__favourite">
                  {/* svg */}
                </div>
              </div>
              <h5 className="sneakers-card__title">Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="sneakers-card__info">
                <div className="sneakers-card__meta">
                  <div className="sneakers-card__subtitle">Цена:</div>
                  <span className="sneakers-card__price">12 990 руб.</span>
                </div>
                <div className="sneakers-card__button">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="sneakers__card sneakers-card">
              <div className="sneakers-card__img">
                <img src="/img/sneakers/01.jpg" alt="" />
              </div>
              <div className="sneakers-card__actions">
                <div className="sneakers-card__favourite">
                  {/* svg */}
                </div>
              </div>
              <h5 className="sneakers-card__title">Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="sneakers-card__info">
                <div className="sneakers-card__meta">
                  <div className="sneakers-card__subtitle">Цена:</div>
                  <span className="sneakers-card__price">12 990 руб.</span>
                </div>
                <div className="sneakers-card__button">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
