"use client";

import api from "@/app/api/api";
import { useState } from "react";
import { IMaskInput } from "react-imask";

export default function Search() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState<any>({});

  const handleSearch = async () => {
    if (input === "") {
      alert("Preencha algum número de CEP!");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      const data = response.data;
      if (data) {
        setCep(data);
        setInput("");
      } else {
        alert("Ops, erro ao buscar.");
        setInput("");
      }
    } catch (error) {
      console.error(error);
      alert("Ops, erro ao buscar.");
      setInput("");
    }
  };

  return (
    <>
      <div className="group flex w-fit items-center rounded-full bg-indigo-100 transition hover:bg-indigo-200">
        <div className="relative rounded-full bg-zinc-200 shadow">
          <IMaskInput
            mask="00000-000"
            value={input}
            onChange={(e) => setInput(e.currentTarget.value)}
            placeholder="Digite o CEP desejado"
            className="bg-transparent px-4 py-2 outline-none"
            autoComplete="none"
          />
        </div>
        <button
          className="pl-4 pr-6 text-indigo-600 transition group-hover:text-indigo-800"
          onClick={handleSearch}
        >
          Buscar
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <h2 className="px-4 text-center">
          {cep.logradouro ?? ""}, {cep.bairro ?? ""} - {cep.localidade ?? ""}/
          {cep.uf ?? ""} &#40;{cep.cep}&#41;
        </h2>
      )}
    </>
  );
}
