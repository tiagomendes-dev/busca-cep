export default function Header() {
  return (
    <header className="flex items-center justify-center py-4">
      <p className="text-indigo-500 first-letter:capitalize">
        {new Date().toLocaleDateString("pt-BR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </header>
  );
}
