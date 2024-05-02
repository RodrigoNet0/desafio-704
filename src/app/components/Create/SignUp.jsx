'use client'

import { useState } from "react";

export default function SignUp(){
    const [formData, setFormData] = useState({
        nameUp: '',
        emailUP: '',
        passwordUp: ''
      });
    
      const handleChangeUp = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
      };
    
      const handleSubmitUp = async (e) => {
        e.preventDefault();
        try {
          const response = await apiGatos.criarConta(formData);
          console.log('Resposta da API:', response);
          // Faça algo com a resposta, como redirecionar para outra página ou exibir uma mensagem de sucesso
        } catch (error) {
          console.error('Erro ao enviar formulário:', error);
          // Trate o erro, como exibir uma mensagem de erro para o usuário
        }
      };
    return(
        <form>
             <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Name
                </label>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="nameUp"
                type="name"
                placeholder="name"
                value={formData.nameUp}
                onChange={handleChangeUp}
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                E-mail
                </label>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="emailUP"
                type="email"
                placeholder="E-mail"
                value={formData.emailUP}
                onChange={handleChangeUp}
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Senha
                </label>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="passwordUp"
                type="password"
                placeholder="Senha"
                value={formData.passwordUp}
                onChange={handleChangeUp}
                />
            </div>
                <div className="flex items-center justify-between">
                <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                >
                Criar
                </button>
            </div>
        </form>
    )
}