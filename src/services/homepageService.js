import axios from "axios";

class HomeServices {
  static async getAllHome() {
    try {
      const response = await axios.get("http://localhost:9010/home/getAll");
      console.log("response from Homepage:", response.data);
      return response.data;
    } catch (e) {
      console.log("Error :", e);
    }
  }
}
export default HomeServices;
