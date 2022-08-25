
export const useAnalytics = () => {
    const result = React.useContext(AnalyticsContext);
    if (!result) {
      throw new Error("Context used outside of its Provider!");
    }
    return result;
  };