import axios from "axios"
import { BASE, REST, VERSION, ALL } from './constants.js'

export const getAllCountries = () => {
    return axios.get(BASE + REST + VERSION + ALL)
}