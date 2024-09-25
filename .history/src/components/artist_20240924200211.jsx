export default function Artist ({Artist}) {
    return (
        <div className="artist-card">
            <div className="artist-image">
                <img src={Artist.image_url} alt="" />
            </div>
             <div className="artist-details">
                <p className="artist-country"></p>
                <p className="artist-active"></p>
             </div>


        </div>
    )
}

//         name: 'The Beatles',
//         photo_url: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Beatles_ad_1965_just_the_beatles_crop.jpg",
//         country: "United Kingdom",
//         years_active: "1960-1970",