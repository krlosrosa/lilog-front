export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-6 text-center text-gray-600">
        © {new Date().getFullYear()} Lilog. Todos os direitos reservados.
      </div>
    </footer>
  );
}