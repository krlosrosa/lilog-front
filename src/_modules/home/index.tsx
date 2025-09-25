import Header from "./_components/header";
import Footer from "./_components/footer";
import CardFuncionalidade from "./_components/cardFuncionalidade";

export default function Home() {
  return (
    <div>
      <Header />

      {/* Banner Principal */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-4xl font-bold mb-4">Soluções Logísticas Inteligentes</h1>
          <p className="text-gray-700 mb-6">Planeje rotas e acompanhe a produtividade da sua equipe de forma prática e eficiente.</p>
          <a href="#funcionalidades" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Conheça as funcionalidades</a>
        </div>
      </section>

      {/* Funcionalidades */}
      <section id="funcionalidades" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Funcionalidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CardFuncionalidade
              title="Impressão de Mapas"
              description="Visualize e planeje rotas de forma prática."
              color="bg-blue-100"
            />
            <CardFuncionalidade
              title="Gestão de Produtividade"
              description="Monitore a produtividade de equipes de forma eficiente."
              color="bg-green-100"
            />
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Por que escolher o LogiApp?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Eficiência</h3>
              <p className="text-gray-700">Reduza o tempo gasto em planejamento e monitoramento.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Organização</h3>
              <p className="text-gray-700">Mantenha todas as informações de logística e produtividade centralizadas.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Praticidade</h3>
              <p className="text-gray-700">Interface simples e fácil de usar, acessível para qualquer usuário.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
