import axios from "@/lib/axios";
import { csrf } from "@/lib/csrf";
import { CongTyRequest } from "@/types/congty";

const congtyApiUrl = "/api/congties";

export const getCongtys = () => {
  return axios.get(congtyApiUrl);
};

export const addCongty = async (congty: CongTyRequest) => {
  await csrf();
  return axios.post(congtyApiUrl, congty);
};

export const updateCongty = async (congty: CongTyRequest) => {
  await csrf();
  return axios.put(congtyApiUrl, congty);
};
