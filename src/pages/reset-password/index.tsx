import React from "react";
import LockIcon from "../../assets/images/auth/lock.svg";
import GoogleIcon from "../../assets/images/auth/google.svg";
import FacebookIcon from "../../assets/images/auth/facebook.svg";

import { Button, Divider, Input, Loader } from "../../components";
import { ROUTES } from "../../routes";
import { useLocation, useNavigate } from "react-router-dom";
import { IUseAuthMutation, resetPassword } from "../../api/auth";
import { useMutation } from "@tanstack/react-query";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation()
  const [formValue, setFormValue] = React.useState({ password: "", confirm_password: "" })
  const [passwordError, setPasswordError] = React.useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = React.useState<string | null>(null);

  const { mutate, isLoading, isError, error, isSuccess }: IUseAuthMutation = useMutation({
    mutationFn: resetPassword
  });

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    setFormValue({
      ...formValue,
      [name]: value
    })
    if (name === 'password') {
      setPasswordError(null)
    }
    if (name === 'confirm_password') {
      setConfirmPasswordError(null);
    }
  }

  const handleRegisterUser = (e: React.FormEvent) => {
    e.preventDefault()
    if (formValue.password.trim() === '') {
      setPasswordError('Password cannot be empty.');
      return
    }

    if (formValue.confirm_password.trim() === '') {
      setConfirmPasswordError('Confirm password cannot be empty')
      return
    }

    if (formValue.password !== formValue.confirm_password) {
      setConfirmPasswordError('Passwords do not match.')
      return
    }

    mutate({
      token: pathname?.split("/")[2],
      password: formValue.password,
    })
  }

  React.useEffect(() => {
    if (isSuccess) {
      navigate(ROUTES.PASSWORD_CHANGED, {
        state: {
          token: pathname?.split("/")[2],
          password: formValue.password
        }
      })
    }
    if (isError) {
      return
    }
  }, [isSuccess, isError, navigate, pathname, formValue.password])


  return (
    <div className="w-full xl:basis-6/12">
      <p className="text-sm text-secondary-color">Create new password</p>
      <h1 className="font-bold text-4xl mt-2">Reset Password</h1>
      {isError && <div
        className="break-words rounded-b-lg bg-danger-100 px-4 py-4 text-danger-700 mt-4">
       {error?.response?.data.message}
      </div>}
      <form className="mt-10 w-full relative" onSubmit={handleRegisterUser}>
      <div className="mt-10">
          <Input
            name="password"
            id="password"
            placeHolder="Password"
            type="text"
            onChange={handleChange}
            isAuthInput
            hasIconPrefix
            Icon={LockIcon}
            value={formValue.password}
            hasError={!!passwordError}
          />
          {!!passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
        </div>
        <div className="mt-10">
          <Input
            name="confirm_password"
            id="confirm_password"
            placeHolder="Confirm Password"
            type="text"
            onChange={handleChange}
            isAuthInput
            hasIconPrefix
            Icon={LockIcon}
            hasError={!!confirmPasswordError}
          />
          {!!confirmPasswordError && <p className="text-red-500 text-xs mt-1">{confirmPasswordError}</p>}
        </div>
        <div className="mt-4
                      xl:mt-12">
          <Button variant="primary" onClick={() => null}>
          {isLoading ? <Loader /> : "Change Password"}
          </Button>
        </div>
        <div className="flex mt-4 items-center gap-4
        xl:mt-12
      ">
          <Divider />
          <p className="text-sm text-secondary-color">Or</p>
          <Divider />
        </div>

        <div className="mt-4 
                      xl:flex xl:justify-center xl:items-center xl:gap-4 xl:mt-12">
          <div className="xl:basis-6/12">
            <Button
              onClick={() => null}
              variant="outline"
              Icon={GoogleIcon}
              hasIconPrefix
            >
              Google
            </Button>
          </div>
          <div className="mt-2 xl:basis-6/12 xl:mt-0">
            <Button
              onClick={() => null}
              variant="outline"
              Icon={FacebookIcon}
              hasIconPrefix
            >
              Facebook
            </Button>
          </div>
        </div>
        <div className="text-center mt-4
                      xl:mt-8">
          <p className="text-sm">
            Remembered your password?
            <span className="text-danger-color font-bold inline-block ml-1">
              <a href={ROUTES.LOGIN}>Login</a>
            </span>
          </p>
        </div>
      </form>
    </div>
  )
}

export default ResetPassword