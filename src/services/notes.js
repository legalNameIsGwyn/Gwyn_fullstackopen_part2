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

const remove = id => {
    return axios.delete(`${url}/${id}`)
}

const updateNum = person => {
    return axios.put(`${url}/${person.id}`,person)
}

export default {getAll, create, remove, updateNum}