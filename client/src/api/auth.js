import axios from "axios";


const API = 'http://localhost:4000/api'


// Crea una constante, toma como parametro user y realiza la petición post con el usuario.
export const registerRequest = user => axios.post(`${API}/register`, user);

