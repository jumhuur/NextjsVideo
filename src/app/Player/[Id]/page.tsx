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
      <MyStream VideoInfo={VideoInfo} />
    </>
  );
};

export default Player;
