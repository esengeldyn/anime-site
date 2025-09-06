import "./Banner.css"
import Anime from "./Anime"

const Banner = () => {
    const links = [
        {
            id: 1,
            name: 'Пойдём в караоке!',
            link: 'https://jut.su/karaoke-iko/',
            img: 'https://gen.jut.su/uploads/animethumbs/anime_karaoke-iko.jpg'
        },
        {
            id: 2,
            name: 'Тёрки!',
            link: 'https://jut.su/turkey-time/',
            img:'https://gen.jut.su/uploads/animethumbs/anime_turkey-time.jpg'
        },
        {
            id: 3,
            name: 'Дешёвый ресторан изгнанника',
            link: 'https://jut.su/tsuihousha-shokudou/',
            img:'https://gen.jut.su/uploads/animethumbs/anime_tsuihousha-shokudou.jpg'
        },
    ]

    return(
        <div className="banner">
            <img className="banner_img" src="https://gen.jut.su/chakranature/background/main/main.dark.jpg" alt="" />
            <div className="banner_wrapper">
                <div className="container">
                    <div className="banner_img-img">
                        <img src="https://gen.jut.su/templates/school/images/logo.dark.png" alt="" />
                    </div>
                    <div className="banner_content">
                        <div className="banner_header">
                            <div className="banner_header_title">Войти <br/><span>на сайт</span></div>
                            <div className="banner_header_input">
                                <input type="text" />
                            </div>
                            <div className="banner_header_button">Найти</div>
                            <div className="banner_header_links">
                                <a href="">
                                    <img src="https://gen.jut.su/templates/school/images/plus_ico_green.png" alt="" />
                                </a>
                                <a href="">
                                    <img src="https://gen.jut.su/templates/school/images/vk_ico_white.png" alt="" />
                                </a>
                                <a href="">
                                    <img src="https://gen.jut.su/templates/school/images/yt_ico.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="banner_category">
                            <div className="banner_category_anime">
                                {links.map(item => (
                                    <div className="anime_block">
                                        <img src={item.img} alt="" />
                                        <a href="/catalog">{item.name}</a>
                                    </div>
                                ))}
                            </div>
                            <div className="banner_category_category">
                                <div>Навигация по сайту</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
