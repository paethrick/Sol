import { useState } from "react"

export const FlatCard = ({ flats}) => {

    let [currentIndex,setCurrentIndex] = useState(0)

    

    const goToPrevious = () => {
        let newIndex = currentIndex != 0 ? currentIndex = currentIndex - 1  : flats.images.length-1
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        let newIndex = currentIndex != flats.images.length-1 ? currentIndex = currentIndex + 1  : 0
        setCurrentIndex(newIndex)
    }
    
    return(
        <div>
            <div className="flex-nowrap mt-9 h-auto w-[17rem] pb-5
            cursor-pointer">
                <div className="relative">
                    <button className="flex place-items-center justify-center text-5xl absolute hover:bg-gray-300 hover:text-gray-700 text-white rounded-3xl
                    mt-28 pb-3 pr-2 h-10 w-10 left-1 ease-in duration-200 z-10"
                    onClick={goToPrevious}>&#x1F890;</button>
                    <button className="flex place-items-center justify-center text-5xl absolute hover:bg-gray-300 hover:text-gray-700 text-white rounded-3xl
                    mt-28 pb-3 pl-1.5 h-10 w-10 right-1 ease-in duration-200 z-10"
                    onClick={goToNext}>&#x1F892;</button>
                    <ul>
                        <li><img src={flats.images[currentIndex]} alt="" 
                        className="rounded-3xl h-72 w-80 object-cover "/></li>
                    </ul>
                </div>
                <h1 className="text-xl font-semibold pl-2">{flats.title}</h1>
                <h2 className="pl-2">{flats.accessibilityLabel}</h2>
            </div>
        </div>
    )
}