import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import { ROUTES } from "./routes";
import { Protected } from "./components";
import App from "./App";
import ErrorPage from "./pages/error-page";
import Dashboard from "./pages/dashboard";
import LandingPage from "./pages/landing-page";
import Auth from "./pages/auth";
import PrivacyNotice from "./pages/privacy-notice";
import TermsOfUse from "./pages/terms-of-use";
import Listing from "./pages/dashboard/listing";
import Guest from "./pages/dashboard/guest";
import Room from "./pages/dashboard/room";
import Booking from "./pages/dashboard/booking";
import Report from "./pages/dashboard/report";
import Setting from "./pages/dashboard/setting";
import UpdateListing from "./pages/dashboard/listing/update";
import CreateListing from "./pages/dashboard/listing/create";
import BookListing from "./pages/dashboard/listing/book-listing";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Protected><App /></Protected>,
    loader: () => import("./App"),
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Dashboard />,
      },
      {
        path: ROUTES.LISTING,
        element: <Listing />
      },
      {
        path: ROUTES.UPDATE_LISTING,
        element: <UpdateListing />
      },
      {
        path: ROUTES.CREATE_LISTING,
        element: <CreateListing />
      },
      {
        path: ROUTES.BOOK_LISTING,
        element: <BookListing />
      },
      {
        path: ROUTES.GUEST,
        element: <Guest />
      },
      {
        path: ROUTES.ROOM,
        element: <Room />
      },
      {
        path: ROUTES.BOOKING,
        element: <Booking />
      },
      {
        path: ROUTES.REPORT,
        element: <Report />
      },
      {
        path: ROUTES.SETTING,
        element: <Setting />
      }
    ],
  },
  {
    path: ROUTES.LANDING,
    element: <LandingPage />,
  },
  {
    path: ROUTES.LOGIN,
    element: <Auth />,
  },
  {
    path: ROUTES.REGISTER,
    element: <Auth />,
  },
  {
    path: ROUTES.FORGET_PASSWORD,
    element: <Auth />,
  },
  {
    path: ROUTES.RESET_PASSWORD,
    element: <Auth />,
  },
  {
    path: ROUTES.PASSWORD_CHANGED,
    element: <Auth />,
  },
  {
    path: ROUTES.VERIFY_ACCOUNT,
    element: <Auth />,
  },
  {
    path: ROUTES.PRIVACY_NOTICE,
    element: <PrivacyNotice />
  },
  {
    path: ROUTES.TERMS_OF_USE,
    element: <TermsOfUse />
  }
]);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
