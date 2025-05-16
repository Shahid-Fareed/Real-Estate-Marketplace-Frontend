import React, { FC } from "react";
import { getApp } from "./hooks/helper";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SignInModal from "./pages/SignInModal";
import SignUpModal from "./pages/SignUpModal";
import GetInTouch from "./pages/GetInTouch";
import SignInModalAdd from "./pages/SignInModalAdd";
import SignUpModalAdd from "./pages/SignUpModalAdd";

const App: FC = () => {
  const CurrentApp = getApp();
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <CurrentApp />
      <>
        <div
          className="modal fade"
          id="exampleModal"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <SignInModal />
        </div>
        <div
          className="modal fade"
          id="singUpModal"
          aria-labelledby="SingupModalLabel"
          aria-hidden="true"
        >
          <SignUpModal />
        </div>
        {/* add property modal */}
        <div
          className="modal fade"
          id="exampleModaladd"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <SignInModalAdd />
        </div>
        <div
          className="modal fade"
          id="singUpModaladd"
          aria-labelledby="SingupModalLabel"
          aria-hidden="true"
        >
          <SignUpModalAdd />
        </div>
        <div
          className="modal fade"
          id="getInTouchModal"
          aria-labelledby="getInTouchModalLabel"
          aria-hidden="true"
        >
          <GetInTouch />
        </div>
      </>
    </>
  );
};

export default App;
