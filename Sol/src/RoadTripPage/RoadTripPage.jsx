import { SearchPanel } from '../components/SearchPanel'
import { useState } from 'react';
import { PropertyCard } from '../MainPage/PropertyCard';

export const RoadTripPage = () => {

  const [search,setSearch] = useState([])
  const [toggle, setToggle] = useState(false)
  const [property, setProperty] = useState([])

  const printOut = () => {
    setToggle(true)
  }

  let otherLength = 0
  let theLength = 0
  const propertyGroup = []

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
    otherLength+=1
    if(otherLength == theLength){
      printOut()
    }
  }

  const startSearch = (input) => {
    const payload = input[0]
    theLength = payload.length
    for(let i=0; i<payload.length; i++) {
      setTimeout(()=>{
        searchDestination(payload[i],payload.length)
      },i * 1500);
    }
  }

  // SEARCH DESTINATION
  const searchDestination = async (input, number) => {
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
    
      //setSearch(elem => [...elem,pack])
      
      propertyGroup.push(pack)
      propertyGroup.length == number ? setTimeout(()=>{propertyDispenser()},1500) : null
    }

    const propertyDispenser = () => {
        for(let i=0; i<propertyGroup.length; i++) {
          setTimeout(()=>{
            searchPropertyByPlace(propertyGroup[i])
          },i * 1500);
        }
      }

      {/* {toggle ? property.map((elem,i) => elem
              .map((e,i)=><PropertyCard property={property[i]} index={i} key={i}/>)): null} */}
      

  return(
    <div>
    <div>
      <SearchPanel propertyList={startSearch}/>
    </div>
    <div className="flex justify-center">
        <div className="flex flex-wrap w-auto gap-x-7 justify-center mx-7">
            { toggle ? property.map((e,ind)=> e.map((k,i) =><PropertyCard property={property.at(ind)[i]} index={i} key={i}/>)): null}
        </div>
        </div>
    </div>
  )
}