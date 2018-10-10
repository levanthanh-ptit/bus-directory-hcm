import * as React from 'react'
import Map from '../component/Map'
import { Marker } from 'react-google-maps'
import { BusScheduleBox } from '../component/BusScheduleBox'
import { compose } from 'recompose'
import { withMapDetailStyle } from '../hoc/withMapstyle'


class BusDetail extends React.Component {

    state = {
        loading: true,
        loadingMap: true,
        center: {
            lat: null,
            lng: null,
        },
        busdetail: null,
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(location => {
            this.setState({
                center: {
                    lat: location.coords.latitude,
                    lng: location.coords.longitude
                },
                loadingMap: false,
            })
        })

    }

    render() {
        const Mapstyle = compose(withMapDetailStyle)(Map);

        return (
            <div>
                <p className="busdetail__title">Thong tin tuyen xe buyt so 1</p>
                <div className="busdetail__content">
                    <div><label className="busdetail__content__label">Ma so tuyen</label><p>01</p></div>
                    <div><label className="busdetail__content__label">Ten tuyen</label><p>Ben thanh - Ben Xe cho lon</p></div>
                    <div><label className="busdetail__content__label">Di den</label><p>Công trường
                        Mê Linh-Thi Sách-Công trường Mê Linh-Tôn Đức Thắng-Hàm Nghi - Phó Đức Chính - Nguyễn Thái Bình - Ký Con - Trần Hưng Đạo-Nguyễn Tri Phương-Trần Phú-Trần Hưng Đạo-Châu
                        Văn Liêm-Hải Thượng Lãn Ông-Trang Tử-Ga Chợ Lớn A</p></div>
                    <div><label className="busdetail__content__label">Di den></label><p>	Ga Chợ Lớn A-Lê Quang Sung-Phạm Đình Hổ-Tháp Mười-Hải Thượng Lãn Ông-Châu Văn Liêm-Nguyễn Trãi-Nguyễn Tri Phương-Trần Phú-Trần Hưng Đạo -Hàm Nghi-Hồ Tùng Mậu-đường nhánh S2-Tôn Đức Thắng-Hai Bà Trưng
                        -Đông Du-Thi Sách-Công trường Mê Linh</p></div>
                    <div><label className="busdetail__content__label">Don vi dam nham</label><p>
                        Công ty Cổ phần Xe khách Sài Gòn, ĐT: (028)39505505</p></div>
                </div>
                <div className="busdetail__schedule">
                        <BusScheduleBox />
                    {!this.state.loadingMap ?
                        <Mapstyle
                            center={this.state.center}
                        >
                            <Marker position={this.state.center} />
                        </Mapstyle> : null
                    }

                </div>
            </div >
        )
    }
}

export {
    BusDetail
}