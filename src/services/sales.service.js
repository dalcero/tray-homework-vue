import axios from 'axios'

export default class SaleService {

    static async getSalesBySeller(id) {
        return axios.get(`/api/sales/${id}/seller`)
    }

    static async createSale(params)
    {
        return axios.post('/api/sales', params)
    }

}