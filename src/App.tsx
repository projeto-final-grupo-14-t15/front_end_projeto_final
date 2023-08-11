import { ToastContainer } from 'react-toastify'
import GlobalStyles from './styles/GlobalStyles'
import { RoutesMain } from './routes'
import { Header } from './components/Header'

function App() {

  return (
    <>

      <GlobalStyles/>
        
        <Header/>
        
        <RoutesMain/>
        
      <ToastContainer/>
    </>
  )
}

export default App
