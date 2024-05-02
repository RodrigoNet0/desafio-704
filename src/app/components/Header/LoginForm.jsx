'use client'
import React, { useState } from 'react';
import apiGatos from '../../services/apiService.jsx';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiGatos.logarConta(formData);
      console.log('Resposta da API:', response);
      // Faça algo com a resposta, como redirecionar para outra página ou exibir uma mensagem de sucesso
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      // Trate o erro, como exibir uma mensagem de erro para o usuário
    }
  };

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          E-mail
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Senha
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Entrar
        </button>
      </div>
    </form>
  );
};

export default LoginForm;