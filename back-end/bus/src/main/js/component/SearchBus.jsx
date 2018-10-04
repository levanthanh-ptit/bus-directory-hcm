import * as React from 'react';
import { Link } from 'react-router-dom';


const SearchBus = (props) => {

    return (
        <div className="content__header">
            <p className="content__search__title">Danh sach tuyen</p>
            <input type="text" className="content__search__input" placeholder="<nhập mã hoặc tên tuyến>"></input> 
            <button className="content__search__input__button">Tìm</button>
        </div>
    )
}
export { SearchBus };
