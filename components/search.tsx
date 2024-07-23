"use client";

import api from "@/app/api/api";
import { useState } from "react";

export default function Search() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({} as any);

  async function handleSearch() {
    if (input === "") {
      alert("Preencha algum número de CEP!");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    } catch {
      alert("Ops, erro ao buscar.");
      setInput("");
    }
  }

  return (
    <>
      <div className="group flex w-fit items-center rounded-full bg-indigo-100 group-hover:bg-red-200">
        <div className="rounded-full bg-zinc-200">
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent px-4 py-2 outline-none"
            placeholder="Digite o CEP desejado"
          />
        </div>
        <button
          className="group pl-4 pr-6 text-indigo-600 hover:text-indigo-400"
          onClick={handleSearch}
        >
          Buscar
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <div className="resultsArea">
          <h2>CEP: {cep.cep}</h2>
          <span>Rua: {cep.logradouro}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>
            Cidade: {cep.localidade}/{cep.uf}
          </span>
        </div>
      )}
    </>
  );
}
