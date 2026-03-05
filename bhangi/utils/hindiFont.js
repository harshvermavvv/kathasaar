import { jsPDF } from "jspdf";
import hindiFont from "./HindifontBase64"; // base64 encoded font (I'll give you file)

export const registerHindiFont = () => {
  jsPDF.API.events.push(['addFonts', function () {
    this.addFileToVFS("Hindi-Regular.ttf", hindiFont);
    this.addFont("Hindi-Regular.ttf", "Hindi-Regular", "normal");
  }]);
};
