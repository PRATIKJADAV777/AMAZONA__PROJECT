import axios from "axios";

class ApiHelper {
    constructor() {
        this.baseURL = "http://localhost:5100"
        // this.baseURL = "http://192.168.1.92:5100"
    }

    async GetUser() {
        return axios.get(`${this.baseURL}/admin/getuser`)
    }

    async AdminLogin(userDetails) {
        return axios.post(`${this.baseURL}/admin/login`, userDetails)
    }

    async InserUser(userDetails) {
        return axios.post(`${this.baseURL}/admin/adduser`, userDetails)
    }

    async DeleteUser(id) {
        return axios.delete(`${this.baseURL}/admin/dltuser/${id}`,)
    }

    async UpdateUser(id, data) {
        return axios.put(`${this.baseURL}/admin/upuser/${id}`, data)
    }

    async OtpVerify(data) {
        return axios.post(`${this.baseURL}/admin/verify`, data)
    }

    async FetchMedia() {
        return axios.get(`${this.baseURL}/admin/showmedia`)
    }

    async UploadMedia(File) {
        return axios.post(`${this.baseURL}/admin/upload` , File)
    }

    async AddProduct(data){
        return axios.post(`${this.baseURL}/admin/insertproduct`, data)
    }
}

const apiHelper = new ApiHelper()
export default apiHelper