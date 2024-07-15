import Link from "next/link";
const HomePage = () => {
  return (
    <>
      <div className="home">
        <div className="hay">
          <Link href={"/Player/d00d5b71dfc74df59e5610c7eb1d61a6"}>
            <button>Videos</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
