import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAnalytics } from "../AnalyticsProvider";

function Home(props) {
  const navigate = useNavigate();
  const analytics = useAnalytics();
  useEffect(() => {
    analytics.page("Home page", {
      Title: "this is my home page ",
    });
  }, []);
  const pageChangeHandler = () => {
    analytics.track(
      "Move to next page ",
      {
        title: "User Move To Aboute Page ",
        subtitle: "The Avalanche at Tunnel Creek",
        author: "John Branch",
      },
    );
    navigate('/aboute')
  };

  return (
    <div>
      <h1>Home Component</h1>
      <button onClick={() => navigate("/dashbord")}>Goto Dashbord</button>
      <button onClick={() => pageChangeHandler()}>Go to Aboute page</button>
    </div>
  );
}

export default Home;
