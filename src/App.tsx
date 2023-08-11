import { ToastContainer } from 'react-toastify'
import GlobalStyles from './styles/GlobalStyles'
import { RoutesMain } from './routes'
import { Header } from './components/Header'

function App() {

  const teste = () => {
    console.log('testando123')
  }

  const product = 
  {name:'Miata ',description:'Lorem ipsum sla o que amet is just a language that i dont rlly know where it comes from', 
  seller:'Mazda', km:'25.000',year:'1994',price:'145.000,00', higherThanFipe:false, active:true}
  
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
