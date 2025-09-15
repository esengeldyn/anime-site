import Header from './components/header/header/Header'
import Banner from './components/header/banner/Banner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Catalog from './animePages/catalog/Catalog'
import Main from './animePages/main/Main'
import NotFound from './animePages/NotFound/NotFound'
import Details from './animePages/details/Details'

function App() {
	return (
		<BrowserRouter className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/catalog' element={<Catalog />} />
				<Route path='/anime/:id' element={<Details />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			
		</BrowserRouter>
	)
}

export default App
