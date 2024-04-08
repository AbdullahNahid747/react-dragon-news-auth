import { Link } from "react-router-dom";
import NavBar from "../../../Pages/Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const Register = () =>
 {
    const {createUser} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        // const form = new FormData(e.currentTarget);

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const  password = e.target.password.value;
        // console.log(form.get('email'));
        console.log(name, photo, email , password)

        // create user
        createUser(email, password)
        .then( result => {
            console.log(result.user)
        })
        .catch( error => {
            console.error(error);
        })
      }

  return (
    <div>
      <NavBar></NavBar>
      <div className=" h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-lg  bg-base-100">
            <h2 className=" text-3xl my-10 font-semibold">
            Register your account
            </h2>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-semibold">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Enter your name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-semibold">Photo URl</span>
                </label>
                <input
                  type="yext"
                  placeholder="Enter your photo url"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p>
            Already have an account ? <Link className=" text-[#F75B5F] font-bold" to={"/Login"}>Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
