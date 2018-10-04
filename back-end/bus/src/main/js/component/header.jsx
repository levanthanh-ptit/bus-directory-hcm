import * as React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {

  return (
    <div className="content__header">
      <p class="content__header__title">Phan mem ho tro tim tuyen xe bus</p>

      <nav className="content__menu">
        <ul >
          <li className="active"><a href="" className="">Trang chủ</a></li>
          <li className=""><a href="" className="">Tuyến</a></li>
          <li className=""><a href="" className="">Ban do</a></li>
          <li className=""><a href="" className="">Tìm đường</a></li>
        </ul>
      </nav>
    </div>
  )
}
export { Header };
