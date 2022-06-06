import axios from 'axios'
class Produtos {
    constructor(){
        this.product_url = 'https://fakestoreapi.com/products'
    }
    async getLisPokemons(){
        let response 
        await axios.get(this.product_url)
        .then(res => {
            response = res.data
        }).catch(err => {
            response = err
        })
        return response
    }
}

export default new Produtos()