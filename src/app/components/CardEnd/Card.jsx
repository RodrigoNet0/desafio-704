"use client";


import React, { useState } from 'react';

function CatCard() {
  const [image, setImage] = useState(null);
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log({ image, breed, age, name });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
     
      <div>
        <label htmlFor="imageUpload" className="block text-sm font-medium text-gray-700">
          Upload de Imagem
        </label>
        <input
          id="imageUpload"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
     
      <div>
        <label htmlFor="breed" className="block text-sm font-medium text-gray-700">
          Raça do Gato
        </label>
        <input
          id="breed"
          type="text"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="age" className="block text-sm font-medium text-gray-700">
          Idade
        </label>
        <input
          id="age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nome
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
     
      <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Enviar
      </button>
    </form>
  );
}

export default CatCard;
