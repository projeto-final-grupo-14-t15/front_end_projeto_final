import { ToastContainer } from 'react-toastify'
import GlobalStyles from './styles/GlobalStyles'
import { RoutesMain } from './routes'
import { Header } from './components/Header'
import { ProductCard } from './components/ProductCard'

function App() {
  return (
    <>

      <GlobalStyles/>
        
        <Header/>

        <ProductCard/>

        <RoutesMain/>
        
      <ToastContainer/>
    </>
  )
}

export default App
