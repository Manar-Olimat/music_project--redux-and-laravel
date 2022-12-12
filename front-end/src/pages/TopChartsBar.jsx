import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs, SongCard } from "../components";
import { Reviews } from "../components/Reviews";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from "../redux/services/shazamCore";
import { logo } from "../assets";

const SongDetails = (fav) => {
  const dispatch = useDispatch();
  const artistId=156488786;
  const songid = Object.values(fav);

  const { activeSong, isPlaying } = useSelector((state) => state.player);
  console.log(Object.values(fav));
  // console.log(artistId);
  const {
    data,
    isFetching: isFetchinRelatedSongs,
    error,
  } = useGetSongRelatedQuery({ songid });
  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery({ songid });

  if (isFetchingSongDetails && isFetchinRelatedSongs)
    return <Loader title="Searching song details" />;

  console.log(songData);

  if (error) return <Error />;

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  return (
    <div className="flex flex-col">
      {/* <DetailsHeader artistId={artistId} songData={songData} /> */}

      <div className="mb-10">
        {songData?
        //  <h2 className="text-white text-3xl font-bold">{songData['title']}</h2>
        <SongCard 
        key={songData['key']}
        song={songData}
        isPlaying={isPlaying}
        activeSong={activeSong}
        // data={songData}
        />
         :null}
        
{/* 
        <div className="mt-5">
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1]?.text.map((line, i) => (
              <p
                key={`lyrics-${line}-${i}`}
                className="text-gray-400 text-base my-1"
              >
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">
              Sorry, No lyrics found!
            </p>
          )}
        </div> */}
      </div>
      {/* <div className="text-white">
        <Reviews songid={songid} />
      </div>
      <RelatedSongs
        data={data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      /> */}
    </div>
  );
};

export default SongDetails;





































// import React from 'react';
// import { useSelector } from 'react-redux';
// import {useGetSongDetailsQuery} from '../redux/services/shazamCore';
// import { Error, Loader, SongBar, SongCard } from '../components';
// import { useGetTopChartsQuery } from '../redux/services/shazamCore';
// // import { type } from 'os';

// const TopCharts = ({fav}) => {
//   console.log(fav['song_id']);

//   const songid = 53510886;

//   const { data: songData, isFetching: isFetchingSongDetails, error } = useGetSongDetailsQuery({songid});
//   const { activeSong, isPlaying } = useSelector((state) => state.player);
//   // console.log(songData['key']);
//   console.log(Object.keys(songData)[2]);
//   if (isFetchingSongDetails) return <Loader title="Loading Top Charts" />;

//   if (error) return <Error />;

//   return (
//     <div className="flex flex-col">
//       {/* <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Discover Top Charts</h2> */}

//       <div className="flex flex-wrap sm:justify-start justify-center gap-8">
//       {/* <SongBar
//        key={fav['song_id']}
//        song={songData['title']}
//        isPlaying={isPlaying}
//        activeSong={activeSong}
//        data={songData}
//        /> */}
//         {/* {songData.map((song, i) => (
//        <SongBar
//        key={song.key}
//        song={song}
//        isPlaying={isPlaying}
//        activeSong={activeSong}
//        data={data}
//        i={i}/>
//         ))} */}
//       </div>
//     </div>
//   );
// };

// export default TopCharts;
