import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";
import { Button } from "../../components"

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError() as any;

  return (
    <div>
      {error.status === 404
        ? "Sorry, the page you visited does not exist."
        : "Sorry, something went wrong."}

        <Button onClick={() => navigate("/")} variant="primary">Go Back</Button>
    </div>
  );
};

export default ErrorPage;
