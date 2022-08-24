import axios from "axios";
class LessonServices{

static async getAllLesson(){
try{
    const response = await axios.get("localhost:9010/lesson/getAll");
    console.log("response from lessons",response.data)
    return response.data
}catch(e){console.log("Error:>>>",e)}

}
}
export default LessonServices;