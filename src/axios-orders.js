import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-d52ea.firebaseio.com'
})

export default instance
