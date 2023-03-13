import { SearchPanel } from '../components/SearchPanel'
import { useState } from 'react';
import { PropertyCard } from '../MainPage/PropertyCard';

export const RoadTripPage = () => {

  const [search,setSearch] = useState(false)
  const [property, setProperty] = useState([])

  // SEARCH PROPERTY BY PLACE
  const searchPropertyByPlace = async (input) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b339facf5amsh2d95b4cac3039a7p19abbejsnc843ac7a1f19',
        'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
      }
    };

    const response = await fetch(`https://airbnb19.p.rapidapi.com/api/v1/searchPropertyByPlace?id=${input.destId}&display_name=${input.destName}%2C%20${input.destId}&totalRecords=4&currency=USD&adults=1`, options)
    const data = await response.json()
    console.log(data.data)
    const something = data.data
    setProperty(oldArray =>[...oldArray,something])
    console.log(property)
  }

const printOut = () => {
  console.log(property)
}

const startSearch = (input) => {
  const tryThis = input[0]
  for(let i=0; i<tryThis.length; i++) {
    setTimeout(()=>{
      searchDestination(tryThis[i])
    },i * 4000);
  }
}


  // SEARCH DESTINATION
  const searchDestination = async (input) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b339facf5amsh2d95b4cac3039a7p19abbejsnc843ac7a1f19',
        'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
      }
    };

    
      console.log(input)
      const response = await fetch(`https://airbnb19.p.rapidapi.com/api/v1/searchDestination?query=${input}`,options)
      const data = await response.json()
      const pack = {
        'destId' : data.data[0].id,
        'countryCode' : data.data[0].countryCode,
        'destName' : data.data[0].display_name
      }
    
      //setSearch([...search,pack])
      setTimeout(()=>{
        searchPropertyByPlace(pack)
      },6000)
      
  }

  return(
    <div>
    <div>
      <button onClick={printOut}> Print </button>
      <SearchPanel propertyList={startSearch}/>
    </div>
    <div className="flex justify-center">
        <div className="flex flex-wrap w-auto gap-x-7 justify-center mx-7">
            {search ? property[0].map((e,i)=><PropertyCard property={property[i]} index={i} key={i}/>) : null}
        </div>
        </div>
    </div>
  )
}