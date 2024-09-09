import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../config/supabase";
import { toast, ToastContainer } from "react-toastify";

function Register() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const register = (email, password, firstName, lastName) =>
    supabase.auth.signUp({ email, password, firstName, lastName });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !passwordRef.current?.value ||
      !emailRef.current?.value ||
      !confirmPasswordRef.current?.value ||
      !firstNameRef.current?.value ||
      !lastNameRef.current?.value
    ) {
      setErrorMsg("Please fill all the fields");
      toast(errorMsg);
      return;
    }
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setErrorMsg("Passwords doesn't match");
      toast(errorMsg);
      return;
    }
    try {
      setErrorMsg("");
      setLoading(true);
      const { data, error } = await register(
        emailRef.current.value,
        passwordRef.current.value,
        firstNameRef.current.value,
        lastNameRef.current.value
      );
      if (!error && data) {
        setMsg(
          "Registration Successful. Check your email to confirm your account"
        );

        toast(msg);
      }
    } catch (error) {
      setErrorMsg("Error in Creating Account");
      toast(errorMsg);
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <section className="w-[90%] md:w-[80%] mx-auto mt-[2rem] font-primary">
      {errorMsg && <ToastContainer />}
      {msg && <ToastContainer />}
      <div className="flex justify-center items-center flex-col gap-8 font-primary">
        <h1 className="text-4xl">Register</h1>
        <div className="flex gap-6 font-light text-sm">
          <Link to={"/"}>Home</Link>
          <p>></p>
          <p>Create Account</p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        action=""
        className="md:w-[50%] mx-auto flex flex-col gap-8 my-8"
      >
        <h1 className="self-start">Register</h1>
        <input
          className="placeholder:font-light font-primary text-sm py-3 px-2 border border-gray-300 rounded-md outline-none focus:border-black transition-all duration-300 ease-in-out"
          type="text"
          ref={firstNameRef}
          placeholder="First Name"
        />
        <input
          className="placeholder:font-light font-primary text-sm py-3 px-2 border border-gray-300 rounded-md outline-none focus:border-black transition-all duration-300 ease-in-out"
          type="text"
          ref={lastNameRef}
          placeholder="Last Name"
        />
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
        <input
          className="placeholder:font-light font-primary text-sm py-3 px-2 border border-gray-300 rounded-md outline-none focus:border-black transition-all duration-300 ease-in-out"
          type="password"
          ref={confirmPasswordRef}
          placeholder="Confirm Password"
        />
        <p className="text-[#696969] text-md font-light">
          Sign up for early Sale access plus tailored new arrivals, trends and
          promotions. To opt out, click unsubscribe in our emails.
        </p>

        <div className="flex flex-col gap-4">
          <button
            type="submit"
            className=" text-white border py-3 px-8 rounded-lg  bg-[#696969] hover:bg-black transition:all duration-300 ease-in"
          >
            Register
          </button>
          <button className="border-black  text-black border py-3 px-8 rounded-lg hover:bg-black hover:text-white transition:all duration-300 ease-in">
            Login
          </button>
        </div>
      </form>
    </section>
  );
}

export default Register;
