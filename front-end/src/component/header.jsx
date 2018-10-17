import * as React from 'react';
import { Link } from 'react-router-dom'


const Header = (props) => {
  return (
    <div className="content__header">
      <p className="content__header__title">Trang thông tin hỗ trợ tìm tuyến xe buýt</p>

      <div className="content__menu">
        <ul >
          <Link to='/trangchu'><li className="content__menu__item">Trang chủ</li></Link>
          <Link to='/danhsachtuyen'><li className="content__menu__item">Tuyến</li></Link>
          <Link to='/timduong'><li className="content__menu__item">Tìm đường</li></Link>
        </ul>
      </div>
    </div>
  )
}
export { Header };
