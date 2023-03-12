import { useState,useEffect } from "react";
import { FlatCard } from "./FlatCard";
import { NavBar } from "../components/NavBar";
import Sol_Picture from '/Sol_Picture.png'
import { SearchBar } from "../components/SearchBar";
import { Link } from "react-router-dom";


export const MainPage = () => {
    const [flats, setFlat] = useState([])
    const [search, setSearch] = useState([])

    useEffect(()=>{
      if(flats.length<1){
        starter()
      }
      console.log('fire once')
    },[])

    const starter = async () => {

      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'b339facf5amsh2d95b4cac3039a7p19abbejsnc843ac7a1f19',
		      'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
        }
      };

      const response = await fetch(`https://airbnb19.p.rapidapi.com/api/v1/searchProperty?category=TAB_8225&totalRecords=10&currency=USD&adults=1`, options)
      const data = await response.json()
      setFlat(data.data)
    }
    
    const getFlats = async () => {

      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'b339facf5amsh2d95b4cac3039a7p19abbejsnc843ac7a1f19',
          'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
        }
      };

      const response = await fetch(`https://airbnb19.p.rapidapi.com/api/v1/searchPropertyByPlace?id=${search.destId}&display_name=${search.destName}%2C%20${search.destId}&totalRecords=18&currency=USD&adults=1`, options)
      const data = await response.json()
      setFlat(data.data)
    }

    

    const searchDestination = async (input) => {

      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'b339facf5amsh2d95b4cac3039a7p19abbejsnc843ac7a1f19',
          'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
        }
      };

      const response = await fetch(`https://airbnb19.p.rapidapi.com/api/v1/searchDestination?query=${input}`,options)
      const data = await response.json()
      const pack = {
        'destId' : data.data[0].id,
        'countryCode' : data.data[0].countryCode,
        'destName' : data.data[0].display_name
      }
      setSearch(pack)
      getFlats() 
    }

    return(
      <div>
        <button onClick={getFlats}>Press</button>
        <div className="flex justify-between">
          {/* Logo */}
          <div>
                  <img src={Sol_Picture} alt="Sol"
                  className='w-24'/>
          </div>
          <SearchBar searchDestination={searchDestination}/>
          <p></p>
        </div>
        <NavBar />
        <button onClick={getThis}>Press</button>
        <div className="flex justify-center">
        <div className="flex flex-wrap w-auto gap-x-7 justify-center mx-7">
            {flats.length>1 ? flats.map((e,i)=><FlatCard flats={flats[i]}/>) : null}
        </div>
        </div>
      </div>
    )
}