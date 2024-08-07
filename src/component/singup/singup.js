import { useForm } from "react-hook-form";
import "./singup.css";
// import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";
const CLIENT_ID =
  "64657723314-mrtjdkhco5q7trdrip9qh3mjktlra9f3.apps.googleusercontent.com";
export function Singup() {
  const onSuccess = (res) => {
    console.log("Login Success! Current user:", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("Login Failed! res:", res);
  };

  let { register, reset, handleSubmit } = useForm();
  const saveUser = (data) => {
    console.log(data);
    reset();
  };

  return (
    <section className="vh-100 ss-100 sss-100">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card cardd text-center" style={{ borderRadius: 15 }}>
                <div className="card-body p-5">
                  <img
                    className="imgs text-center"
                    src="../asserts/login.svg"
                    alt=""
                  />
                  {/* <h2 className="text-uppercase text-center mb-5">
                Create an account
              </h2> */}
                  <p className="mt-6 text-center fw-lighter fs-4">
                    Try FreshBooks Free
                  </p>
                  <form onSubmit={handleSubmit(saveUser)}>
                    <p className="text-center">
                      No credit card required. Cancel anytime.
                    </p>
                    <div className="form-outline mb-4">
                      <input
                        type="Email"
                        required
                        {...register("email")}
                        placeholder="Email"
                        className="form-control input form-control-lg"
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        {...register("password")}
                        placeholder="Password"
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        defaultValue=""
                        id="form2Example3cg"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example3g"
                      >
                        I agree all statements in{" "}
                        <a href="#!" className="text-body">
                          <u>Terms of service</u>
                        </a>
                      </label>
                    </div>

                    <div className="form-row oauth-login-text">
                      <button
                        type="submit"
                        name="commit"
                        defaultValue="Log In"
                        className="button-primary oauth-login-button"
                        onclick="return isSignInFormValid();"
                        data-disable-with="Log In"
                      >
                        Sing up
                      </button>
                    </div>
                    <div className="mainss text-center ">
                      <div className="div1"></div>
                      <p className="top">OR</p>
                      <div className="div2"></div>
                    </div>

                    <div
                      className="google"
                      clientId={CLIENT_ID}
                      buttonText="Log in with Google"
                      onSuccess={onSuccess}
                      onFailure={onFailure}
                      cookiePolicy={"single_host_origin"}
                    />
                    <p className="text-center text-muted mt-5 mb-0">
                      Already have an account?{" "}
                      <Link to={"/Login"} className=" text-body">
                        <u>Login here</u>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>

              <img
                className="img1 text-center"
                src="../asserts/globe.svg"
                alt=""
              />
              <p className=" text-center texts"> English | Español</p>
              <img className="img2" src="../asserts/lock-fill.svg" alt="" />
              <p className="texts1 text-center"> Security Safeguards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
