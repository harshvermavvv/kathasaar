"use client";
import { useParams } from "next/navigation";
import aartiData from "../../../data/aartiData";

export default function AartiDetail() {
  const { id } = useParams();
  const aarti = aartiData.find((item) => item.id.toString() === id);

  if (!aarti) {
    return <div className="text-center text-red-500 py-10">आरती नहीं मिली</div>;
  }

  const downloadTXT = () => {
    const element = document.createElement("a");
    const file = new Blob([`${aarti.title}\n\n${aarti.content}`], {
      type: "text/plain;charset=utf-8",
    });
    element.href = URL.createObjectURL(file);
    element.download = `${aarti.title}.txt`;
    document.body.appendChild(element);
    element.click();
  };

  const hasAudio = Boolean(aarti.audio);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl p-8 text-center border border-yellow-100">
        <h2 className="text-4xl font-bold text-yellow-700 mb-6">{aarti.title}</h2>

        <p className="text-xl font-bold text-gray-800 whitespace-pre-line leading-relaxed">
          {aarti.content}
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <button
            onClick={downloadTXT}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md shadow-lg transition duration-300"
          >
            आरती डाउनलोड करें
          </button>

          {hasAudio && (
            <audio
              controls
              className="w-full sm:w-[300px] mt-4 sm:mt-0 rounded-md shadow-md"
            >
              <source src={aarti.audio} type="audio/mpeg" />
              आपका ब्राउज़र ऑडियो टैग को सपोर्ट नहीं करता।
            </audio>
          )}
        </div>
      </div>
    </div>
  );
}
