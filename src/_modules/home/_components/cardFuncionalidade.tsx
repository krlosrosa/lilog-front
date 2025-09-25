interface CardFuncionalidadeProps {
  title: string;
  description: string;
  color: string;
}

export default function CardFuncionalidade({ title, description, color }: CardFuncionalidadeProps ) {
  return (
    <div className={`p-6 rounded-xl shadow-md hover:shadow-lg transition ${color}`}>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}