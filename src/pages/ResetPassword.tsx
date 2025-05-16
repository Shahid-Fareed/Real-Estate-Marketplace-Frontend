import React, { useState } from "react";
import HomeHeader from "../layout/HomeHeader";
import Footer from "../layout/Footer";
import FooterCredit from "../layout/FooterCredit";
import { toast } from "react-toastify";
import SectionHeading from "../components/Headings/SectionHeading";
import Auth from "../services/home/authServices";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [isSending, setIsSending] = useState("");
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [isSendingCode, setIsSendingCode] = useState(false);
  const [isMessagge, setIsMessagge] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const resetPass = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    let body = { email: email };
    Auth.restPassword(body)
      .then((res) => {
        setIsLoading(false);
        setIsSendingEmail(true);
        setIsSendingCode(true);
      })
      .catch((err) => {
        toast.info("This email id doesn't exist in our system!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setIsLoading(false);
        setIsSendingEmail(false);
        setIsSendingCode(false);
        setIsMessagge(false);
        console.error(err);
      });
  };

  const passchckec = (e: any) => {
    setIsLoading(true);
    let body = { verfication_code: code };
    Auth.verrifyCode(body)
      .then((res) => {
        setIsLoading(false);
        setIsSendingEmail(false);
        setIsSendingCode(true);
        setIsMessagge(true);
      })
      .catch((err) => {
        toast.info("Code is mismatched!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setIsLoading(false);
        setIsSendingEmail(true);
        setIsSendingCode(true);
        console.error(err);
      });
  };
  return (
    <>
      <HomeHeader />
      <section className="find-best p70-0">
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-sm-12 col-md-12 col-lg-6   mb-3 mb-lg-0">
              <div>
                {!isSending && !isSendingCode && !isMessagge ? (
                  <>
                    {" "}
                    <h2 className="modal-title text-black mt-0 fw-bold">
                      Enter your email below to reset your password.
                    </h2>
                  </>
                ) : null}
                {isSendingCode && isSendingEmail ? (
                  <>
                    {" "}
                    <h2
                      style={{ fontSize: 27 }}
                      className="modal-title text-black mt-0 fw-bold"
                    >
                      Enter the code below you just received in your email.
                    </h2>
                  </>
                ) : null}
                {isSendingCode && isMessagge ? (
                  <>
                    <h3 className="modal-title text-black mt-0 fw-bold">
                      Thank You
                    </h3>
                  </>
                ) : null}

                {isSendingEmail ? (
                  <>
                    <input
                      type="number"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="form-control py-2 rounded-0 border border-dark mb-3"
                      id="exampleFormControlInput1"
                      required
                      placeholder="Enter the code"
                    ></input>
                    <button
                    disabled={isLoading}
                      onClick={(e) => passchckec(e)}
                      className="btn btn-outline-dark rounded-0 mt-4 px-5 py-2 text-black fw-bold mb-2"
                    >
                      {
                        isLoading ? <>  <i
                        className="fa fa-spinner fa-spin faspinss"
                        style={{ fontSize: 24,   }}
                      /></> : 'Submit'
                      }
                      
                    </button>
                  </>
                ) : null}

                {!isSendingCode ? (
                  <>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control py-2 rounded-0 border border-dark mb-3"
                      id="exampleFormControlInput1"
                      required
                      placeholder="Enter your email address"
                    ></input>
                    <button
                      disabled={isLoading}
                      onClick={(e) => resetPass(e)}
                      className="btn btn-outline-dark rounded-0 px-5 py-2 mt-3 text-black fw-bold mb-2"
                    >
                      {
                        isLoading ? <>  <i
                        className="fa fa-spinner fa-spin faspinss"
                        style={{ fontSize: 24,  }}
                      /></> : 'Reset My Password Now'
                      }
                      
                    </button>
                  </>
                ) : null}

                {isMessagge ? (
                  <>
                    <p className="mt-4">
                      Check your email to find a system generated password.
                    </p>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <FooterCredit />
    </>
  );
};

export default ResetPassword;
