import React from 'react'
import Slicker from 'react-slick'

export default class Slick extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1}
        var {list} = this.props;
        return <Slick>
            <Slicker {...settings}>
                {this.props.list.map((item)=> <div className="photoItem">
                    <div className="photoItemWrap">
                        <img src={item.content} alt="" className="work"/>
                        <div className="avatarWrap"><img src={item.owner.avatar} alt="" className="avatarImg"/></div>
                        <span className="nickName">{item.owner.nickname} </span>
                    </div>
                </div>)}
            </Slicker>
            </Slick>;
    }
}

Slick.propTypes = {
    list: React.PropTypes.array.isRequired
}

