/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import {jwtDecode} from "jwt-decode";
import { useMutation } from '@tanstack/react-query';
import { getUser } from '../api/user';

export const useDecodeJwt = () => {
  const [user, setUser] = React.useState({})
  const hotelBookSystemJWT = localStorage.getItem('hotelBookSystemJWT') as string
  const decoded = jwtDecode(hotelBookSystemJWT) as any;
  const { mutate, isError, isPending } = useMutation({
    mutationFn: getUser, onSuccess({ data }) {
      setUser(data.data.user)
    }
  });

  React.useEffect(() => {
    mutate({
      id: decoded._id
    })
  }, [decoded._id, mutate])


  return { user, isLoading:isPending, isError };
}