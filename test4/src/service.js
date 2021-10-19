// https://api.spacexdata.com/v4/launches
import axios from 'axios';

export const getAllLaunches = ()=> axios.get('https://api.spacexdata.com/v4/launches')
// export const getAllRockets = ()=> axios.get('https://api.spacexdata.com/v4/rockets')
export const getOneRocket = (id)=> axios.get(`https://api.spacexdata.com/v4/rockets/${id}`)