import React from "react";
import { useMutation } from "@tanstack/react-query";
import EmailIcon from "../../assets/images/auth/email.svg";
import GoogleIcon from "../../assets/images/auth/google.svg";
import FacebookIcon from "../../assets/images/auth/facebook.svg";
import { Button, Divider, Input, Loader } from "../../components";
import { ROUTES } from "../../routes";
import { IUseAuthMutation, forgetPassword } from "../../api/auth";
import { generalHelpers } from "../../utils";

const ForgetPassword = () => {
  const [formValue, setFormValue] = React.useState({ email: "" })
  const [successMessage, setSuccessMessage] = React.useState("")
  const [emailError, setEmailError] = React.useState<string | null>(null);

  const { mutate, isLoading, isError, error, isSuccess }: IUseAuthMutation = useMutation({
    mutationFn: forgetPassword, onSuccess({data}) {
      setSuccessMessage(data.data.message)
    }
  });

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    setFormValue({
      ...formValue,
      [name]: value
    })
    if (name === 'email') {
      setEmailError(null);
    }
  }

  const handleForgetPassword = (e: React.FormEvent) => {
    e.preventDefault()
    if (formValue.email.trim() === '') {
      setEmailError('Email cannot be empty.');
      return
    }

    if (formValue.email.trim() !== '' && !generalHelpers.isEmailValid(formValue.email)) {
      setEmailError('Please enter a valid email address.');
      return
    }

    mutate({
      email: formValue.email,
    })
  }


  return (
    <div className="w-full xl:basis-6/12">
      <p className="text-sm text-secondary-color">Forget your password</p>
      <h1 className="font-bold text-4xl mt-2">Forget Password</h1>
      <p className='text-sm text-secondary-color mt-8 xl:w-3/4'>Please enter your email address below
        you will receive a verification link</p>
      {isError && <div
        className="break-words rounded-b-lg bg-danger-100 px-4 py-4 text-danger-700 mt-4">
        {error?.response?.data.message}

      </div>}
      {isSuccess && <div className="break-words rounded-b-lg bg-success-100 px-4 py-4 text-success-700 mt-4">
        {successMessage}
      </div>}
      <form className="mt-10 w-full relative" onSubmit={handleForgetPassword}>
        <div>
          <Input
            name="email"
            id="email"
            placeHolder="Email Address"
            type="text"
            onChange={handleChange}
            isAuthInput
            hasIconPrefix
            Icon={EmailIcon}
          />
          {!!emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
        </div>
        <div className="mt-4
                      xl:mt-12">
          <Button variant="primary" onClick={() => null}>
            {isLoading ? <Loader /> : "Continue"}
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

export default ForgetPassword