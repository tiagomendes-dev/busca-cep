import Search from "@/components/search";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-4">
      <h1 className="text-5xl font-bold uppercase">
        busca.<span className="text-indigo-500">CEP</span>
      </h1>
      <Search />
    </main>
  );
}
