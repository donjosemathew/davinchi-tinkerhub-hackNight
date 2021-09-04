import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
const Home = () => {
  let history = useHistory();
  const [data, setdata] = useState(false);
  const [data2, setdata2] = useState(false);
  function getFollowers() {
    if (data2) {
      history.push(`/${data}`);
    }

    axios.get(`https://api.github.com/users/${data}`).then((res) => {
      setdata2(true);
    });
  }

  return (
    <div className="holder">
      <div className="holder-col1">
        <h1>GitTree</h1>
        <h2>Enter valid Github username of you or your friend</h2>
        <div className="input">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setdata(e.target.value)}
          />

          <BsSearch
            size="2em"
            color="#fff"
            className="floatIcn"
            onClick={() => getFollowers()}
          />
        </div>
        <h2
          style={{
            fontSize: "1.5rem",
            marginTop: "2rem",
          }}
        >
          {" "}
          eg :dontech09,Gokul-GMenon,Hari2k02
        </h2>
      </div>
      <div className="holder-col2">s</div>
    </div>
  );
};

export default Home;
