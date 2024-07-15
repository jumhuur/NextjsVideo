"use client";
import { useEffect, useState } from "react";
import MyStream from "@/components/Video";
const Player = ({ params }) => {
  const { Id } = params;
  const [VideoInfo, setVideoInfo] = useState();
  const GetMedia = async () => {
    const Media = await fetch(`/api/GetVdeo/${Id}`, {
      method: "POST",
    });
    const data = await Media.json();
    if (Media.ok) {
      setVideoInfo(data && data);
      console.log("Waa Kan", data);
    }
  };

  useEffect(() => {
    GetMedia();
  }, []);

  const VideoUrl = `https://player.vdocipher.com/v2/?otp=${VideoInfo?.otp}&playbackInfo=${VideoInfo?.playbackInfo}`;
  return (
    <>
      <div className="videoCon">
        <div className="haye">
          <div className="myVideo">
            <div className="Ciwaan">
              <h2>Video Title</h2>
              <p>Video Desc</p>
            </div>
            <div className="VideoStream">
              <iframe
                src={VideoUrl}
                style={{ border: 0, width: "100%", height: "100%" }}
                allow="encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <form>
        <input type="number" name="ttl" value={300} hidden />
      </form>
    </>
  );
};

export default Player;
