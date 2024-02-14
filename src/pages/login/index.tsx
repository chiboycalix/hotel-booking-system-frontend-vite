import React from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import EmailIcon from "../../assets/images/auth/email.svg";
import LockIcon from "../../assets/images/auth/lock.svg";
import GoogleIcon from "../../assets/images/auth/google.svg";
import FacebookIcon from "../../assets/images/auth/facebook.svg";

import { Button, Divider, Input, Loader } from "../../components";
import { ROUTES } from "../../routes";
import { IUseAuthMutation, login, googleLogin } from "../../api/auth";
import { generalHelpers } from "../../utils";


const LoginPage = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = React.useState({ email: "", password: "", confirm_password: "" })
  const [emailError, setEmailError] = React.useState<string | null>(null);
  const [passwordError, setPasswordError] = React.useState<string | null>(null);

  const { mutate, isLoading, isError, error, isSuccess }: IUseAuthMutation = useMutation({
    mutationFn: login, onSuccess({ data }) {
      localStorage.setItem("hotelBookSystemJWT", data.data.token)
    }
  });
  const { mutate: mutateGoogle }: any = useMutation({
    mutationFn: googleLogin, onSuccess({ data }) {
      console.log({ data })
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
    if (name === 'password') {
      setPasswordError(null)
    }
  }

  const handleLoginUser = (e: React.FormEvent) => {
    e.preventDefault()
    if (formValue.email.trim() === '') {
      setEmailError('Email cannot be empty.');
      return
    }

    if (formValue.email.trim() !== '' && !generalHelpers.isEmailValid(formValue.email)) {
      setEmailError('Please enter a valid email address.');
      return
    }

    if (formValue.password.trim() === '') {
      setPasswordError('Password cannot be empty.');
      return
    }

    mutate({
      email: formValue.email,
      password: formValue.password,
    })
  }

  React.useEffect(() => {
    if (isSuccess) {
      navigate(ROUTES.HOME)
    }
    if (isError) {
      navigate(ROUTES.LOGIN)
    }
  }, [isSuccess, isError, navigate])

  const handleGoogleSignIn = (e: React.FormEvent) => {
    e.preventDefault()
    mutateGoogle({})
  }

  return (
    <div className="w-full xl:basis-6/12">
      <p className="text-sm text-secondary-color">Login to your account</p>
      <h1 className="font-bold text-4xl mt-2">Welcome Back!</h1>
      {isError && <div
        className="break-words rounded-b-lg bg-danger-100 px-4 py-4 text-danger-700 mt-4">
        {error?.response?.data.message}
      </div>}
      <form className="mt-10 w-full relative" onSubmit={handleLoginUser}>
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
            value={formValue.email}
            hasError={!!emailError}
          />
          {!!emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
        </div>

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
        <div className="mt-2 text-end">
          <a
            href={ROUTES.FORGET_PASSWORD}
            className="text-end text-danger-color text-sm font-bold"
          >
            Forget Password?
          </a>
        </div>
        <div className="mt-4
                          xl:mt-12">
          <Button variant="primary" onClick={() => null}>
            {isLoading ? <Loader /> : "Login"}
          </Button>
        </div>
        <div className="flex mt-4 items-center gap-4
            xl:mt-12
          ">
          <Divider />
          <p className="text-sm text-secondary-color">Or</p>
          <Divider />
        </div>


        <div className="text-center mt-4
                          xl:mt-8">
          <p className="text-sm">
            Don't have an account?{" "}
            <span className="text-danger-color font-bold inline-block ml-1">
              <a href={ROUTES.REGISTER}>Sign Up</a>
            </span>
          </p>
        </div>
      </form>
      <form onSubmit={handleGoogleSignIn}>
      <div className="mt-4 
                          xl:flex xl:justify-center xl:items-center xl:gap-4 xl:mt-12">
          <div className="xl:basis-6/12">
            <Button
              onClick={() => null}
              variant="outline"
              Icon={GoogleIcon}
              hasIconPrefix
              // type="button"
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
      </form>
      
    </div>
  );
};

export default LoginPage;
