"use client";
// import Video from "next-video";
// import Player from "next-video/player";
import { useEffect, useState } from "react";

// import Mymedia from "../../videos/lessonone.mp4";
const MyStream = () => {
  // const [Votp, setVotp] = useState(null);
  // const [VId, setVId] = useState(null);
  // const [otp, setOtp] = useState("");
  // const [playbackInfo, setPlaybackInfo] = useState("");

  // useEffect(() => {
  //   // Badalkaan waxay u baahan tahay inaad beddesho API-key-gaaga
  //   fetch(
  //     "https://dev.vdocipher.com/api/videos/1234567890/3f7b315eeb824f6cb4552e692b437345/otp",
  //     {
  //       method: "POST",
  //       headers: {
  //         Authorization: `ySuAQeGAEmQx5ECKQ1WcbMk1H2Kqa5ZXerOXT6bOvnl5HskLZtEZAwGrc7S2XqUb`, // Bedel "YOUR_API_SECRET" adoo isticmaalaya API secret kaaga saxda ah
  //         "Content-Type": "application/json",
  //       },
  //       body: { ttl: 300 },
  //       json: true,
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setOtp(data.otp);
  //       setPlaybackInfo(data.playbackInfo);
  //     })
  //     .catch((error) => console.error("Error:", error));
  // }, []);

  // console.log(playbackInfo);
  // // const GetVideo = async () => {
  // //   const response = await fetch("https://api.vdocipher.com/v2/otp", {
  // //     method: "GET",
  // //     headers: {
  // //       Authorization:
  // //         "ySuAQeGAEmQx5ECKQ1WcbMk1H2Kqa5ZXerOXT6bOvnl5HskLZtEZAwGrc7S2XqUb",
  // //       "Content-Type": "application/json",
  // //     },
  // //   });

  // //   const data = await response.json();
  // //   if (response.ok) {
  // //     // setVId()
  // //     // setVId()
  // //     console.log(data);
  // //   }
  // // };

  // // GetVideo();
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
                src="https://player.vdocipher.com/v2/?otp=20160313versUSE323VY3kB3h43N5mWJHL8jUwXCcLDlDoiTdvIWuaxu6o72GaVz&playbackInfo=eyJ2aWRlb0lkIjoiM2Y3YjMxNWVlYjgyNGY2Y2I0NTUyZTY5MmI0MzczNDUifQ=="
                style={{ border: 0, width: "100%", height: "100%" }}
                allow="encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyStream;
