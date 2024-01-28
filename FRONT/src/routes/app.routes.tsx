import { Home } from '../pages/Home'
import { Jobs } from '../pages/Jobs'
import { NewJob } from '../pages/NewJob'
import { Routes, Route } from 'react-router-dom'

export function AppRoutes() {
	return (
		<Routes>
		    <Route path="/" element={<Home/>}/>
            <Route path="/vagas" element={<Jobs/>}/>
			<Route path="/divulgarvaga" element={<NewJob/>}/>
		</Routes>
    )
}