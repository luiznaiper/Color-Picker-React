import { useState } from 'react'
import ColorList from './components/ColorList'
import Form from './components/Form'
import Values from 'values.js'

function App() {
  const [colors, setColors] = useState(new Values('#fb8122').all(10))

  return (
    <main>
      <Form />
      <ColorList colors={colors} />
    </main>
  )
}

export default App
