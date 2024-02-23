import axios from 'axios'
const url = `http://localhost:3002/persons`

const getAll = () => {
    const req = axios.get(url)
    return req.then(res => res.data)
}

const create = person => {
    const req = axios.post(url, person)
    return req.then(res => res.data)
}

export default {getAll, create}