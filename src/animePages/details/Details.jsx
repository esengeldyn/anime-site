import { links } from '../../data.js'
import { useParams } from 'react-router-dom'
const Details = () => {
	const params = useParams()
	const animeId = params.id
	const foundAnime = links.find(anime => anime.id === Number(animeId))

	return (
		<div>
			<h1>{foundAnime.name}</h1>
			<img src={foundAnime.img} alt='' />
			<p>{foundAnime.desc}</p>
		</div>
	)
}

export default Details
