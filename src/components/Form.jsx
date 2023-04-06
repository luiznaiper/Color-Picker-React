import { useState } from 'react'

const Form = ({ addColor }) => {
  const [color, setColor] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    addColor(color)
  }

  const handleColor = (e) => {
    setColor(e.target.value)
  }

  return (
    <section className="container">
      <h4>Color generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input type="color" value={color} onChange={handleColor} />
        <input
          type="text"
          value={color}
          onChange={handleColor}
          placeholder="#fb8122"
        />
        <button className="btn" type="submit" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  )
}

export default Form
