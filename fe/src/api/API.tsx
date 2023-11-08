import axios from "axios";

const url: string = "http://localhost:2244/api/v1";

export const getKids = async () => {
  return await axios.get(`${url}/find-kid`).then((res: any) => {
    return res.data.data;
  });
};

export const sortedKids = async () => {
  return await axios.get(`${url}/sort-kid`).then((res: any) => {
    return res.data.data;
  });
};
