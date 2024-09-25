export default function Artist ({Artist}) {
    return (
        <div className="artist-card">
            <div className="artist-image">
                <img src={Artist.image_url} alt="" />
            </div>
             <p>
                <span className="artist-name">{artists.name}</span>
                <span className="artist-country">{artists.country}</span>
                <span className="artist-country">{artists.years_active}</span>
             </p>


        </div>
    )
}

//         name: 'The Beatles',
//         photo_url: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Beatles_ad_1965_just_the_beatles_crop.jpg",
//         country: "United Kingdom",
//         years_active: "1960-1970",