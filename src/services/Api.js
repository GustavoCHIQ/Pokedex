import axios from 'react-native-axios'

const Api = axios.create({
    baseURL: 'https://pokemon-db-json.herokuapp.com',
    timeout: 10000
})

export default Api