import axios from 'axios'

export default class SellerService {

    static async getAll() {
        return axios.get('/api/sellers')
    }

    static async createSeller(params)
    {
        return axios.post('/api/sellers', params)
    }
}