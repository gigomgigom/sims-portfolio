import axios from "axios";

function uploadImg(data) {
    return axios.post(
        "http://localhost/api/article/upload_editor_image",
        data
    );
}
function deleteImg(date, fileName) {
    return axios.delete(
        "http://localhost/api/article/delete_editor_image/"+date+"/"+fileName
    )
}
export default {
    uploadImg,
    deleteImg
}