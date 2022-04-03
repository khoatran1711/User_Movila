import { ToastContainer } from 'react-toastify'
import { Suspense, lazy } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'

import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

const Homepage = lazy(() => import('./pages/homepage'))
const Roompage = lazy(() => import('./pages/roompage'))

function App() {
	return (
		<Router>
			<Suspense fallback={<h1>Loading...</h1>}>
				<Header />
				<Switch>
					<Route component={Homepage} path='/' exact />
					<Route component={Roompage} path='/rooms' exact />
				</Switch>
				<Footer />
				<ToastContainer
					position='top-right'
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
				<ToastContainer />
			</Suspense>
		</Router>
	)
}

export default App
