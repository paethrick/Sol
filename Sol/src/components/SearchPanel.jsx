import { useState } from "react"
import { SearchLine } from "./SearchLine"

export const SearchPanel = ({ propertyList }) => {

  const [word, setWord] = useState([1,2])

  const Add = (e) => {
    e.preventDefault()
    const here = []
    for(let k of e.target){
      here.push(k.value)
    }
    here.splice(-1)
    propertyList([here])
  }

  const raise = () => {
    setWord([...word,1])
  }

  const lower = () => {
    word.splice(-2)
    setWord(word)
    setWord([...word,1])
  }

  return(
    <div className="flex-nowrap">
      <button onClick={raise}> Plus </button>
      <br />
      <button onClick={lower}> Minus </button>
      <form action="submit" className="flex gap-2" onSubmit={Add}>
        {word ? word.map((e,i)=> <SearchLine key={i} name={i}/>) : null}
        <button type="submit"> Press </button>
      </form>
      
    </div>
  )
}