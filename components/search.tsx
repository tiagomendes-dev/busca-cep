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
            value={input.replace(/\D/g, "").slice(0, 8)}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent px-4 py-2 outline-none"
            placeholder="Digite o CEP desejado"
            autoComplete="none"
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
        <h2>
          {cep.logradouro}, {cep.bairro} - {cep.localidade}/{cep.uf}
        </h2>
      )}
    </>
  );
}
