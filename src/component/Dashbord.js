import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAnalytics } from "../AnalyticsProvider";

const Dashbord = () => {
  const navigate = useNavigate();

  const analytics = useAnalytics();
  useEffect(() => {
    analytics.page("dashbord page ");
  }, []);

  const pageChangeHandler = () => {
    analytics.track("Move to next page ", {
      title: "User Move To Aboute Page ",
      subtitle: "The Avalanche at Tunnel Creek",
      author: "John Branch",
    });
    navigate("/");
  };

  return (
    <div>
      <h1>Dashbord PAge</h1>
      <button onClick={() => pageChangeHandler()}>Go to home page </button>
    </div>
  );
};

export default Dashbord;
