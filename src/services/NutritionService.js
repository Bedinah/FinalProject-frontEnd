import axios from "axios";

class NutritionServices {
  static async getAllNutrition() {
    try {
      const response = await axios.get(
        "http://localhost:9010/nutrition/getAll"
      );
      console.log("response from the page:", response.data);
      return response.data;
    } catch (e) {
      console.log("Error :", e);
    }
  }
}
export default NutritionServices;
