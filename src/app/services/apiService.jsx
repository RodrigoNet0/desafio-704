import axios from 'axios';
import { EXPORT_DETAIL } from 'next/dist/shared/lib/constants';

const API = axios.create({ baseURL: `https://nxcuamed0k.execute-api.us-east-1.amazonaws.com`, headers: { 'Authorization': 'eyJraWQiOiJ4ZWhLaCs5bURtT3M1TVNoVlI0YnVic0p4OGlEd0U0R1hWZ21rN1JxQm9VPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJmNDM4ZDQ3OC0wMDMxLTcwYWUtNGU2ZC03NGIwNjdjNWVjNWEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9sNEltRDRWeU0iLCJjbGllbnRfaWQiOiI2cTlkbWx2N2UyaWtxMXJhNDlzcjlpaWxpdSIsIm9yaWdpbl9qdGkiOiJlZmUyZWM0YS0xODljLTRmNGYtOGFmYS05M2FlOTg0MmQzMmIiLCJldmVudF9pZCI6ImQ5N2VlNzNmLTg2N2ItNDE3OS1iNGU0LTY3MWU2YjgwN2E0MCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MTQ2NzEzNzksImV4cCI6MTcxNDY4OTM3OSwiaWF0IjoxNzE0NjcxMzc5LCJqdGkiOiI3MTJiNTI3Yi1hYzcxLTQ4NjYtYjE1NS05ZmE5NGMzYjk5ODAiLCJ1c2VybmFtZSI6Imp1bGlhbmEuY2FtcG9zcm9kcmlndWVzN0BnbWFpbC5jb20ifQ.PTVQam2NO-9QYq_ZMydqAcfIp7fQObE1vnoITFEKawW9jBNCZeaqYzkcFM5dmKlnHhH774XvxEMnj9TrN7hAhTWnYigCtaKBYcZZ60LvhlEMYvndvRu9KRkzwhNV7lC4aV_JrvOdfYcG3kdPE60YZW0tKBvErCfRUe0Wecn3keM2Wn2f00dfm71vzfl8LlNOovQd_0QKwvKzY-hMreb0C_Oq-XSDtpseFVVbOJWiAUOulMrEHX5w_rfyo41ea4wJ0KO42FHwnfYnp6UZDRL5Gd_xFzQrqbGt8Tgi_iiViBA7aCQ-Hw0ZYMeJFBylaX-WYWGNc8GKl4MYQNei1QIbkw' } });

async function criarConta(dados) {
   
    return await API.post(`/auth/signup`, dados);
} 
async function logarConta(dados) {
   
    return await API.post(`/auth/sigin`, dados);
} 
async function cadastrarGato(dados) {
   
    return await API.post(`/auth/cats`, dados);
} 
async function buscarGato(dados) {
   
    return await API.get(`/auth/cats`, dados);
} 

async function deletarGato(dados) {
   
    return await API.delete(`/auth/cats`, dados);
}

async function cadastrarRaca(dados) {
   
    return await API.post(`/auth/breeds`, dados);
} 
async function buscarRaca(dados) {
   
    return await API.get(`/auth/breeds`, dados);
} 
async function cadastrarIdade(dados) {
   
    return await API.post(`/auth/breeds`, dados);
} 
async function buscarIdade(dados) {
   
    return await API.get(`/auth/breeds`, dados);
} 


const apiGatos = {
    criarConta,
    logarConta,
    cadastrarGato,
    buscarGato,
    deletarGato,
    cadastrarRaca,
    buscarRaca,
    cadastrarIdade,
    buscarIdade
}

export default apiGatos;


