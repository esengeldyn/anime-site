import './Banner.css'
import { Link } from 'react-router-dom'
import { links } from '../../../data.js'
const Banner = () => {
	return (
		<div className='banner'>
			<img className='banner_img' src='https://gen.jut.su/chakranature/background/main/main.dark.jpg'alt=''/>
			<div className='banner_wrapper'>
				<div className='container'>
					<div className='banner_img-img'>
						<img
							src='https://gen.jut.su/templates/school/images/logo.dark.png'
							alt=''
						/>
					</div>
					<div className='banner_content'>
						<div className='banner_header'>
							<div className='banner_header_title'>
								Войти <br />
								<span>на сайт</span>
							</div>
							<div className='banner_header_input'>
								<input type='text' />
							</div>
							<div className='banner_header_button'>Найти</div>
							<div className='banner_header_links'>
								<a href=''>
									<img
										src='https://gen.jut.su/templates/school/images/plus_ico_green.png'
										alt=''
									/>
								</a>
								<a href=''>
									<img
										src='https://gen.jut.su/templates/school/images/vk_ico_white.png'
										alt=''
									/>
								</a>
								<a href=''>
									<img
										src='https://gen.jut.su/templates/school/images/yt_ico.png'
										alt=''
									/>
								</a>
							</div>
						</div>
						<div className='banner_category'>
							<div className='banner_category_anime'>
								{links.map(item => (
									<div className='anime_block'>
										<img src={item.img} alt='' />
										<Link to={`/anime/${item.id}`}>{item.name}</Link>
									</div>
								))}
							</div>
							<div className='banner_category_category'>
								<div>Навигация по сайту</div>
							</div>
						</div>
						<div className='banner_footer'>
							<div className='banner_footer_item'>
								<ul>
									<li>Главная</li>
									<li>Все аниме</li>
									<li>Все серии Наруто</li>
									<li>Манга Наруто</li>
									<li>Все техники</li>
									<li>Рассылка обновлений</li>
									<li>Контакты</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Banner
