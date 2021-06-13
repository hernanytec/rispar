import Vue from "vue";
import axios from "axios";

Vue.prototype.$axios = axios;

const api = axios.create({
  baseURL: "https://api.rispar.dev",
  headers: {
    "content-type": "application/json",
    "access-control-allow-origin": "*"
  }
});

Vue.prototype.$api = api;

export { axios, api };
