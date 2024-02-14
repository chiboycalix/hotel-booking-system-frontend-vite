import { axiosFetch } from "../configs";
import { ADD_AUTHORIZATION_TOKEN } from "../constants";
import { IListing } from "../interface/listing";

interface AxiosError {
  response: {
    data: {
      data: {
        error: string;
      };
    };
  };
}
export interface IUseListingMutation {
  mutate: (payload: {}) => void;
  isLoading: boolean;
  isError: boolean;
  error: AxiosError | null;
  isSuccess: boolean;
}

export const getAllListings = async () => {
  return axiosFetch(ADD_AUTHORIZATION_TOKEN).get(`/listing`);
};

export const updateListing = async ({ _id, ...rest }: IListing) => {
  return axiosFetch(ADD_AUTHORIZATION_TOKEN).put(`/listing/${_id}`, rest, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const createListing = async (payload: IListing) => {
  return axiosFetch(ADD_AUTHORIZATION_TOKEN).post(`/listing`, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteListing = async ({ _id }: IListing) => {
  return axiosFetch(ADD_AUTHORIZATION_TOKEN).delete(`/listing/${_id}`);
};
