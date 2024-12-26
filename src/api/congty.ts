import axios from "@/lib/axios";
import { csrf } from "@/lib/csrf";
import { CongTyRequest } from "@/types/congty";

const congtyApiUrl = "/api/congties";

export const getCongtys = ({
  page = 1,
  per_page = 10,
  search = "",
}: {
  page?: number;
  per_page?: number;
  search?: string;
}) => {
  return axios.get(congtyApiUrl, { params: { page, per_page, search } });
};

export const addCongty = async (congty: CongTyRequest) => {
  await csrf();
  return axios.post(congtyApiUrl, congty);
};

export const updateCongty = async (congty: CongTyRequest, id: number) => {
  await csrf();
  return axios.put(`${congtyApiUrl}/${id}`, congty);
};

export const deleteCongty = async (id: number) => {
  await csrf();
  return axios.delete(`${congtyApiUrl}/${id}`);
};

export const deleteCongtys = async (ids: number[]) => {
  await csrf();
  return axios.delete(`${congtyApiUrl}/${ids}`);
};
