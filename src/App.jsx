import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'

const App = () => {

  return (
    <BrowserRouter>

        <NavBar/>
        <Routes>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>

    </BrowserRouter>
  )
}

export default App