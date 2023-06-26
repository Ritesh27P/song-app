import { useEffect, useState } from "react";
import { genres } from "../assets/constants";
import { SongCard} from "../components";
import { useDispatch, useSelector } from "react-redux";
import getGenreSongs from "../services/getGenreSongs";


const Discover = () => {
    const dispatch = useDispatch();
    const [songs, setSongs] = useState(data)
    const [Genre, setGenre] = useState('')
    const { activeSong, isPlaying} = useSelector(state => state.player)
    
    useEffect(() => {
      window.scrollTo({
        top: 0,
        bottom: 0,
        behavior: 'smooth',
    });
    }, [])

    const scrollTop = () => {
      document.getElementById('songList').scrollTo(0,0)

      console.log(document.getElementById('songs'));

    }

    // getGenreSongs('pop');
    const handleChangeGenre = async e => {
        setGenre(e.target.value)
        const track = await getGenreSongs('pop')
        setSongs(track)
    }
    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center w-full sm:flex-row flex-col mt-4 mb-6">
                <h2 className="font-bold text-white text-left text-3xl" id="songs">Discover {Genre}</h2>
                <select
                    onChange={e=> handleChangeGenre(e)} 
                    className="bg-[#A68DAD] text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
                >
                    {genres.map( genre => <option key={genre.value} value={genre.title} >{genre.title}</option>)}
                </select>
            </div>

            <div 
                // className="flex flex-wrap justify-center gap-8"
                className="h-screen overflow-y-auto flex flex-row flex-wrap justify-center gap-8 flex-grow smooth-transition hide-scrollbar"
                id="songList"
                >
                {songs?.chart?.entries?.map( (song, i) => <SongCard isPlaying={isPlaying} activeSong={activeSong} key={i} title={song?.title} artist={song?.artist} cover={song?.cover} i={i} />)}
            </div>
            {/* <button className="mt-8 font-bold text-white" onClick={scrollTop}><a href="#songs">Top</a></button> */}
        </div>
    );
}

export default Discover;

const data = {
    chart: {
      entries: [
        {
          "rank": 1,
          "title": "Unholy",
          "artist": "Sam Smith & Kim Petras",
          "cover": "https://charts-static.billboard.com/img/2022/10/sam-smith-jw8-unholy-dry-180x180.jpg",
          "position": {
            "positionLastWeek": null,
            "peakPosition": 1,
            "weeksOnChart": 1
          }
        },
        {
          "rank": 2,
          "title": "I'm Good (Blue)",
          "artist": "David Guetta & Bebe Rexha",
          "cover": "https://charts-static.billboard.com/img/2022/09/david-guetta-ruw-imgoodblue-rkt-180x180.jpg",
          "position": {
            "positionLastWeek": 3,
            "peakPosition": 2,
            "weeksOnChart": 5
          }
        },
        {
          "rank": 3,
          "title": "As It Was",
          "artist": "Harry Styles",
          "cover": "https://charts-static.billboard.com/img/2022/04/harry-styles-6jk-asitwas-frn-180x180.jpg",
          "position": {
            "positionLastWeek": 4,
            "peakPosition": 1,
            "weeksOnChart": 26
          }
        },
        {
            "rank": 4,
            "title": "Shut Down",
            "artist": "BLACKPINK",
            "cover": "https://charts-static.billboard.com/img/2016/08/blackpink-l5z-180x180.jpg",
            "position": {
              "positionLastWeek": 1,
              "peakPosition": 1,
              "weeksOnChart": 2
            }
          },
          {
            "rank": 5,
            "title": "I Ain't Worried",
            "artist": "OneRepublic",
            "cover": "https://charts-static.billboard.com/img/2022/06/onerepublic-m2z-i-aint-worried-6ds-180x180.jpg",
            "position": {
              "positionLastWeek": 6,
              "peakPosition": 5,
              "weeksOnChart": 17
            }
          },
          {
            "rank": 6,
            "title": "Under The Influence",
            "artist": "Chris Brown",
            "cover": "https://charts-static.billboard.com/img/2019/10/chris-brown-94g-undertheinfluence-eql-180x180.jpg",
            "position": {
              "positionLastWeek": 9,
              "peakPosition": 6,
              "weeksOnChart": 10
            }
          },
          {
            "rank": 7,
            "title": "Me Porto Bonito",
            "artist": "Bad Bunny & Chencho Corleone",
            "cover": "https://charts-static.billboard.com/img/2016/10/bad-bunny-c3m-180x180.jpg",
            "position": {
              "positionLastWeek": 5,
              "peakPosition": 2,
              "weeksOnChart": 21
            }
          },
          {
            "rank": 8,
            "title": "Bzrp Music Sessions, Vol. 52",
            "artist": "Bizarrap & Quevedo",
            "cover": "https://charts-static.billboard.com/img/2022/07/bizarrap-rsm-bzrp-music-sessions-vol-52-6r7-180x180.jpg",
            "position": {
              "positionLastWeek": 7,
              "peakPosition": 1,
              "weeksOnChart": 12
            }
          },
          {
            "rank": 9,
            "title": "Titi Me Pregunto",
            "artist": "Bad Bunny",
            "cover": "https://charts-static.billboard.com/img/2016/10/bad-bunny-c3m-180x180.jpg",
            "position": {
              "positionLastWeek": 8,
              "peakPosition": 4,
              "weeksOnChart": 21
            }
          },
          {
            "rank": 10,
            "title": "Pink Venom",
            "artist": "BLACKPINK",
            "cover": "https://charts-static.billboard.com/img/2022/09/blackpink-l5z-pinkvenom-t5p-180x180.jpg",
            "position": {
              "positionLastWeek": 2,
              "peakPosition": 1,
              "weeksOnChart": 6
            }
          },
          {
            "rank": 11,
            "title": "La Bachata",
            "artist": "Manuel Turizo",
            "cover": "https://charts-static.billboard.com/img/2022/06/manuel-turizo-7zu-labachata-1l6-180x180.jpg",
            "position": {
              "positionLastWeek": 11,
              "peakPosition": 10,
              "weeksOnChart": 12
            }
          },
          {
            "rank": 12,
            "title": "Super Freaky Girl",
            "artist": "Nicki Minaj",
            "cover": "https://charts-static.billboard.com/img/2022/08/nicki-minaj-721-superfreakygirl-y5e-180x180.jpg",
            "position": {
              "positionLastWeek": 10,
              "peakPosition": 5,
              "weeksOnChart": 7
            }
          },
          {
            "rank": 13,
            "title": "Calm Down",
            "artist": "Rema & Selena Gomez",
            "cover": "https://charts-static.billboard.com/img/2022/04/rema-000-calmdown-55o-180x180.jpg",
            "position": {
              "positionLastWeek": 13,
              "peakPosition": 12,
              "weeksOnChart": 13
            }
          },
          {
            "rank": 14,
            "title": "Bad Habit",
            "artist": "Steve Lacy",
            "cover": "https://charts-static.billboard.com/img/2022/07/steve-lacy-d2o-badhabit-9nj-180x180.jpg",
            "position": {
              "positionLastWeek": 14,
              "peakPosition": 10,
              "weeksOnChart": 12
            }
          },
          {
            "rank": 15,
            "title": "Despecha",
            "artist": "Rosalia",
            "cover": "https://charts-static.billboard.com/img/2022/08/rosalia-88x-despecha-hsd-180x180.jpg",
            "position": {
              "positionLastWeek": 12,
              "peakPosition": 6,
              "weeksOnChart": 9
            }
          },
          {
            "rank": 16,
            "title": "Efecto",
            "artist": "Bad Bunny",
            "cover": "https://charts-static.billboard.com/img/2016/10/bad-bunny-c3m-180x180.jpg",
            "position": {
              "positionLastWeek": 15,
              "peakPosition": 7,
              "weeksOnChart": 21
            }
          },
          {
            "rank": 17,
            "title": "Another Love",
            "artist": "Tom Odell",
            "cover": "https://charts-static.billboard.com/img/2013/01/tom-odell-qwt-180x180.jpg",
            "position": {
              "positionLastWeek": 19,
              "peakPosition": 17,
              "weeksOnChart": 74
            }
          },
          {
            "rank": 18,
            "title": "Heat Waves",
            "artist": "Glass Animals",
            "cover": "https://charts-static.billboard.com/img/2020/07/glass-animals-rtd-heat-waves-1lv-180x180.jpg",
            "position": {
              "positionLastWeek": 17,
              "peakPosition": 1,
              "weeksOnChart": 91
            }
          },
          {
            "rank": 19,
            "title": "Ojitos Lindos",
            "artist": "Bad Bunny & Bomba Estereo",
            "cover": "https://charts-static.billboard.com/img/2016/10/bad-bunny-c3m-180x180.jpg",
            "position": {
              "positionLastWeek": 20,
              "peakPosition": 4,
              "weeksOnChart": 21
            }
          },
          {
            "rank": 20,
            "title": "Snap",
            "artist": "Rosa Linn",
            "cover": "https://charts-static.billboard.com/img/2022/07/rosalinn-rc0-snap-c77-180x180.jpg",
            "position": {
              "positionLastWeek": 18,
              "peakPosition": 18,
              "weeksOnChart": 12
            }
          },
          {
            "rank": 21,
            "title": "Star Walkin' (League Of Legends Worlds Anthem)",
            "artist": "Lil Nas X",
            "cover": "https://charts-static.billboard.com/img/2022/10/lil-nas-x-qv4-starwalkinleagueoflegendsworldsanthem-s28-180x180.jpg",
            "position": {
              "positionLastWeek": null,
              "peakPosition": 21,
              "weeksOnChart": 1
            }
          },
          {
            "rank": 22,
            "title": "Moscow Mule",
            "artist": "Bad Bunny",
            "cover": "https://charts-static.billboard.com/img/2016/10/bad-bunny-c3m-180x180.jpg",
            "position": {
              "positionLastWeek": 22,
              "peakPosition": 2,
              "weeksOnChart": 21
            }
          },
          {
            "rank": 23,
            "title": "Save Your Tears",
            "artist": "The Weeknd & Ariana Grande",
            "cover": "https://charts-static.billboard.com/img/2020/12/the-weeknd-jlk-saveyourtears-e5b-180x180.jpg",
            "position": {
              "positionLastWeek": 23,
              "peakPosition": 1,
              "weeksOnChart": 91
            }
          },
          {
            "rank": 24,
            "title": "Cuff It",
            "artist": "Beyonce",
            "cover": "https://charts-static.billboard.com/img/2022/08/beyonce-0na-cuffit-5y5-180x180.jpg",
            "position": {
              "positionLastWeek": 55,
              "peakPosition": 13,
              "weeksOnChart": 9
            }
          },
          {
            "rank": 25,
            "title": "Running Up That Hill (A Deal With God)",
            "artist": "Kate Bush",
            "cover": "https://charts-static.billboard.com/img/2022/06/kate-bush-qv2-running-up-that-hill-a-deal-with-god-cfi-180x180.jpg",
            "position": {
              "positionLastWeek": 21,
              "peakPosition": 1,
              "weeksOnChart": 18
            }
          },
          {
            "rank": 26,
            "title": "Neverita",
            "artist": "Bad Bunny",
            "cover": "https://charts-static.billboard.com/img/2016/10/bad-bunny-c3m-180x180.jpg",
            "position": {
              "positionLastWeek": 24,
              "peakPosition": 16,
              "weeksOnChart": 21
            }
          },
          {
            "rank": 27,
            "title": "Sunroof",
            "artist": "Nicky Youre & dazy",
            "cover": "https://charts-static.billboard.com/img/2022/04/nicky-youre-alv-sunroof-n0r-180x180.jpg",
            "position": {
              "positionLastWeek": 26,
              "peakPosition": 26,
              "weeksOnChart": 19
            }
          },
          {
            "rank": 28,
            "title": "I Like You (A Happier Song)",
            "artist": "Post Malone Featuring Doja Cat",
            "cover": "https://charts-static.billboard.com/img/2015/06/post-malone-8b5-180x180.jpg",
            "position": {
              "positionLastWeek": 29,
              "peakPosition": 7,
              "weeksOnChart": 17
            }
          },
          {
            "rank": 29,
            "title": "Cold Heart (PNAU Remix)",
            "artist": "Elton John & Dua Lipa",
            "cover": "https://charts-static.billboard.com/img/2021/08/elton-john-m6x-cold-heart-pnau-remix-8pz-180x180.jpg",
            "position": {
              "positionLastWeek": 28,
              "peakPosition": 3,
              "weeksOnChart": 59
            }
          },
          {
            "rank": 30,
            "title": "Glimpse Of Us",
            "artist": "Joji",
            "cover": "https://charts-static.billboard.com/img/2022/06/joji-77h-glimpse-of-us-xra-180x180.jpg",
            "position": {
              "positionLastWeek": 25,
              "peakPosition": 2,
              "weeksOnChart": 16
            }
          },
          {
            "rank": 31,
            "title": "Stay",
            "artist": "The Kid LAROI & Justin Bieber",
            "cover": "https://charts-static.billboard.com/img/2021/07/the-kid-laroi-qev-stay-vsd-180x180.jpg",
            "position": {
              "positionLastWeek": 32,
              "peakPosition": 1,
              "weeksOnChart": 64
            }
          },
          {
            "rank": 32,
            "title": "Hold Me Closer",
            "artist": "Elton John & Britney Spears",
            "cover": "https://charts-static.billboard.com/img/2022/09/elton-john-m6x-holdmecloser-cos-180x180.jpg",
            "position": {
              "positionLastWeek": 30,
              "peakPosition": 6,
              "weeksOnChart": 5
            }
          },
          {
            "rank": 33,
            "title": "Provenza",
            "artist": "Karol G",
            "cover": "https://charts-static.billboard.com/img/2022/04/karol-g-7vn-provenza-wah-180x180.jpg",
            "position": {
              "positionLastWeek": 31,
              "peakPosition": 6,
              "weeksOnChart": 23
            }
          },
          {
            "rank": 34,
            "title": "Sweater Weather",
            "artist": "The Neighbourhood",
            "cover": "https://charts-static.billboard.com/img/2013/03/the-neighbourhood-slc-sweaterweather-ft8-180x180.jpg",
            "position": {
              "positionLastWeek": 40,
              "peakPosition": 34,
              "weeksOnChart": 105
            }
          },
          {
            "rank": 35,
            "title": "About Damn Time",
            "artist": "Lizzo",
            "cover": "https://charts-static.billboard.com/img/2022/04/lizzo-o9x-about-damn-time-k73-180x180.jpg",
            "position": {
              "positionLastWeek": 35,
              "peakPosition": 6,
              "weeksOnChart": 24
            }
          },
          {
            "rank": 36,
            "title": "Late Night Talking",
            "artist": "Harry Styles",
            "cover": "https://charts-static.billboard.com/img/2022/06/harry-styles-6jk-latenighttalking-nw1-180x180.jpg",
            "position": {
              "positionLastWeek": 39,
              "peakPosition": 2,
              "weeksOnChart": 19
            }
          },
          {
            "rank": 37,
            "title": "Die For You",
            "artist": "The Weeknd & Ariana Grande",
            "cover": "https://charts-static.billboard.com/img/2016/12/the-weeknd-jlk-dieforyou-89b-180x180.jpg",
            "position": {
              "positionLastWeek": 42,
              "peakPosition": 37,
              "weeksOnChart": 30
            }
          },
          {
            "rank": 38,
            "title": "Levitating",
            "artist": "Dua Lipa",
            "cover": "https://charts-static.billboard.com/img/2020/04/dua-lipa-eqf-levitating-tr9-180x180.jpg",
            "position": {
              "positionLastWeek": 36,
              "peakPosition": 2,
              "weeksOnChart": 104
            }
          },
          {
            "rank": 39,
            "title": "Tomorrow 2",
            "artist": "GloRilla & Cardi B",
            "cover": "https://charts-static.billboard.com/img/2022/10/glorilla-bn2-tomorrow2-4zo-180x180.jpg",
            "position": {
              "positionLastWeek": null,
              "peakPosition": 39,
              "weeksOnChart": 1
            }
          },
          {
            "rank": 40,
            "title": "Ferrari",
            "artist": "James Hype & Miggy Dela Rosa",
            "cover": "https://charts-static.billboard.com/img/2022/04/james-hype-000-ferrari-vua-180x180.jpg",
            "position": {
              "positionLastWeek": 33,
              "peakPosition": 25,
              "weeksOnChart": 15
            }
          },
          {
            "rank": 41,
            "title": "Jimmy Cooks",
            "artist": "Drake Featuring 21 Savage",
            "cover": "https://charts-static.billboard.com/img/2009/04/drake-04g-180x180.jpg",
            "position": {
              "positionLastWeek": 37,
              "peakPosition": 3,
              "weeksOnChart": 15
            }
          },
          {
            "rank": 42,
            "title": "Blinding Lights",
            "artist": "The Weeknd",
            "cover": "https://charts-static.billboard.com/img/2019/12/the-weeknd-jlk-blindinglights-q48-180x180.jpg",
            "position": {
              "positionLastWeek": 45,
              "peakPosition": 2,
              "weeksOnChart": 108
            }
          },
          {
            "rank": 43,
            "title": "Bones",
            "artist": "Imagine Dragons",
            "cover": "https://charts-static.billboard.com/img/2022/03/imagine-dragons-ud7-bones-8cg-180x180.jpg",
            "position": {
              "positionLastWeek": 48,
              "peakPosition": 43,
              "weeksOnChart": 29
            }
          },
          {
            "rank": 44,
            "title": "Shivers",
            "artist": "Ed Sheeran",
            "cover": "https://charts-static.billboard.com/img/2021/09/ed-sheeran-w3r-shivers-9kr-180x180.jpg",
            "position": {
              "positionLastWeek": 41,
              "peakPosition": 3,
              "weeksOnChart": 55
            }
          },
          {
            "rank": 45,
            "title": "Gangsta's Paradise",
            "artist": "Coolio Featuring L.V.",
            "cover": "https://charts-static.billboard.com/img/2010/11/coolio-i15-gangstasparadise-nqq-180x180.jpg",
            "position": {
              "positionLastWeek": 149,
              "peakPosition": 45,
              "weeksOnChart": 63
            }
          },
          {
            "rank": 46,
            "title": "Gatubela",
            "artist": "Karol G x Maldy",
            "cover": "https://charts-static.billboard.com/img/2022/09/karol-g-7vn-gatubela-p1y-180x180.jpg",
            "position": {
              "positionLastWeek": 38,
              "peakPosition": 23,
              "weeksOnChart": 5
            }
          },
          {
            "rank": 47,
            "title": "B.O.T.A. (Baddest Of Them All)",
            "artist": "Eliza Rose & Interplanetary Criminal",
            "cover": "https://charts-static.billboard.com/img/2022/08/elizarose-000-botabaddestofthemall-ahs-180x180.jpg",
            "position": {
              "positionLastWeek": 50,
              "peakPosition": 47,
              "weeksOnChart": 5
            }
          },
          {
            "rank": 48,
            "title": "Left And Right",
            "artist": "Charlie Puth Featuring Jung Kook",
            "cover": "https://charts-static.billboard.com/img/2022/07/charlie-puth-9ci-leftandright-z0u-180x180.jpg",
            "position": {
              "positionLastWeek": 44,
              "peakPosition": 5,
              "weeksOnChart": 14
            }
          },
          {
            "rank": 49,
            "title": "Something In The Orange",
            "artist": "Zach Bryan",
            "cover": "https://charts-static.billboard.com/img/2022/05/zach-bryan-cfd-something-in-the-orange-8ma-180x180.jpg",
            "position": {
              "positionLastWeek": 49,
              "peakPosition": 49,
              "weeksOnChart": 22
            }
          },
          {
            "rank": 50,
            "title": "Romantic Homicide",
            "artist": "d4vd",
            "cover": "https://charts-static.billboard.com/img/2022/09/d4vd-7p1-romantichomicide-i6e-180x180.jpg",
            "position": {
              "positionLastWeek": 56,
              "peakPosition": 50,
              "weeksOnChart": 4
            }
          },
      ]
    }
}