import VideoList from "./VideoList";
const MyStream = ({ VideoInfo }) => {
  // const Id = params;
  // const [VideoInfo, setVideoInfo] = useState();
  // const GetMedia = async () => {
  //   const Media = await fetch(`/api/GetVdeo/${""}`, {
  //     method: "POST",
  //   });
  //   const data = await Media.json();
  //   if (Media.ok) {
  //     setVideoInfo(data && data);
  //     console.log("Waa Kan", data);
  //   }
  // };

  // useEffect(() => {
  //   GetMedia();
  // }, []);

  const VideoUrl = `https://player.vdocipher.com/v2/?otp=${VideoInfo?.otp}&playbackInfo=${VideoInfo?.playbackInfo}`;
  return (
    <>
      <div className="videoCon">
        <div className="haye">
          <div className="Lanba_qaybood">
            <VideoList />
            {VideoInfo ? (
              <div className="videoCon">
                <div className="haye">
                  <div className="myVideo">
                    <div className="Ciwaan">
                      <h2>Video Title</h2>
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
                <form>
                  <input type="number" name="ttl" value={300} hidden />
                </form>
              </div>
            ) : (
              <div className="loading">
                <p>Loading ...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyStream;
