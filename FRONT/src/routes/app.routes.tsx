import { Home } from '../pages/Home'
import { Jobs } from '../pages/Jobs'
import { Routes, Route } from 'react-router-dom'
import { SignUp } from '../pages/SignUp'

export function AppRoutes() {
	return (
		<Routes>
		    <Route path="/" element={<Home/>}/>
            <Route path="/jobs" element={<Jobs/>}/>
			<Route path="/signup" element={<SignUp/>}/>
		</Routes>
    )
}