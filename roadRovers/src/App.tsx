import { ToastContainer } from 'react-toastify'
import GlobalStyles from './styles/GlobalStyles'
import { RoutesMain } from './routes'

function App() {
  return (
    <>
      <GlobalStyles/>
        <RoutesMain/>
      <ToastContainer/>
    </>
  )
}

export default App
