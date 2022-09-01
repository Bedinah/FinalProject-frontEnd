import axios from "axios";

class Lesson2Services {
  static async getAllLessons() {
    try {
      const response = await axios.get("http://localhost:9010/lesson2/getAll");
      console.log("response from dinner page is:", response.data);
      return response.data;
    } catch (e) {
      console.log("Error :", e);
    }
  }
}
export default Lesson2Services;