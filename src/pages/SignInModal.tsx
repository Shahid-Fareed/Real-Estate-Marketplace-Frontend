import React, { useState } from "react";
import { handleModalClose } from "../hooks/helper";
import AuthApi from "../services/home/authServices";

import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
import { toast } from "react-toastify";
import Loaders from "../components/Loaders";
import { Link } from "react-router-dom";

const SignInModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSending, setIsSending] = useState(false);

  const loginApi = () => {
    setIsSending(true);
    let body = { mobile_number: email, password: password };
    const closeIcon = document.querySelector(
      "#closeLoginModal"
    )! as HTMLElement;
    AuthApi.login(body)
      .then((res) => {
        window.location.href = `${process.env.REACT_APP_BASE_SUBDOMAIN}/dashboard?ase=${res.data.token}`;
        closeIcon.click();
      })
      .catch((err) => {
        setEmail("");
        setPassword("");
        setIsSending(false);
        toast.error(err.response.data.data, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const responseFacebook = (response: any) => {
    console.log(response);
  };

  const responseGoogle = (response: any) => {
    console.log(response);
  };

  const closePopup = () =>{
    const closeIcon = document.querySelector(
      "#closeLoginModal"
    )! as HTMLElement;

    closeIcon.click();
  }

  return (
    <>
    {
      isSending ? <Loaders /> : <> <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header border-bottom-0 pb-0">
          <button
            type="button"
            className="btn-close"
            id="closeLoginModal"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="d-flex justify-content-center flex-column align-items-center px-5">
          <h2
            className="modal-title text-black mt-0 fw-bold"
            id="exampleModalLabel"
          >
            Sign in to your account
          </h2>
          <small className="mb-4">Welcome back!</small>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="phone"
            maxLength={11}
            className="form-control py-2 rounded-0 border border-dark mb-3"
            id="exampleFormControlInput1"
            required
            placeholder="Phone number"
          ></input>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control py-2 rounded-0 border border-dark mb-4"
            id="exampleFormControlInput1"
            placeholder="Password"
            required
          ></input>
          <button
            disabled={isSending}
            onClick={() => loginApi()}
            className="btn btn-outline-dark rounded-0 px-5 py-2 text-black fw-bold mb-2"
          >
            Sign in
          </button>
          <small className="mb-4"><Link onClick={closePopup} to="/reset-password" >Forgot password?</Link></small>
          {/* <div className="d-flex align-items-center mb-4">
            <img
              width={180}
              className="mx-2"
              src="/assets/img/Line.png"
              alt=""
            />
            <p className="my-0">OR</p>
            <img
              width={180}
              className="mx-2"
              src="/assets/img/Line.png"
              alt=""
            />
          </div>
          <FacebookLogin
            appId="219809130939063"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
            render={(renderProps) => (
              <div
                onClick={renderProps.onClick}
                style={{ backgroundColor: "#3A589B" }}
                className="px-3 py-2 text-white w-100 d-flex justify-content-between shadow mb-3 pointer"
              >
                <span>Continue with Facebook</span>
                <span>
                  <img
                    src="/assets/img/Facebook Icon.png"
                    alt=""
                    width="25"
                  ></img>
                </span>
              </div>
            )}
          />

          <GoogleLogin
            clientId="265158975038-moj808e789atkv6800qcnaf1usl206vp.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={false}
                className="px-3 py-2 text-black w-100 d-flex justify-content-between border border-dark shadow pointer"
              >
                <span>Continue with Google</span>
                <span>
                  <img
                    src="/assets/img/Google Icon.png"
                    alt=""
                    width="25"
                  ></img>
                </span>
              </button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          /> */}

          <small
            onClick={() => handleModalClose("closeLoginModal")}
            data-bs-toggle="modal"
            data-bs-target="#singUpModal"
            className="mt-4 mb-5 text-decoration-underline pointer"
          >
            Don’t have an account? Sign up now!
          </small>
        </div>
      </div>
    </div> </>
    }
    </>
   
  );
};

export default SignInModal;
