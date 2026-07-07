import React, { useState } from "react";

const FAQ = () => {
  const faqData = [
    {
      question: "1. हमारे पास कौन-कौन से मसाले उपलब्ध हैं?",
      answer:
        "उत्तर: हमारे यहाँ हल्दी पाउडर, लाल मिर्च पाउडर, धनिया पाउडर, गरम मसाला, किचन किंग मसाला, पनीर मसाला, तंदूरी मसाला, काली मिर्च सहित कई प्रकार के शुद्ध एवं गुणवत्तापूर्ण मसाले उपलब्ध हैं।",
    },
    {
      question: "2. क्या आपके मसाले 100% शुद्ध और प्राकृतिक हैं?",
      answer:
        "उत्तर: जी हाँ। हमारे सभी मसाले उच्च गुणवत्ता वाले कच्चे माल से तैयार किए जाते हैं तथा इनमें किसी भी प्रकार के हानिकारक रंग या मिलावट का उपयोग नहीं किया जाता।",
    },
    {
      question: "3. आप अपने उत्पादों की गुणवत्ता कैसे सुनिश्चित करते हैं?",
      answer:
        "उत्तर: हम अपने उत्पादों की गुणवत्ता को सुनिश्चित करने के लिए सबसे अच्छे कच्चे माल का उपयोग करते हैं और हर उत्पाद को गुणवत्ता प्रमाणिकरण के माध्यम से पास करने का प्रयास करते हैं।",
    },
    {
      question: "4. क्या थोक (Wholesale) में ऑर्डर की सुविधा उपलब्ध है?",
      answer:
        "उत्तर: जी हाँ। हम दुकानदारों, डिस्ट्रीब्यूटर्स, होटल, रेस्टोरेंट और अन्य व्यवसायों के लिए थोक में मसालों की आपूर्ति करते हैं।",
    },
    {
      question: "5. मसाले किन-किन पैक साइज में उपलब्ध हैं?",
      answer:
        "उत्तर: हमारे मसाले विभिन्न पैक साइज में उपलब्ध हैं, ताकि घरेलू उपयोग और व्यावसायिक आवश्यकताओं दोनों को पूरा किया जा सके।",
    },
    {
      question: "6. मसालों को सुरक्षित रखने का सही तरीका क्या है?",
      answer:
        "उत्तर: मसालों को ठंडी एवं सूखी जगह पर रखें तथा सीधे धूप और नमी से बचाएँ। उपयोग के बाद पैकेट को अच्छी तरह बंद रखें।",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="row">
        <div className="col-md-12 mb-6">
          <div className="section-head text-center mt-8">
            <h1 className="h3style" style={{ color: "green" }} data-title="Frequently Asked Questions">
              Frequently Asked Questions
            </h1>
            <div className="wt-separator bg-primarys"></div>
            <div className="wt-separator2 bg-primarys"></div>
            {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
          </div>
        </div>
      </div>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <button className="faq-question" onClick={() => toggle(index)}>
              <span>{item.question}</span>
              <span className={`faq-icon ${openIndex === index ? "open" : ""}`}>
                +
              </span>
            </button>
            <div className={`faq-answer ${openIndex === index ? "show" : ""}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
