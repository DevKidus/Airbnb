import { useContext } from "react";
import { DataContext } from "../../Context API/Data";
import Discover from "./Discover";
import LiveAnyWhere from "./LiveAnyWhere";
import Loading from "../Common/Loading";
import { SiAirbnb } from "react-icons/si";

function Main() {
  let { homeLoading } = useContext(DataContext);
  return (
    <div>
      {homeLoading ? (
        <Loading />
      ) : (
        <div>
          <LiveAnyWhere />
          <Discover />
        </div>
      )}
    </div>
  );
}

export default Main;
