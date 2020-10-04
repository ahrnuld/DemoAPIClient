
import axios from 'axios'

const instance = axios.create({

baseURL: 'https://localhost:44365/'

});

instance.defaults.headers.common['Authorization'] = ''
instance.defaults.headers.get['Accepts'] = 'application/json'

export default instance;