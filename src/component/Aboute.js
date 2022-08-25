import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAnalytics } from "../AnalyticsProvider";
const Aboute = () => {
  const navigate = useNavigate();
  const analytics = useAnalytics();
  useEffect(() => {
    analytics.page("Aboute page ");
  }, []);

  const pageChangeHandler = () => {
    analytics.track("Move to next page ", {
      title: "User Move To Profile Page ",
      subtitle: "The Avalanche at Tunnel Creek",
      author: "John Branch",
    });
    navigate("/profile");
  };

  return (
    <div>
      <h1>About page</h1>
      <button onClick={() => pageChangeHandler()}>
        Go to Profile page page
      </button>
    </div>
  );
};

export default Aboute;
