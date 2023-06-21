import { useState } from 'react'

import './App.css'
import TextInputWithFocusButton from './components/InputCounter'
import ClickCounter from './components/ClickCounter'
import ProductList from './components/Produtlist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
       <div>
        <TextInputWithFocusButton/>
        <ClickCounter/>
        <ProductList/>
       </div>
    </>
  )
}

export default App
