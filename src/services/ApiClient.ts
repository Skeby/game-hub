import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "894786f1c208498d90d2375de693e5de",
  },
});
