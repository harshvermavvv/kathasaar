"use client";
import { useParams } from "next/navigation";
import vratData from "../../../data/vratData";

export default function VratDetail() {
  const { id } = useParams();
  const vrat = vratData.find((item) => item.id.toString() === id);

  if (!vrat) {
    return <div className="text-center text-red-500 py-10">व्रत कथा नहीं मिली</div>;
  }

  const downloadTXT = () => {
    const element = document.createElement("a");
    const file = new Blob([`${vrat.title}\n\n${vrat.content}`], {
      type: "text/plain;charset=utf-8",
    });
    element.href = URL.createObjectURL(file);
    element.download = `${vrat.title}.txt`;
    document.body.appendChild(element);
    element.click();
  };

  const hasAudio = Boolean(vrat.audio);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl p-8 text-center border border-yellow-100">
        <h2 className="text-4xl font-bold text-yellow-700 mb-6">{vrat.title}</h2>

        <p className="text-xl font-bold text-gray-800 whitespace-pre-line leading-relaxed">
          {vrat.content}
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <button
            onClick={downloadTXT}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md shadow-lg transition duration-300"
          >
            कथा डाउनलोड करें
          </button>

          {hasAudio && (
            <audio
              controls
              className="w-full sm:w-[300px] mt-4 sm:mt-0 rounded-md shadow-md"
            >
              <source src={vrat.audio} type="audio/mpeg" />
              आपका ब्राउज़र ऑडियो टैग को सपोर्ट नहीं करता।
            </audio>
          )}
        </div>
      </div>
    </div>
  );
}
