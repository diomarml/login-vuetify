import axios from "axios";
import * as auth from "../api/User"

export function http() {
  return axios.create({

    baseURL: 'http://localhost:4000',
    headers: {
      // token:auth.getAccessToken()
    }
  });
}
