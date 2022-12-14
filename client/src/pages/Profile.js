import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { REMOVE_PROFILE } from "../utils/mutations";
// import UploadWidget from './uploadWidget';

import Auth from "../utils/auth";

const Profile = () => {
  const { username: userParam } = useParams();
  const [removeProfile] = useMutation(REMOVE_PROFILE);

  const [userData, setUserData] = useState({
    name: "",
    role: null,
    url: "",
    about_me: "",
  });

  const handleDelete = async (e) => {
    try {
      const { userData } = await removeProfile({});
      removeProfile(userData);
      setUserData((initialState) => ({
        ...initialState,
        name: "",
        url: "",
      }));
      console.log(userData);
    } catch (err) {
      console.error(err);
    }
  };

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  console.log(data);

  console.log(userData);

  if (Auth.loggedIn() && Auth.getProfile().data._id === userParam) {
    console.log("logged in");
    
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <div className="flex justify-center">
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <p className="text-center py-48 text-3xl text-white">
          You need to be logged in to access and create your profile. Please{" "}
          <Link to="/login">
            <span className="text-teal-400">login</span>
          </Link>{" "}
          or{" "}
          <Link to="/signup">
            <span className="text-teal-400">signup.</span>
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="flex-row justify-center mb-3">
        <div className="flex justify-center pt-16 ">
          <div className="bg-slate-300 p-12 text-gray-900 rounded-lg text-xl shadow-xl">
            <div className="ViewingProfile flex justify-center font-bold">
              Viewing {userParam ? `${user.username}'s` : "your"} profile
            </div>
            <div key={userData._id} className="text-center col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h2 className="py-6 card-header">
                  {user.name}

                  <p className="py-6">{user.role}</p>
                </h2>
                <>
                  <p className="card-body">{user.about_me}</p>
                </>
                <div>
                  <figure>
                    <figcaption className="py-3">My Music</figcaption>
                    <audio controls src={user.url}>
                      <p>greatness</p>
                    </audio>
                  </figure>
                </div>
              </div>
            </div>
            <>
              {!userParam && (
                <div className="">
                  <Link
                    className="btn text-xl  bg-slate-300 text-center rounded-lg text-gray-900 font-bold btn-lg btn-info m-2 hover:bg-slate-600"
                    to="/profileCreator"
                  >
                    Update Profile
                  </Link>
                  
                </div>
              )}
            </>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
