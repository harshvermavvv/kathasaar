import Link from "next/link";
import Image from "next/image";

export default function VratCard({ title, slug, image }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 text-center hover:shadow-lg transition">
      {image && (
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="mx-auto mb-2"
        />
      )}
      <h3 className="text-xl font-semibold text-yellow-700 dark:text-yellow-400 mb-2">{title}</h3>
      <Link href={`/vratkatha/${slug}`}>
        <button className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded">
          कथा देखें
        </button>
      </Link>
    </div>
  );
}
