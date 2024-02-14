import React from 'react'
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../../routes';

import TopLeftImage from "../../assets/images/auth/top-left.svg";
import BottomLeftImage from "../../assets/images/auth/bottom-left.svg";
import TopMiddle from "../../assets/images/auth/top-middle.svg";
import BottomRight from "../../assets/images/auth/bottom-right.svg";
import Illustration from "../../assets/images/auth/Illustration.svg";
import LoginPage from '../login';
import Register from '../register';
import ForgetPassword from '../forget-password';
import ResetPassword from '../reset-password';
import PasswordChanged from '../password-changed';
import VerifyAccount from '../verify-account';


const Auth = () => {
  const {pathname} = useLocation();

  const componentToRender = (param: string, cases: { [key: string]: React.ReactNode }) => {
    if (cases[param]) {
      return cases[param]
    } else {
      return cases.default
    }
  }

  return (
    <div className="relative h-screen w-screen">
      <div className="absolute top-0 left-0">
        <img src={TopLeftImage} alt="TopLeftImage" />
      </div>
      <div className="hidden absolute bottom-0 left-0 
                    xl:block">
        <img src={BottomLeftImage} alt="BottomLeftImage" />
      </div>
      <div className="absolute top-0 left-1/4">
        <img src={TopMiddle} alt="TopMiddle" />
      </div>
      <div className="hidden absolute bottom-0 right-0 xl:block">
        <img src={BottomRight} alt="BottomRight" />
      </div>
      <div
        className="absolute flex flex-col justify-center items-start gap-20 
                 top-10 left-10 right-10
                 sm:left-32 sm:right-32
                 md:left-40 md:right-40
                 lg:left-72 lg:right-72
                 xl:flex-row xl:gap-40 xl:left-40 xl:right-40 xl:top-40"
      >
        <div className="hidden
        xl:block
        xl:basis-6/12
      ">
          <img src={Illustration} alt="Illustration" />
        </div>
        {
          componentToRender(pathname.split("/")[1], {
            [ROUTES.LOGIN.split("/")[1]]: <LoginPage />,
            [ROUTES.REGISTER.split("/")[1]]: <Register />,
            [ROUTES.FORGET_PASSWORD.split("/")[1]]: <ForgetPassword />,
            [ROUTES.RESET_PASSWORD.split("/")[1]]: <ResetPassword />,
            [ROUTES.PASSWORD_CHANGED.split("/")[1]]: <PasswordChanged />,
            [ROUTES.VERIFY_ACCOUNT.split("/")[1]]: <VerifyAccount />
          })
        }
      </div>
    </div>

  )
}

export default Auth