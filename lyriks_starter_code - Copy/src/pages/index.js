import Discover from './Discover';
import Discover_copy from './Discover_copy';
import TopArtists from './TopArtists';
import ArtistDetails from './ArtistDetails';
import SongDetails from './SongDetails';
import Search from './Search';
import TopCharts from './TopCharts';
import AroundYou from './AroundYou';


export {
  Discover,
  Search,
  TopArtists,
  ArtistDetails,
  SongDetails,
  TopCharts,
  AroundYou,
  Discover_copy,
};
/*
const pool=createPool({
  host:"localhost",
  user:"root",
  password:"password",
  connectionLimit:10,
  insecureAuth : true
})
pool.query(`select * from hollywood.film`,(err,res)=>{
  if(err)return console.log(err);
  else setMusic(res);
})*/
