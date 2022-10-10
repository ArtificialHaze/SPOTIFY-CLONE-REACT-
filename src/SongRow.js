import React from "react";

const SongRow = ({ track }) => {
  return (
    <div className="songRow">
      <img
        src={track.album.images[0].url}
        alt="album track logo"
        className="songRow__album"
      />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -
          {track.album.name}
        </p>
      </div>
    </div>
  );
};

export default SongRow;
