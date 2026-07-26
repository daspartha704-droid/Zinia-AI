type Props = {
  title: string;
};

export default function BoardCard({ title }: Props) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl hover:scale-105 transition">

      <h2 className="text-3xl font-bold text-black">
        {title}
      </h2>

      <p className="mt-3 text-gray-600">
        Classes 1 – 12
      </p>

      <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full">
        Explore
      </button>

    </div>
  );
}