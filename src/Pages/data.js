import { BrowserRouter as Router, useParams } from "react-router-dom";
const UserData = () => {
  const params = useParams();
  return <h1>{params.slug}</h1>;
};

export default UserData;
