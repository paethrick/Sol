
import { useLocation, useParams, Link } from 'react-router-dom'
import Sol_Picture from '/Sol_Picture.png'
import { useEffect, useState } from 'react'

export function FlatPage(){

    const [flat,setFlat] = useState()
    useEffect(()=>{
      setFlat(location)
    },[])
    const location = useLocation()
    console.log(location)
    


    return(
        <div>
            {/* Logo */}
            <div className='flex w-auto justify-center' >

            <Link to="/"><img src={Sol_Picture} alt="Sol"
                className='w-48'/></Link>
            </div>
            {/* Name */}
            <div className='flex-wrap pl-20 mb-2'>
                <h1 className='flex text-3xl'>{location.state.listingName}</h1>
                <h2 className='flex text-2xl'>{location.state.publicAddress}</h2>
            </div>
            {/* Picture Slide */}
            <div className='flex flex-nowrap justify-center '>
              <div className='flex object-cover'>
                <img className='relative' src={location.state.images[0]}/>
              </div>
              <div className='flex flex-wrap w-[45rem]'>
                {location.state.images.map((e,index)=>{
                  return index < 4 && index != 0 ? <img key={index} className='w-[22.5rem] h-[15rem] object-cover' src={e}/> : null
                })}
              </div>
            </div>
            {/* Spec */}
            <div className='flex-nowrap ml-20 mt-4'>
              <div className='flex gap-10'>
                <p className='text-xl'>{location.state.accessibilityLabel}</p>
                <p className='flex gap-1 text-mg align-middle'>&#9733; {location.state.avgRatingLocalized}</p>
              </div>
              <div className='flex text-md gap-2'>
                {location.state.listingGuestLabel} | {location.state.roomType} | {location.state.listingBedLabel} {location.state.listingBathroomLabel} 
              </div>

            </div>
            <h1>{location.state.title}</h1>
        </div>
    )
}