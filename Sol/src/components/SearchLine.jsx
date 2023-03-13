import { useState } from "react"

export const SearchLine = ({ addTogether, name }) => {

  const [word, setWord] = useState('')

  const Add = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    const value = e.target.value
    setWord(value)
  }

  

  return(
    <>
      <input className="bg-sky-400" type="text" name={name} onChange={handleChange}/>
    </>
  )
}