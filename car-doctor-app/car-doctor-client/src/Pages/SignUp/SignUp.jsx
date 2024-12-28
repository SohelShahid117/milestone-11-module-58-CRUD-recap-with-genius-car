import React, { useContext } from "react";
import loginImg from "../../assets/images/login/login.svg";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../providers/AuthProviders";

const SignUp = () => {

  const {createUser} = useContext(AuthContext)
  console.log(createUser)


    const handleSignUp=(e)=>{
        console.log(e);
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value
        console.log(name,email,password);

        createUser(email,password)
        .then((result)=>{
          const user = result.user
          console.log(user)
          console.log(user.email)
        })
        .catch((err)=>{
          console.log(err)
        })
    }
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center  w-1/2 lg:text-left">
            <img src={loginImg} alt="" srcset="" className="p-10 w-full" />
          </div>
          <div className="card bg-base-500 w-1/2 max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-3xl font-bold text-center py-3">Sign Up</h1>
            <form className="card-body" onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
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
                <button className="btn bg-orange-500 text-white">Sign Up</button>
              </div>
            </form>
            <p className="text-center mb-5">Already have an account ? Go to <Link to="/login" className="text-xl text-orange-600 font-bold">Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;