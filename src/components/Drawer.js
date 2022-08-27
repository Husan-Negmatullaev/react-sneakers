import React from "react";

export default function Drawer({ onClose, onRemoveCart, isShow, products = [] }) {
   console.log(products);
   return (
      <div className={`drawer ${isShow ? "_show" : ""}`}>
         <div className="drawer__wrapper">
            <div className="drawer__body">
               <div className="drawer__meta">
                  <h2 className="drawer__title">Корзина</h2>
                  <img onClick={onClose} src="/img/cross.svg" alt="" />
               </div>
               <div className="drawer__content">
                  {
                     products.length > 0 ?
                        products.map((obj, index) => (
                           <div key={index} className="drawer-cart">
                              <div className="drawer-cart__image">
                                 <img src={obj.image} alt="" />
                              </div>
                              <div className="drawer-cart__content">
                                 <div className="drawer-cart__title">
                                    {obj.title}
                                 </div>
                                 <div className="drawer-cart__price">{obj.price} руб.</div>
                              </div>
                              <button onClick={() => onRemoveCart(obj)} type="button" className="drawer-cart__button">
                                 <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 10 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z"
                                       fill="#B5B5B5"
                                    />
                                 </svg>
                              </button>
                           </div>
                        ))
                        : (
                           <div className="drawer__event event-drawer">
                              <div className="event-drawer__img">
                                 <img src="/img/empty-box.png" alt="" />
                              </div>
                              <div className="event-drawer__body">
                                 <h3 className="event-drawer__title">Корзина пустая</h3>
                                 <p className="event-drawer__text">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                                 <button
                                    onClick={onClose}
                                    type="button"
                                    className="event-drawer__button button button_min button__icon button__icon button__icon_left"
                                 >
                                    Вернуться назад
                                    <img src="/img/arrow-left.svg" alt="" />
                                 </button>
                              </div>
                           </div>
                        )
                  }
               </div>
               {
                  products.length > 0 &&
                  <div className="drawer__footer">
                     <ul className="drawer__footer-list">
                        <li>
                           <span className="drawer__footer-var">Итого: </span>
                           <div></div>
                           <span className="drawer__footer-value">21 498 руб. </span>
                        </li>
                        <li>
                           <span className="drawer__footer-var">Налог 5%: </span>
                           <div></div>
                           <span className="drawer__footer-value">1074 руб. </span>
                        </li>
                     </ul>
                     <button
                        type="button"
                        className="drawer__footer-button button button__icon button__icon_right"
                     >
                        Оформить заказ
                        <img src="/img/arrow-right.svg" alt="" />
                     </button>
                  </div>
               }

            </div>
         </div>
      </div>
   )
}