import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMsg("");
      setLoading(true);
      if (!passwordRef.current?.value || !emailRef.current?.value) {
        setErrorMsg("Please fill in the fields");
        toast(errorMsg);
        return;
      }
      const {
        data: { user, session },
        error,
      } = await login(emailRef.current.value, passwordRef.current.value);
      if (error) {
        setErrorMsg(error.message);
        toast(errorMsg);
      }

      // if (user && session) {
      //   navigate("/");
      // }
    } catch (error) {
      setErrorMsg("Email or Password Incorrect");
      toast(errorMsg);
    }
    setLoading(false);
  };

  return (
    <section className="mx-auto w-[90%] font-primary mt-8">
      <div className="flex justify-center items-center flex-col gap-8 font-primary">
        <h1 className="text-4xl">Login</h1>
        <ToastContainer />
        <div className="flex gap-6 font-light text-sm">
          <Link to={"/"}>Home</Link>
          <p>></p>
          <p>Account</p>
        </div>
      </div>

      <main className="my-8 flex gap-[4rem] md:flex-row flex-col">
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex-1 md:mx-auto flex flex-col gap-8 "
        >
          <h1 className="self-start text-2xl">Login</h1>

          <input
            className="placeholder:font-light font-primary text-sm py-3 px-2 border border-gray-300 rounded-md outline-none focus:border-black transition-all duration-300 ease-in-out"
            type="email"
            ref={emailRef}
            placeholder="Email"
          />
          <input
            className="placeholder:font-light font-primary text-sm py-3 px-2 border border-gray-300 rounded-md outline-none focus:border-black transition-all duration-300 ease-in-out"
            type="password"
            ref={passwordRef}
            placeholder="Password"
          />

          <button
            type="submit"
            className="self-start text-white border py-3 px-8 rounded-lg  bg-[#696969] hover:bg-black transition:all duration-300 ease-in"
          >
            Sign In
          </button>
        </form>
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl">New Customer</h1>
          <p className="text-[#696969] text-sm font-light">
            Sign up for early Sale access plus tailored new arrivals, trends and
            promotions. To opt out, click unsubscribe in our emails.
          </p>
          <button
            onClick={() => navigate("/register")}
            className="text-white border py-3 px-8 rounded-lg  bg-black"
          >
            Register
          </button>
        </div>
      </main>
    </section>
  );
}

export default Login;
