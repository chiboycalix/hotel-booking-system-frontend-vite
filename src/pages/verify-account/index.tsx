import React from "react";
import { useMutation } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";

import { ROUTES } from "../../routes";
import { IUseAuthMutation, verifyAccount } from "../../api/auth";
import { Button } from "../../components";

const VerifyAccount = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation()
  const [successMessage, setSuccessMessage] = React.useState("")

  const { mutate, isLoading, isError, error, isSuccess }: IUseAuthMutation = useMutation({
    mutationFn: verifyAccount, onSuccess({ data }) {
      setSuccessMessage(data.message)
    }
  });

  React.useEffect(() => {
    mutate({
      email: pathname?.split("/")[2],
    })
  }, [pathname, mutate])

  return (
    <div className="w-full xl:basis-6/12">
      <p className="text-sm text-secondary-color">Verify your Account</p>
      <h1 className="font-bold text-4xl mt-2">Verify Account</h1>
      {isError && <div
        className="break-words rounded-b-lg bg-danger-100 px-4 py-4 text-danger-700 mt-4">
        {error?.response?.data.message}

      </div>}
      {isSuccess && <div className="break-words rounded-b-lg bg-success-100 px-4 py-4 text-success-700 mt-4">
        {successMessage}
      </div>}
      <div className="mt-4
                      xl:mt-12">
        <Button variant="primary" onClick={() => navigate(ROUTES.LOGIN)}>
         {isLoading ? "Verifying user ...": "Back to Login"}
        </Button>
      </div>
    </div>
  )
}

export default VerifyAccount