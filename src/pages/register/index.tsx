import React from "react";
import { useMutation } from "@tanstack/react-query";

import EmailIcon from "../../assets/images/auth/email.svg";
import UserIcon from "../../assets/images/auth/user.svg";
import LockIcon from "../../assets/images/auth/lock.svg";
import GoogleIcon from "../../assets/images/auth/google.svg";
import FacebookIcon from "../../assets/images/auth/facebook.svg";

import { Button, Divider, Input, Loader } from "../../components";
import { ROUTES } from "../../routes";
import { IUseAuthMutation, register } from "../../api/auth";
import { generalHelpers } from "../../utils";
import { useNavigate } from "react-router-dom";

interface FormValue {
  email: string;
  password: string;
  confirm_password: string;
  firstName: string;
  lastName: string;
}
const Register = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = React.useState<FormValue>({ email: "", password: "", confirm_password: "", firstName: "", lastName: "" })
  const [fistNameError, setFirstNameError] = React.useState<string | null>(null);
  const [lastNameError, setLastNameError] = React.useState<string | null>(null);
  const [emailError, setEmailError] = React.useState<string | null>(null);
  const [passwordError, setPasswordError] = React.useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = React.useState<string | null>(null);

  const { mutate, isLoading, isError, error, isSuccess }: IUseAuthMutation = useMutation({
    mutationFn: register, onSuccess({ data }) {
      localStorage.setItem("hotelBookSystemJWT", data.data.token)
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
    if (name === 'firstName') {
      setFirstNameError(null);
    }
    if (name === 'lastName') {
      setLastNameError(null);
    }
    if (name === 'password') {
      setPasswordError(null)
    }
    if (name === 'confirm_password') {
      setConfirmPasswordError(null);
    }
  }
  const validateRegistration = (formValue: FormValue) => {
    if (formValue.firstName.trim() === '') {
      setFirstNameError('First Name cannot be empty.');
      return
    }

    if (formValue.lastName.trim() === '') {
      setLastNameError('Last Name cannot be empty.');
      return
    }

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

    if (formValue.confirm_password.trim() === '') {
      setConfirmPasswordError('Confirm password cannot be empty')
      return
    }

    if (formValue.password !== formValue.confirm_password) {
      setConfirmPasswordError('Passwords do not match.')
      return
    }
  }
  const handleRegisterUser = (e: React.FormEvent) => {
    e.preventDefault()
    validateRegistration(formValue)
    mutate({
      email: formValue.email,
      password: formValue.password,
      firstName: formValue.firstName,
      lastName: formValue.lastName
    })
  }

  React.useEffect(() => {
    if (isSuccess) {
      navigate(ROUTES.HOME)
    }
    if (isError) {
      navigate(ROUTES.REGISTER)
    }
  }, [isSuccess, isError, navigate])

  return (
    <div className="w-full xl:basis-6/12">
      <p className="text-sm text-secondary-color">Create new account</p>
      <h1 className="font-bold text-4xl mt-2">Registration</h1>
      {isError && <div
        className="break-words rounded-b-lg bg-danger-100 px-4 py-4 text-danger-700 mt-4">
        {error?.response?.data?.message}
      </div>}
      <form className="mt-10 w-full relative" onSubmit={handleRegisterUser}>
        <div className="flex gap-2">
          <div className="basis-1/2">
            <Input
              name="firstName"
              id="firstName"
              placeHolder="First Name"
              type="text"
              onChange={handleChange}
              isAuthInput
              hasIconPrefix
              Icon={UserIcon}
              value={formValue.firstName}
              hasError={!!fistNameError}
            />
            {!!fistNameError && <p className="text-red-500 text-xs mt-1">{fistNameError}</p>}
          </div>
          <div className="flex-1">
            <Input
              name="lastName"
              id="lastName"
              placeHolder="Last Name"
              type="text"
              onChange={handleChange}
              isAuthInput
              hasIconPrefix
              Icon={UserIcon}
              value={formValue.lastName}
              hasError={!!lastNameError}
            />
            {!!lastNameError && <p className="text-red-500 text-xs mt-1">{lastNameError}</p>}
          </div>
        </div>

        <div className="mt-10">
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

        <div className="mt-2 text-start">
          <p className="text-sm">
            By signing below, you agree to the
            <span className="text-danger-color font-bold inline-block mx-1">
              <a href={ROUTES.TERMS_OF_USE}>Terms of use</a>
            </span>
            and
            <span className="text-danger-color font-bold inline-block ml-1">
              <a href={ROUTES.PRIVACY_NOTICE}>privacy notice</a>
            </span>
          </p>

        </div>
        <div className="mt-4
                      xl:mt-6">
          <Button variant="primary" onClick={() => null}>
            {isLoading ? <Loader /> : "Sign Up"}
          </Button>
        </div>
        <div className="flex mt-4 items-center gap-4
        xl:mt-6
      ">
          <Divider />
          <p className="text-sm text-secondary-color">Or</p>
          <Divider />
        </div>

        <div className="mt-4 
                      xl:flex xl:justify-center xl:items-center xl:gap-4 xl:mt-6">
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
            Already have an account?
            <span className="text-danger-color font-bold inline-block ml-1">
              <a href={ROUTES.LOGIN}>Login</a>
            </span>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Register