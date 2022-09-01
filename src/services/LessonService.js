import axios from "axios";

class LessonServices {
  static async getAllLessons() {
    try {
      const response = await axios.get("http://localhost:9010/lesson/getAll");
      console.log("response from This page:", response.data);
      return response.data;
    } catch (e) {
      console.log("Error :", e);
    }
  }
}
export default LessonServices;
