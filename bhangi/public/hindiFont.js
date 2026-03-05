import { jsPDF } from "jspdf";

// This registers a Hindi font (e.g. NotoSansDevanagari-Regular.ttf)
export const registerHindiFont = (doc) => {
  // Base64 string of your .ttf font file encoded using base64 (not raw!)
  const fontBase64 = 'AAEAAAALAIAAAwAwT1MvMg8SBJgAAAC8AAAAYGNtYXA...'; // Truncated

  doc.addFileToVFS("NotoSansDevanagari-Regular.ttf", fontBase64);
  doc.addFont("NotoSansDevanagari-Regular.ttf", "NotoSans", "normal");
};
