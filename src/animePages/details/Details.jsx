import { links } from '../../data.js'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import './Details.css'

const Details = () => {
	const params = useParams()
	const animeId = params.id
	const foundAnime = links.find(anime => anime.id === Number(animeId))

	return (
		<div className='banner'>
			<img
				className='banner_img'
				src='https://gen.jut.su/chakranature/background/main/main.dark.jpg'
				alt=''
			/>
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
							<div className='banner_category_block'>
								<div className='banner_anime-item'>
									<img src={foundAnime.img} alt='' />
									<h1 className='banner_anime-title'>
										Смотреть {foundAnime.name}
									</h1>
								</div>
								<div className='banner_category_series'>
									{foundAnime.series.map(item => (
										<div className='banner_category_series_item'>
											<a
												href='https://jut.su/juuni-taisen/episode-1.html'
												rel='noreferrer'
												target='_blank'
											>
												{item.id} серия
											</a>
										</div>
									))}
								</div>
								<div>
									<div>
										{foundAnime.genres.map(item => (
											<p>{item}</p>
										))}
									</div>
									<div></div>
								</div>
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

export default Details
