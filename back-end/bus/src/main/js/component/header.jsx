import * as React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="content__header">
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
}
export { Header };
