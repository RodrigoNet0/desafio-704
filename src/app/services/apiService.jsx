import axios from 'axios';

const API = axios.create({ baseURL: `https://nxcuamed0k.execute-api.us-east-1.amazonaws.com`, headers: { 
"Content-Type": "application/json",    
'Authorization': 'Bearer eyJraWQiOiJ4ZWhLaCs5bURtT3M1TVNoVlI0YnVic0p4OGlEd0U0R1hWZ21rN1JxQm9VPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI2NGE4ZjQzOC02MDAxLTcwZGUtODNiYy00ZjFhYWFjMzBiOTMiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9sNEltRDRWeU0iLCJjbGllbnRfaWQiOiI2cTlkbWx2N2UyaWtxMXJhNDlzcjlpaWxpdSIsIm9yaWdpbl9qdGkiOiJiMjZjOTlkNi01MTY3LTRjODEtYjBkOS0yYjQyYTI5ZDNjNTUiLCJldmVudF9pZCI6IjY2OThkMjUzLTJiN2QtNDcxMi04Y2M3LWUyN2MzZDgxMTBlMyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MTQ2NzUwODEsImV4cCI6MTcxNDY5MzA4MSwiaWF0IjoxNzE0Njc1MDgxLCJqdGkiOiI3Mjk5M2MyMi1mMjRmLTQ1ZmYtYWMxYy1jNTI3ODY2NzhmMGQiLCJ1c2VybmFtZSI6InJvYmVydEBlbWFpbC5jb20ifQ.CJmamtAkhk3aspeL_TDA-fF58wWTjqmjhLHoh3TOAX11JSm-O-HaUgVLv1smktqcHbio6xM3DsyDxil3kTh7fI6kde1ZxodfhULBwa_oBtyqPeoA8Sw_EqUQqD7av66kZeaUkwzeFMZ4NptyFyRTMXJR7zy4Mi-UWAxyM42LUdk6TyXFPdjA32v4VL461hGgjb7SKgrqiq21MBbsmdKCnA2vTohl_6q1K04Oir2XmHqESuthQnAhviXC9Sodb8ZBGfhkGQxC5Gf2NwHgQQV4PVKPYi2zuLYJwssuJk44uGptNOauBExbKUqTM56cfHqplMxWjKX9JNWPtBsx70mdMw' } });

async function criarConta(dados) {
   
    return await API.post(`/auth/signup`, dados);
} 
async function logarConta(dados) {
   
    return await API.post(`/auth/signin`, dados);
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


