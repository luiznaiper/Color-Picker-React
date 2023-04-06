import { useState } from 'react'
import ColorList from './components/ColorList'
import Form from './components/Form'
import Values from 'values.js'
import { ToastContainer, toast } from 'react-toastify'

function App() {
  const [colors, setColors] = useState(new Values('#fb8122').all(5))

  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(5)
      setColors(newColors)
    } catch (error) {
      console.log(error.message)
      toast.error(error.message)
    }
  }

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  )
}

export default App
