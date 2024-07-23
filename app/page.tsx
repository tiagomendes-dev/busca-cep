import Search from "@/components/search";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-4 pt-40">
      <h1 className="text-5xl font-bold uppercase">
        busca.<span className="text-indigo-500">CEP</span>
      </h1>
      <Search />
    </main>
  );
}
