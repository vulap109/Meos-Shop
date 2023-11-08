import { ErrorResponse } from "react-router-dom";

export const handleError = (error: ErrorResponse, navigate: any) => {
  const statusCode = error.status;
  switch (statusCode) {
    case 404:
      // Handle the 404 error
      navigate("/404");
      break;
    case 403:
      // Handle the 403 error
      navigate("/404");
      break;
    case 401:
      // Handle the 401 error
      navigate("/404");
      break;
    default:
      // Handle other errors
      navigate("/500");
      break;
  }
};
