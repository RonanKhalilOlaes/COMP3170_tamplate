export default function Artist ({artist}) {

    
    return (
        <div>
            <div className="artist-image">
                <img src={Artist.image_url} alt="" />
            </div>
             <p>
                <h2>{artist.name}</h2>
                <span className="artist-country">{artist.country}</span>
                <span className="artist-country">{artist.years_active}</span>
             </p>


        </div>
    )
}

//         name: 'The Beatles',
//         photo_url: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Beatles_ad_1965_just_the_beatles_crop.jpg",
//         country: "United Kingdom",
//         years_active: "1960-1970",