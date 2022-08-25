import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAnalytics } from "../AnalyticsProvider";

const Profile = () => {
  const navigate = useNavigate();
  const analytics = useAnalytics();
  useEffect(() => {
    analytics.page("profile page ");
  }, []);

  const pageChangeHandler = () => {
    analytics.track("Move to Home page ", {
      title: "User Move To Aboute Page ",
      subtitle: "The Avalanche at Tunnel Creek",
      author: "John Branch",
    });
    navigate("/");
  };
  return (
    <div>
      <h1>Profile page</h1>
      <button onClick={() => pageChangeHandler()}>Go to Home page</button>
    </div>
  );
};

export default Profile;
