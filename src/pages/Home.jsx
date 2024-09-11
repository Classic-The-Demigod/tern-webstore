import React, { useContext, useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Banner from "../assets/banner.jpg";
import Demo from "../assets/demo.webp";


import { useAuth } from "../context/AuthProvider";

function Home() {
  const { user } = useAuth();
  console.log(user)

  return (
    <section className="overflow-hidden">
      <div className="w-[90%] md:w-[80%] mx-auto">
        {/* <div>You are logged in and your email address is {user.email}</div> */}
        <ProductList />
      </div>
      <main className="my-8">
        <div>
          <img className="md:h-[900px] w-full" src={Banner} alt="Banner" />
        </div>
        <p className="text-center font-primary text-2xl w-[80%] mx-auto md:text-4xl my-8">
          get an alert about upcoming releases
        </p>
      </main>
      <div className="my-6 flex justify-center rounded-md border border-gray-400 w-[80%] md:w-[25%] mx-auto">
        <input
          className="py-3 outline-none border-r-gray-400 border-r"
          placeholder="Enter your mail"
        />
        <button className=" px-4 py-3 text-gray-400">Subscribe</button>
      </div>

      <section className="md:w-[80%] w-[90%] mb-8 mx-auto flex flex-col items-start gap-8">
        <div className="self-center font-primary text-red-500 bg-red-200 px-4 py-3 rounded-md">
          Sold Out
        </div>
        <div className="flex flex-col md:flex-row items-start gap-[4rem]">
          <div>
            <img
              className="w-[800px]"
              src={Demo}
              alt="Image of Man on T-Shirt"
            />
          </div>

          <div className="flex flex-col gap-8">
            <h1 className="font-primary text-5xl">
              <span className="animate-rainbow">Original Member</span> cards
            </h1>
            <p className="font-primary text-gray-400">
              We are proud to present the "original member" cards, we want to
              reward our first 1000 customers with a card each.Each card is
              unique and includes an id and a key, it will be useful in the
              future, keep it carefully.
            </p>
            <button className="text-white font-primary bg-gray-800 self-start border-none px-4 py-3 rounded-md">
              ➤ get a card
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
