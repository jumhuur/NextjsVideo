import Video from "next-video";
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
              <Video
                className="Video_Next"
                src={Mymedia}
                accentColor="#4c40f7"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyStream;
