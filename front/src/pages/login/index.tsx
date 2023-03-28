import { useDispatch } from "react-redux";
import { login } from "../../store/user/auth.reducers";

const LoginPage = () => {
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(
      login({
        username: "amir",
        token: "testToken",
      })
    );
  };

  return (
    <div>
      <h1>this is login</h1>

      <br />

      <button onClick={loginHandler}>login</button>
    </div>
  );
};

export default LoginPage;
