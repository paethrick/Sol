import { SearchPanel } from '../components/SearchPanel'
import { useState } from 'react';

export const RoadTripPage = () => {

  const [search,setSearch] = useState([])
  const [property, setProperty] = useState([])

  // SEARCH PROPERTY BY PLACE
  const searchPropertyByPlace = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b339facf5amsh2d95b4cac3039a7p19abbejsnc843ac7a1f19',
        'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
      }
    };

    const response = await fetch(`https://airbnb19.p.rapidapi.com/api/v1/searchPropertyByPlace?id=${search.destId}&display_name=${search.destName}%2C%20${search.destId}&totalRecords=4&currency=USD&adults=1`, options)
    const data = await response.json()
    console.log(data.data)
    setProperty(data.data)
  }

  
  async function sleep() {
    return new Promise(resolve => setTimeout(resolve,3000))
  }

  async function runIt(inp){
    await sleep()
    test(inp)
  }

const test2 = () => {
  console.log(search)
}

const test = (input) => {
  input[0].map( async (elem) => {
    await sleep()
    searchDestination(input)
  }) 
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
    
      setSearch([...search,pack])
      console.log(search)
       
    

    // const response = await fetch(`https://airbnb19.p.rapidapi.com/api/v1/searchDestination?query=${input}`,options)
    // const data = await response.json()
    // const pack = {
    //   'destId' : data.data[0].id,
    //   'countryCode' : data.data[0].countryCode,
    //   'destName' : data.data[0].display_name
    // }
    // console.log(input)
    // setSearch(pack)
  }

  return(
    <div>
      <button onClick={test2}> Final </button>
      <SearchPanel searchDestination={runIt}/>
    </div>
  )
}