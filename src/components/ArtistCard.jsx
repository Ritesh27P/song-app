import { Link } from "react-router-dom";

const ArtistCard = ({image, artist}) => {

    return (
      <div className="flex w-[250px] flex-col p-4 animate-slideup rounded-lg cursor-pointer mt-4">
          <Link to={`/artists/${artist}`}>
              <div className="relative group w-full h-56">
                  <img src={image} alt="song_img" className="rounded-full h-56"/>
              </div>
            
              <div className="flex flex-col mt-4">
                      <p className="font-semibold text-lg text-white truncate text-center">
                              {artist}
                      </p>
                      
              </div>

          </Link>
      </div>
    )
};

export default ArtistCard;
