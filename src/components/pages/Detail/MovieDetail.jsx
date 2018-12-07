import React, { Component } from 'react';
class MovieData extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        console.log(this.props.match.params.name)
        this.state = {
            films: [],
        }
    }
    getMovieData(){
        React.axios.get('http://localhost:1234/getMovieData',{params:{
                filmId:this.props.match.params.name
            }
        })
            .then((response) => {
                console.log(response.data.result);
                this.setState({
                        films:response.data.result.activity,     
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    componentDidMount(){
        this.getMovieData();
    }
  render() {
    return (
<div className="MovieData">
<div id='wrapper-films.film'>
<div id='film' className='page'>
<div className='page__info'>
    <div className="info__basic">
        <div className="basic__big">
            <img className="big__img" src="http://image6.xishiqu.cn/upload/film/920/181/920181204//3A193760-67FD-FD45-C246-1DE044615718.jpg" />
                <i className="icon icon-angle-left">
                </i>
            
        </div>
        <div className="basic__intro">
            <h3 className="intro__text intro__title">
                海王
            </h3>
            <h5 className="intro__text intro__little">
                Aquaman
            </h5>
            <p className="intro__text intro__time">
                2018-12-07 上映
            </p>
            <p className="intro__text intro__long">
                143分钟 - 动作,冒险,科幻
            </p>
            <div className="intro__score clearfix">
                <div className="score__gwl">
                    <span className="film__icon gwl">
                    </span>
                    0.0
                </div>
                <div className="score__db">
                    <span className="film__icon db">
                    </span>
                    0.0
                </div>
            </div>
            <div className="intro__audience">
                <h3 className="title audience__title">
                    Ta们也去看
                </h3>
                <ul className="audience__list clearfix">
                    <li className="list__item">
                        <img className="item__img" src="http://image3.xishiqu.cn/upload/userUpload/920/171/920171123//m/253D81EC-B8E2-DFAE-F6CE-1B60941A6153.jpg" />
                    </li>
                    <li className="list__item">
                        <img className="item__img" src="http://image.xishiqu.com/upload/app/memHeader/default.png" />
                    </li>
                    <li className="list__item">
                        <img className="item__img" src="http://image.xishiqu.com/upload/app/memHeader/default.png" />
                    </li>
                    <li className="list__item">
                        <img className="item__img" src="http://image4.xishiqu.cn/upload/userUpload/920/180/920180313//m/4C44BE1C-92C3-76CF-5527-EA040FB0AC66.jpg" />
                    </li>
                    <li className="list__item">
                        <img className="item__img" src="http://image.xishiqu.com/upload/app/memHeader/default.png" />
                    </li>
                    <li className="list__item">
                        <img className="item__img" src="http://image.xishiqu.com/upload/app/memHeader/default.png" />
                    </li>
                    <li className="list__item">
                        <img className="item__img" src="http://image6.xishiqu.cn/upload/userUpload/920/180/920180802//m/2B2C39CE-7483-2417-C38B-B241F44851EF.jpg" />
                    </li>
                </ul>
            </div>
            <div className="intro__cover">
                <p className="cover__num">
                    全网比价 1家
                </p>
                <div className="cover__poster">
                    <img className="poster__img" src="http://image3.xishiqu.cn/upload/film/920/181/920181204//8C3B1D6A-B6A4-9375-6FBE-CAC417FFF0EB.jpg" />
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
);
  }
}

export default MovieData;
