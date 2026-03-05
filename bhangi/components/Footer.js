export default function Footer() {
  return (
    <footer className="bg-[#4b3621] text-[#fdf3e7] py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-2">🙏 कथासार</h2>
          <p className="text-sm leading-relaxed">
            भक्ति, आरती, चालीसा और व्रत कथाओं का दिव्य संग्रह।
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">झलकियाँ</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/aarti" className="hover:underline">आरती</a></li>
            <li><a href="/chalisa" className="hover:underline">चालीसा</a></li>
            <li><a href="/vratkatha" className="hover:underline">व्रत कथा</a></li>
            <li><a href="/about" className="hover:underline">हमारे बारे में</a></li> {/* ✅ New About Link */}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">संपर्क करें</h3>
          <p className="text-sm">Email: <span className="underline">kathasaar@gmail.com</span></p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">सोशल मीडिया</h3>
          <p className="text-sm">जल्द आ रहा है...</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-[#fcebd1] mt-12 leading-relaxed border-t border-[#a0835e] pt-6">
        <p>© 2025 कथासार. सभी अधिकार सुरक्षित।</p>
        <p>इस वेबसाइट पर सभी आरती, चालीसा, व्रत कथाएं केवल भक्ति भावना हेतु हैं।</p>
      </div>
    </footer>
  );
}
