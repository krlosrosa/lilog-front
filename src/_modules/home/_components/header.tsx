export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Lilog</h1>
        <nav className="space-x-6">
          <a href="#funcionalidades" className="text-gray-700 hover:text-blue-600">Funcionalidades</a>
          <a href="#beneficios" className="text-gray-700 hover:text-blue-600">Benefícios</a>
          <a href="#contato" className="text-gray-700 hover:text-blue-600">Contato</a>
        </nav>
      </div>
    </header>
  );
}