import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const dashboard = () => {
  const { user } = useAuth();

  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch(`https://agro-firm-server.onrender.com/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={user?.photoURL}
          alt="Profile Picture"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{userInfo?.name}</h2>
        <h3>{userInfo?.email}</h3>
        <div className="card-actions">
          <Link
            to={`/dashboard/profile/edit/${userInfo?._id}`}
            className="btn btn-primary"
          >
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
