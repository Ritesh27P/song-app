// const { getChart } = require('billboard-top-100');
import { getChart } from 'billboard-top-100'

const songs = []

// chartName defaults to hot-100
// date defaults to Saturday of this week
// getChart((err, chart) => {
//   if (err) console.log(err);
//   console.log(chart);
// });

// // date defaults to Saturday of this week
// getChart('rock-digital-song-sales', (err, chart) => {
//   if (err) console.log(err);
//   console.log(chart);
// });

const topArtists = () => {
    getChart(async (err, chart) => {
        if (err) return []
        return chart.songs
      });
}

export default topArtists;