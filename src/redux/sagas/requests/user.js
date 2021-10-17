import axios from "axios";

export const requestGetUser = () => {
  return axios.request({
    method: "get",
    url: "https://my-json-server.typicode.com/Smriti96311/demo/user"
  });
};
