import React from "react";
import ReactPlayer from "react-player";
import urlArr from "./Data";
function Video() {
  const [hovered, setHovered] = React.useState(false);
  const [url, setUrl] = React.useState("https://youtu.be/668nUCeBHyY");

  function handleOnPlay(id) {
    const changeUrl = urlArr.find((value) => value.id === id);

    setUrl(changeUrl.url);
  }

  const videoArrElements = urlArr.map((value) => (
    <ReactPlayer
      key={value.id}
      onPlay={() => handleOnPlay(value.id)}
      style={{
        borderRadius: " 50%",
        overflow: "hidden",
        display: "inline-block",
        marginLeft: "20px",
        display: "inline-block",
      }}
      width="100px"
      height="90px"
      url={value.url}
    />
  ));

  return (
    <div className="main">
      <h1 className="heading">Video Player</h1>
      <div onMouseEnter={() => setHovered(true)} className="div-player">
        <ReactPlayer url={url} />
      </div>
      {hovered && (
        <div className="div-moreplayer">
          <button className="btn" onClick={() => setHovered(false)}>
            X
          </button>

          {videoArrElements}
        </div>
      )}
    </div>
  );
}
export default Video;
