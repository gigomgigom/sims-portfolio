import axios from "axios";

function uploadImg(data) {
    return axios.post(
        "http://localhost/api/article/upload_editor_image",
        data
    );
}

export default {
    uploadImg
}