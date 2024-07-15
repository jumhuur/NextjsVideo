import Link from "next/link";
import Videos from "../Data/ListVideos.json";
const VideoList = () => {
  return (
    <>
      <div className="videolist">
        <div className="list">
          {Videos.map((Video) => (
            <>
              <div className="oneVideo" key={Video.Id}>
                <h3>{Video.Ciwaan}</h3>
                <p>Desc</p>
                <Link href={`/Player/${Video.Id}`}>
                  <button>Wotch Now</button>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoList;
