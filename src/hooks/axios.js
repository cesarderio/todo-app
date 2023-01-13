import axios from "axios";

export default axios.create({
  baseURL: "https://api-js401.herokuapp.com",
})



  // const ApiList = async (username, password) => {
  //   let ApiListConfig = {
  //     baseURL: "https://api-js401.herokuapp.com",
  //     url: "/get",
  //     method: "get",
  //     auth: { username, password },
  //   };
  // let response = await axios(ApiListConfig)
// }
