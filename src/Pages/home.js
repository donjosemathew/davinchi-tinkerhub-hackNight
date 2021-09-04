import { BsSearch } from "react-icons/bs";
const Home = () => {
  return (
    <div className="holder">
      <div className="holder-col1">
        <h1>GitTree</h1>
        <h2>Enter Github username of you</h2>
        <div className="input">
          <input type="text" placeholder="Username" />
          <BsSearch size="2em" color="#fff" className="floatIcn" />
        </div>
      </div>
      <div className="holder-col2">s</div>
    </div>
  );
};

export default Home;
