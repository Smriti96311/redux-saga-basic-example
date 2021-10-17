import "./styles.css";
import { useEffect } from "react";
import { getUSer } from "./redux/ducks/user";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUSer());
  }, [dispatch]);

  const user = useSelector((state) => state.user.user);
  console.log(user);

  return <div className="App">{user && user.firstname}</div>;
}
