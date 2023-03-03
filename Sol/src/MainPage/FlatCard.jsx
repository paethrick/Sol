export const FlatCard = ({ flats}) => {
    console.log(flats)
    
    return(
        <div>
            <div className="flex-nowrap mt-9 h-auto w-[17rem] pb-5
            cursor-pointer">
                <img src={flats.images[0]} alt="" 
                className="rounded-3xl h-72 w-80 object-cover"/>
                <h1 className="text-xl font-semibold pl-2">{flats.title}</h1>
                <h2 className="pl-2">{flats.accessibilityLabel}</h2>
            </div>
        </div>
    )
}