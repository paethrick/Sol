import { useState } from "react";
import { FlatCard } from "./FlatCard";

export const MainPage = () => {
    const [flats,setFlat] = useState([])

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b339facf5amsh2d95b4cac3039a7p19abbejsnc843ac7a1f19',
        'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
      }
    };
    
    const getThis = async () => {
      const response = await fetch('https://airbnb19.p.rapidapi.com/api/v1/searchProperty?category=TAB_8225&totalRecords=30&currency=USD&adults=1', options)
      const data = await response.json()
      setFlat(data.data)
    }

    return(
      <div>
        <button onClick={getThis}>Press</button>
        <div className="flex justify-center">
        <div className="flex flex-wrap w-auto gap-x-7 justify-center mx-7">
            {flats.length>1 ? flats.map((e,i)=><FlatCard getThis={getThis} flats={flats[i]} key={i}/>) : null}
        </div>
        </div>
      </div>
    )
}