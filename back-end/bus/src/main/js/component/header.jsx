import * as React from 'react';
import { Link } from 'react-router-dom'


const Header = (props) => {

  return (
    <div className="content__header">
      <p className="content__header__title">Phan mem ho tro tim tuyen xe bus</p>

      <nav className="content__menu">
        <ul >
          <Link to='/trangchu'><li>Trang chủ</li></Link>
          <Link to='/danhsachtuyen'><li className="">Tuyến</li></Link>
          <li className="">Ban do</li>
          <li className="">Tìm đường</li>
        </ul>
      </nav>
    </div>
  )
}
export { Header };
