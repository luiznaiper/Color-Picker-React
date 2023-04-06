import { useState } from 'react'
import ColorList from './components/ColorList'
import Form from './components/Form'
import Values from 'values.js'
import { ToastContainer, toast } from 'react-toastify'

function App() {
  const [colors, setColors] = useState(new Values('#fb8122').all(10))

  return (
    <main>
      <Form />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  )
}

export default App
