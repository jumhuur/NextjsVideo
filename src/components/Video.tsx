const MyStream = ({ Otp, PlayBack }) => {
  const VideoUrl = `https://player.vdocipher.com/v2/?otp=${Otp}&playbackInfo=${PlayBack}`;
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
    </>
  );
};

export default MyStream;
