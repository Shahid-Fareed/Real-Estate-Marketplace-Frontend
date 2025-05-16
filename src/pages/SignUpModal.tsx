import React, { useState, ChangeEvent } from "react";
import { handleModalClose } from "../hooks/helper";
import AuthApi from "../services/home/authServices";
import { toast } from "react-toastify";
import Loaders from "../components/Loaders";
import { Link } from "react-router-dom";

const SignUpModal = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [agencyCheck, seAgencyCheck] = useState(false);
  const [InvidualCheck, setInvidualCheck] = useState(true);

  const handelChange = () => {
    seAgencyCheck(!agencyCheck);
    setInvidualCheck(!InvidualCheck);
  };

  const SingupApi = () => {
    setIsSending(true);
    let body = {
      email: email,
      full_name: name,
      mobile_number: phone,
      is_admin: agencyCheck ? 1 : 0,
      password: password,
      user_type: InvidualCheck ? "user" : agencyCheck ? "agency" : "",
    };
    const closeIcon = document.querySelector("#closeSingModal")! as HTMLElement;
    AuthApi.signUp(body)
      .then((res) => {
        AuthApi.login({
          mobile_number: phone,
          password: password,
          user_type: InvidualCheck ? "user" : agencyCheck ? "agency" : "",
        })
          .then((res) => {
            window.location.href = `${process.env.REACT_APP_BASE_SUBDOMAIN}/dashboard?ase=${res.data.token}`;
            closeIcon.click();
            setEmail("");
            setName("");
            setPhone("");
            setPassword("");
          })
          .catch((err) => {
            setEmail("");
            setName("");
            setPhone("");
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
        closeIcon.click();
      })
      .catch((err) => {
        setIsSending(false);
        setEmail("");
        setPhone("");
        setPassword("");
        setInvidualCheck(true);
        seAgencyCheck(false);

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

  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.replace(/\D/g, "").slice(0, 11);
    setPhone(newValue);
  };

  const isAnyStateEmpty = () => {
    return email === "" || phone === "" || password === "" || name === "";
  };

  const closePopup = () =>{
    const closeIcon = document.querySelector(
      "#closeSingModal"
    )! as HTMLElement;

    closeIcon.click();
  }


  return (
    <>
      {isSending ? (
        <Loaders />
      ) : (
        <>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-bottom-0 pb-0">
                <button
                  type="button"
                  className="btn-close"
                  id="closeSingModal"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="d-flex justify-content-center flex-column align-items-center px-5">
                <h2
                  className="modal-title text-black mt-0 fw-bold"
                  id="SingupModalLabel"
                >
                  Create an account
                </h2>
                <small className="mb-4">
                  Add, explore and invest in the best properties!
                </small>
                <div className="pb-4">
                  <button
                    style={{
                      border: "1px solid black",
                    }}
                    onClick={handelChange}
                    className={
                      InvidualCheck
                        ? "btn bgDark rounded-0 px-5 py-2   mb-2 me-3"
                        : "btn rounded-0 px-5 py-2   mb-2 me-3"
                    }
                  >
                    Individual
                  </button>
                  <button
                    style={{
                      border: "1px solid black",
                    }}
                    onClick={handelChange}
                    className={
                      agencyCheck
                        ? "btn bgDark rounded-0 px-5 py-2   mb-2"
                        : "btn rounded-0 px-5 py-2   mb-2"
                    }
                  >
                    Agency
                  </button>
                </div>
                <input
                  type="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control py-2 rounded-0 border border-dark mb-3"
                  id="exampleFormControlInput1"
                  placeholder="Email"
                ></input>
                <input
                  type="text"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  className="form-control py-2 rounded-0 border border-dark mb-3"
                  id="exampleFormControlInput1"
                  placeholder="Username"
                ></input>
                <input
                  type="number"
                  required
                  value={phone}
                  onChange={handlePhoneNumberChange}
                  maxLength={11}
                  className="form-control py-2 rounded-0 border border-dark mb-3"
                  id="exampleFormControlInput1"
                  placeholder="Phone number"
                ></input>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control py-2 rounded-0 border border-dark mb-4"
                  id="exampleFormControlInput1"
                  placeholder="Password"
                ></input>
                {isAnyStateEmpty() ? (
                  <button
                    disabled={isSending}
                    className="btn btn-outline-dark rounded-0 px-5 py-2 text-black fw-bold mb-2"
                  >
                    Sign Up
                  </button>
                ) : (
                  <button
                    disabled={isSending}
                    onClick={() => SingupApi()}
                    className="btn btn-outline-dark rounded-0 px-5 py-2 text-black fw-bold mb-2"
                  >
                    Sign Up
                  </button>
                )}

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
          <div
            style={{ backgroundColor: "#3A589B" }}
            className="px-3 py-2 text-white w-100 d-flex justify-content-between shadow mb-3 pointer"
          >
            <span>Continue with Facebook</span>
            <span>
              <img src="/assets/img/Facebook Icon.png" alt="" width="25"></img>
            </span>
          </div>
          <div className="px-3 py-2 text-black w-100 d-flex justify-content-between border border-dark shadow pointer">
            <span>Continue with Google</span>
            <span>
              <img src="/assets/img/Google Icon.png" alt="" width="25"></img>
            </span>
          </div> */}
                <small
                  onClick={() => handleModalClose("closeSingModal")}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="mt-4 mb-5 text-decoration-underline pointer"
                >
                  I already have an account
                </small>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SignUpModal;
