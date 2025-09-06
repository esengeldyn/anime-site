import "./Header.css"

const Header = () => {
    return(
        <header>
            <div className="header">
                <div className="container">
                    <div className="header_item">
                        <img src="https://gen.jut.su/templates/school/images/dark_mode_moon.png" alt="" />
                        <div className="header_menu">
                            <ul>
                                <li>
                                    <a href="/catalog">Типы</a>
                                </li>
                                <li>Вода</li>
                                <li>Молния</li>
                                <li>Земля</li>
                                <li>Ветер</li>
                                <li>Огонь</li>
                                <li>Чакра</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header