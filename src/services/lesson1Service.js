import axios from "axios";

class Lesson1Services {
  static async getAllLessons() {
    try {
      const response = await axios.get("http://localhost:9010/lesson1/getAll");
      console.log("response from lunch page is:", response.data);
      return response.data;
    } catch (e) {
      console.log("Error :", e);
    }
  }
}
export default Lesson1Services;