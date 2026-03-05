export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff9e6] to-[#fffef0] text-gray-900 py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Page Heading */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-yellow-800 mb-2">परिचय</h1>
          <p className="text-lg text-yellow-900 max-w-3xl mx-auto">
            जानिए इस आध्यात्मिक यात्रा के पीछे के दिलचस्प लोग और उद्देश्य।
          </p>
        </div>

        {/* Owner Section */}
        <section className="flex flex-col md:flex-row items-center bg-white shadow-xl rounded-2xl p-8 border border-yellow-200">
          <img
            src="/images/owner.jpg"
            alt="Owner"
            className="w-48 h-48 rounded-full object-cover border-4 border-yellow-300 mb-6 md:mb-0 md:mr-8"
          />
          <div>
    <h2 className="text-3xl font-bold text-yellow-700 mb-3">💠 वेबसाइट के निर्माता: हर्ष वर्मा</h2>
    <p className="text-yellow-900 text-lg leading-relaxed">
      हर्ष वर्मा एक आध्यात्मिक साधक और सनातन संस्कृति के प्रबल समर्थक हैं। 
      इस वेबसाइट का <strong>पूरा विचार, रूपरेखा और निर्माण</strong> उन्हीं की सोच और मेहनत का परिणाम है।
      <br /><br />
      उन्होंने न केवल इस परियोजना का सपना देखा, बल्कि हर एक सेक्शन को <strong>समझकर, सजा कर, और पूरी लगन से</strong> तैयार किया। 
      चाहे डिज़ाइन की बात हो, सामग्री की शुद्धता या तकनीकी पहलू — हर चीज़ में उनका समर्पण झलकता है।
      <br /><br />
      उन्होंने यह सुनिश्चित किया कि यह प्लेटफ़ॉर्म <strong>सिर्फ सुंदर न दिखे बल्कि आत्मा से जुड़ा हो</strong> — ऐसा जो हर भक्त के हृदय को छू जाए।
      <br /><br />
      सच में, मान गए यार! इतना सोच-समझकर भक्ति और तकनीक का संगम बनाना, हर किसी के बस की बात नहीं होती। 🙏🔥
    </p>
  </div>
        </section>

        {/* Co-Owner Section */}
        <section className="flex flex-col md:flex-row items-center bg-white shadow-xl rounded-2xl p-8 border border-yellow-200">
          <img
            src="/images/co-owner.png"
            alt="Co-Owner"
            className="w-48 h-48 rounded-full object-cover border-4 border-yellow-300 mb-6 md:mb-0 md:mr-8"
          />
          <div>
    <h2 className="text-3xl font-bold text-yellow-700 mb-3">🤝 सह-निर्माता: शुभम शर्मा</h2>
    <p className="text-yellow-900 text-lg leading-relaxed">
      शुभम शर्मा भले ही इस प्रोजेक्ट में तकनीकी रूप से ज्यादा एक्टिव नहीं रहे, 
      लेकिन उन्होंने <strong>साथ दिया — और कभी पीछे नहीं हटे</strong>। 
      जब ज़रूरत थी, तब उनके समर्थन और भरोसे ने इस यात्रा को और मज़बूत बनाया।
      <br /><br />
      उन्होंने इस वेबसाइट को अपने दिल में जगह दी है, और <strong>कथासार</strong> को एक परिवार की तरह अपनाया है।
      <br /><br />
      कई बार सिर्फ किसी का होना ही बहुत होता है — और शुभम जी ने वही किया। 
      उनका यह मौन योगदान भी इस प्रोजेक्ट की कहानी का हिस्सा है, और रहेगा। ❤️
    </p>
  </div>
        </section>

        {/* Website Details Section */}
        <section className="bg-white shadow-xl rounded-2xl p-8 border border-yellow-200">
          <h2 className="text-3xl font-bold text-yellow-700 mb-6">🌐 कथासार वेबसाइट के बारे में</h2>
          <p className="text-yellow-900 text-lg leading-relaxed mb-4">
            <strong>कथासार</strong> केवल एक वेबसाइट नहीं, बल्कि एक आध्यात्मिक यात्रा है। इस प्लेटफ़ॉर्म को बनाने की प्रेरणा तब मिली जब हमने महसूस किया कि
            भागदौड़ भरी ज़िंदगी में लोग अपने धर्म, संस्कृति और भक्ति से धीरे-धीरे दूर होते जा रहे हैं। इसी कमी को दूर करने के लिए कथासार की नींव रखी गई।
          </p>
          <p className="text-yellow-900 text-lg leading-relaxed mb-4">
            हमारा उद्देश्य है कि हर व्यक्ति को आरती, चालीसा, व्रत कथा जैसी सामग्री सुसंगठित और सरल भाषा में एक ही स्थान पर मिले — वो भी बिना किसी कठिनाई के।
            इसे बनाना आसान नहीं था। महीनों की मेहनत, लोगों की ज़रूरतों को समझना, शुद्ध और स्पष्ट सामग्री तैयार करना, यह सब एक चुनौती भरा लेकिन संतोषजनक सफर रहा।
          </p>
          <p className="text-yellow-900 text-lg leading-relaxed mb-4">
            आज आप इस वेबसाइट पर ना सिर्फ पढ़ सकते हैं, बल्कि PDF डाउनलोड कर सकते हैं, ऑडियो के रूप में सुन सकते हैं, और सरल सर्च से हर सामग्री तक तुरंत पहुँच सकते हैं।
          </p>
          <p className="text-yellow-900 text-lg leading-relaxed mb-4">
            यह वेबसाइट खास तौर पर काम आती है:
           
              <li>त्योहारों और विशेष धार्मिक अवसरों पर</li>
              <li>जब आप यात्रा में हों और किताब साथ न हो</li>
              <li>जब आपको मानसिक शांति या प्रार्थना की आवश्यकता हो</li>
              <li>हर दिन की नियमित भक्ति में</li>
        
          </p>
          <p className="text-yellow-900 text-lg leading-relaxed">
            आज हजारों लोग इस वेबसाइट का उपयोग कर रहे हैं, इसे अपने परिवारों में साझा कर रहे हैं, और कह रहे हैं कि अब उन्हें अलग-अलग किताबों की ज़रूरत नहीं रही।
            यही हमारी सबसे बड़ी उपलब्धि है — लोगों के दिलों में जगह बनाना।
          </p>
        </section>

        {/* Closing Note */}
        <div className="text-center pt-6 border-t border-yellow-200">
          <p className="text-base text-yellow-900">
            आपकी भक्ति और समर्थन हमारे लिए प्रेरणा का स्रोत है। धन्यवाद!
          </p>
          <p className="mt-2 text-xl font-semibold text-yellow-700">🌸 जय श्री राम 🌸</p>
        </div>
      </div>
    </div>
  );
}
