import Video from "next-video";
import Player from "next-video/player";
import Mymedia from "../../videos/lessonone.mp4";
const MyStream = () => {
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
                className="Video_Next"
                src="https://player.vdocipher.com/v2/?otp=xAvmitlmzoTmPqguWYLkwHJuF7VoT7EE36fo5s1lV89l6xpSa2w5CekbAy9ZZZOg&playbackInfo=abcdefghijk"
                // style="border:0;width:720px;height:405px"
                allow="encrypted-media"
                // allowfullscreen="true"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyStream;
