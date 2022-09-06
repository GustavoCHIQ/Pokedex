import axios from 'react-native-axios'

const Api = axios.create({
    baseURL: 'https://swapi.dev/api/people',
    timeout: 10000
})

export default Api