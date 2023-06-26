import { useTopArtistsQuery } from "../redux/store";
import Loader from "../components/Loader"
import { useState } from "react";
import ArtistDetails from "./ArtistDetails";
import ArtistCard from "../components/ArtistCard";
const TopArtists = () => {
    // const {data, isLoading, error} = useTopArtistsQuery('')
    // if (isLoading) return <Loader />
    // if (data) console.log(data);
    const [artists, setArtists] = useState(data)
    const renderArtists = artists?.map(artist => {
        return (
            <ArtistCard image={artist?.image} artist={artist?.artist} />
        )
    })
    return (
        <div className="h-screen overflow-y-auto flex flex-row flex-wrap justify-center gap-8 flex-grow smooth-transition hide-scrollbar">
            {renderArtists}
        </div>
    )
}

export default TopArtists;

const data = [
    {
        "artist": "Harry Styles",
        "image": "https://charts-static.billboard.com/img/2017/04/harry-styles-psx-artist-chart-rzg-180x180.jpg",
        "award": false,
        "awardsList": [],
        "rank": 1,
        "weeksAtNo1": 4,
        "lastWeek": 1,
        "change": "same",
        "peakPosition": 1,
        "weeksOnChart": 153
    },
    {
        "artist": "Bad Bunny",
        "image": "https://charts-static.billboard.com/img/2017/08/bad-bunny-c3m-artist-chart-2ep-180x180.jpg",
        "award": false,
        "awardsList": [],
        "rank": 2,
        "lastWeek": 2,
        "change": "same",
        "peakPosition": 1,
        "weeksOnChart": 218
    },
    {
        "artist": "Kendrick Lamar",
        "image": "https://charts-static.billboard.com/img/2012/11/kendrick-lamar-atc-artist-chart-xmj-180x180.jpg",
        "award": false,
        "awardsList": [],
        "rank": 3,
        "lastWeek": 3,
        "change": "same",
        "peakPosition": 1,
        "weeksOnChart": 335
    },
    {
        "artist": "Doja Cat",
        "image": "https://charts-static.billboard.com/img/2018/04/doja-cat-lm6-artist-chart-b90-180x180.jpg",
        "award": true,
        "awardsList": [
            {
                "awardName": "Gains In Performance",
                "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto\" viewBox=\"0 0 128 171.211\"><g data-name=\"Group 12\"><path data-name=\"Path 3036\" d=\"M0 87.211v-24l64-32 64 32v24l-64-32z\" fill=\"#fcee21\"></path><path data-name=\"Path 3037\" d=\"M0 127.211v-24l64-32 64 32v24l-64-32z\" fill=\"#fcee21\"></path><path data-name=\"Path 3038\" d=\"M0 167.211v-24l64-32 64 32v24l-64-32z\" fill=\"#fcee21\"></path><path data-name=\"Path 3039\" d=\"M24.526 59.211H44v112h40v-112h19.474L64 0zm51.474-8v112H52v-112H39.474L64 14.422l24.526 36.789z\" fill=\"#1a48c4\"></path></g></svg>"
            }
        ],
        "rank": 4,
        "lastWeek": 6,
        "change": "up",
        "peakPosition": 1,
        "weeksOnChart": 124
    },
    {
        "artist": "Morgan Wallen",
        "image": "https://charts-static.billboard.com/img/2018/01/morgan-wallen-nlu-artist-chart-zuy-180x180.jpg",
        "award": false,
        "awardsList": [],
        "rank": 5,
        "lastWeek": 4,
        "change": "down",
        "peakPosition": 1,
        "weeksOnChart": 169
    },
    {
        "artist": "Def Leppard",
        "image": "https://charts-static.billboard.com/img/1980/12/def-leppard-hy1-180x180.jpg",
        "award": true,
        "awardsList": [
            {
                "awardName": "Gains In Performance",
                "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto\" viewBox=\"0 0 128 171.211\"><g data-name=\"Group 12\"><path data-name=\"Path 3036\" d=\"M0 87.211v-24l64-32 64 32v24l-64-32z\" fill=\"#fcee21\"></path><path data-name=\"Path 3037\" d=\"M0 127.211v-24l64-32 64 32v24l-64-32z\" fill=\"#fcee21\"></path><path data-name=\"Path 3038\" d=\"M0 167.211v-24l64-32 64 32v24l-64-32z\" fill=\"#fcee21\"></path><path data-name=\"Path 3039\" d=\"M24.526 59.211H44v112h40v-112h19.474L64 0zm51.474-8v112H52v-112H39.474L64 14.422l24.526 36.789z\" fill=\"#1a48c4\"></path></g></svg>"
            }
        ],
        "rank": 6,
        "lastWeek": 0,
        "change": "re-entry",
        "peakPosition": 6,
        "weeksOnChart": 7
    },
    {
        "artist": "Ed Sheeran",
        "image": "https://charts-static.billboard.com/img/2012/11/ed-sheeran-w3r-artist-chart-1li-180x180.jpg",
        "award": false,
        "awardsList": [],
        "rank": 7,
        "lastWeek": 8,
        "change": "up",
        "peakPosition": 1,
        "weeksOnChart": 407
    },
    {
        "artist": "Future",
        "image": "https://charts-static.billboard.com/img/1988/03/future-f8b-180x180.jpg",
        "award": false,
        "awardsList": [],
        "rank": 8,
        "lastWeek": 5,
        "change": "down",
        "peakPosition": 1,
        "weeksOnChart": 237
    },
    {
        "artist": "Jack Harlow",
        "image": "https://charts-static.billboard.com/img/2018/01/jack-harlow-i43-artist-chart-yxg-180x180.jpg",
        "award": false,
        "awardsList": [],
        "rank": 9,
        "lastWeek": 7,
        "change": "down",
        "peakPosition": 1,
        "weeksOnChart": 95
    },
    {
        "artist": "Olivia Rodrigo",
        "image": "https://charts-static.billboard.com/img/2020/01/olivia-rodrigo-3wl-artist-chart-9ct-180x180.jpg",
        "award": true,
        "awardsList": [
            {
                "awardName": "Gains In Performance",
                "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto\" viewBox=\"0 0 128 171.211\"><g data-name=\"Group 12\"><path data-name=\"Path 3036\" d=\"M0 87.211v-24l64-32 64 32v24l-64-32z\" fill=\"#fcee21\"></path><path data-name=\"Path 3037\" d=\"M0 127.211v-24l64-32 64 32v24l-64-32z\" fill=\"#fcee21\"></path><path data-name=\"Path 3038\" d=\"M0 167.211v-24l64-32 64 32v24l-64-32z\" fill=\"#fcee21\"></path><path data-name=\"Path 3039\" d=\"M24.526 59.211H44v112h40v-112h19.474L64 0zm51.474-8v112H52v-112H39.474L64 14.422l24.526 36.789z\" fill=\"#1a48c4\"></path></g></svg>"
            }
        ],
        "rank": 10,
        "lastWeek": 15,
        "change": "up",
        "peakPosition": 1,
        "weeksOnChart": 73
    }]