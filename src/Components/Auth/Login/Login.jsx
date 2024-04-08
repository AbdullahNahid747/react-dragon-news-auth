import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../../../Pages/Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log('location in the login page', location)

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);

        // navigate after login
        navigate(location?.state ? location.state : '/');

      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className=" h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-lg  bg-base-100">
            <h2 className=" text-3xl my-10 font-semibold">
              Login your account
            </h2>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p>
              Don’t Have An Account ?{" "}
              <Link className=" text-[#F75B5F] font-bold" to={"/register"}>
                Register Now!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
