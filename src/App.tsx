import { ToastContainer } from 'react-toastify'
import GlobalStyles from './styles/GlobalStyles'
import { RoutesMain } from './routes'
import { Header } from './components/Header'
import { ProductCard } from './components/ProductCard'
import { DefaultButton } from './components/DefaultButton'

function App() {

  const teste = () => {
    console.log('testando123')
  }
  
  return (
    <>

      <GlobalStyles/>
        
        <Header/>

        <DefaultButton color={'--color-brand1'} text={'Button de teste'} textcolor={'--color-grey10'} bordercolor={'--color-random1'} type={'button'} buttonFunction={teste}/>
        
        <ProductCard/>

        <RoutesMain/>
        
      <ToastContainer/>
    </>
  )
}

export default App
