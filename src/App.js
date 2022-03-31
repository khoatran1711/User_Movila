import { ToastContainer } from 'react-toastify'
import { Suspense, lazy } from 'react'
import { Footer } from './components'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

const Homepage = lazy(() => import('./pages/homepage'))

function App() {
	return (
		<Router>
			<Suspense fallback={<h1>Loading...</h1>}>
				<Switch>
					<Route component={Homepage} path='/' exact />
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
