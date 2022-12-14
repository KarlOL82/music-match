import React from "react";

import { Link } from "react-router-dom";

import ConnectWith from "../pages/ConnectWith";
import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";
import Profile from "./Profile";

const Home = () => {
  const { loading } = useQuery(QUERY_USERS);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="background">
      <div className="container ">
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
        <div className="flex-row justify-center"></div>

        <section>
          <p className="justify-center text-3xl text-white py-6 text-center">
            What would you like to do?
          </p>

          <div className="p-6">
            <Link
              className="btn text-xl bg-slate-300  text-gray-900 rounded-lg  hover:bg-slate-600 font-bold btn-lg btn-light p-3 m-6"
              to="/me"
            >
              {Profile}Go to Profile
            </Link>
          </div>

          <div className="p-6">
            <Link
              className="btn  bg-slate-300 text-gray-900 rounded-lg  hover:bg-slate-600 font-bold btn-lg btn-light p-3 m-6"
              to="/ConnectWith"
            >
              {ConnectWith}Find Connections
            </Link>
          </div>

        </section>
      </div>
    </main>
  );
};

export default Home;
