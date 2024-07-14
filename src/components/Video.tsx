"use client";
import { useEffect, useState } from "react";
const MyStream = () => {
  // const [Votp, setVotp] = useState(null);
  // const [VId, setVId] = useState(null);
  // const [otp, setOtp] = useState("");
  // const [playbackInfo, setPlaybackInfo] = useState("");
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
