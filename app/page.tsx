
"use client";

import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState<"ar" | "en">("ar");

  const isArabic = language === "ar";

  const content = {
    nav: isArabic
      ? ["الرئيسية", "عن المؤلف", "المكتبة", "ناقش المؤلف", "أجوبة المؤلف", "مجلس القراء"]
      : ["Home", "About", "Library", "Discuss", "Author's Answers", "Readers"],
    eyebrow: isArabic ? "مساحة للفكر والقراءة والحوار" : "A space for thought, reading and dialogue",
    headline: isArabic
      ? "ليست كل نهاية للكتاب نهايةً للفكرة."
      : "Not every ending of a book is the end of an idea.",
    description: isArabic
      ? "هنا تبدأ الأسئلة، وتتعدد القراءات، وتلتقي الأفكار. مساحة مفتوحة للحوار بين المؤلف والقارئ."
      : "Questions begin here, readings multiply, and ideas meet. A space for dialogue between author and reader.",
    library: isArabic ? "المكتبة الفكرية" : "The Intellectual Library",
    libraryDesc: isArabic ? "اكتشف الكتب والمشاريع الفكرية." : "Explore books and intellectual projects.",
    discussion: isArabic ? "ناقش المؤلف" : "Discuss with the Author",
    discussionDesc: isArabic ? "اطرح سؤالك أو اعتراضك أو قراءتك المختلفة." : "Share a question, objection or different interpretation.",
    answers: isArabic ? "أجوبة المؤلف" : "Author's Answers",
    answersDesc: isArabic ? "تأمل في الأسئلة التي أجاب عنها المؤلف." : "Explore questions answered by the author.",
    readers: isArabic ? "مجلس القراء" : "Readers' Council",
    readersDesc: isArabic ? "مساحة لتبادل الأفكار والقراءات." : "A place to exchange ideas and readings.",
    articles: isArabic ? "مقالات وأفكار" : "Articles & Ideas",
    articlesDesc: isArabic ? "نصوص وتأملات في الفكر والحياة." : "Reflections on thought and life.",
    about: isArabic ? "عن المؤلف" : "About the Author",
    aboutDesc: isArabic ? "حمزة الفندي، كاتب وباحث مهتم بالأدب والفكر والحوار." : "Hamza Al-Fandi, a writer and researcher interested in literature, thought and dialogue.",
    explore: isArabic ? "استكشف المكتبة" : "Explore the Library",
    start: isArabic ? "ابدأ حواراً" : "Start a Dialogue",
    footer: isArabic ? "تأسيس وإشراف حمزة الفندي" : "Founded and curated by Hamza Al-Fandi",
    tagline: isArabic ? "للفكرة أكثر من مدار." : "Every idea has more than one orbit."
  };

  const sections = [
    { title: content.library, desc: content.libraryDesc, icon: "◉", href: "#library" },
    { title: content.discussion, desc: content.discussionDesc, icon: "◇", href: "#discuss" },
    { title: content.answers, desc: content.answersDesc, icon: "✦", href: "#answers" },
    { title: content.readers, desc: content.readersDesc, icon: "◎", href: "#readers" },
    { title: content.articles, desc: content.articlesDesc, icon: "¶", href: "#articles" },
    { title: content.about, desc: content.aboutDesc, icon: "⌘", href: "#about" }
  ];

  return (
    <main dir={isArabic ? "rtl" : "ltr"}>
      <header className="site-header">
        <div className="container" style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: "18px"
        }}>
          <div>
            <div className="brand">◉ مَدار</div>
            <div className="brand-subtitle">MADAR · Thought & Dialogue</div>
          </div>

          <nav className="navigation">
            {content.nav.map((item, index) => (
              <a key={index} href={["#home", "#about", "#library", "#discuss", "#answers", "#readers"][index]}>
                {item}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setLanguage(isArabic ? "en" : "ar")}
            style={{
              background: "transparent", color: "inherit",
              border: "1px solid #A88B62", padding: "7px 14px",
              borderRadius: "4px"
            }}
          >
            {isArabic ? "English" : "العربية"}
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="container">
          <div className="eyebrow">{content.eyebrow}</div>
          <div className="gold-line" />
          <h1>{content.headline}</h1>
          <p>{content.description}</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
            <a href="#library" className="button-primary">{content.explore}</a>
            <a href="#discuss" style={{
              border: "1px solid #A88B62", padding: "10px 25px",
              borderRadius: "4px", color: "#F2EEE5"
            }}>{content.start}</a>
          </div>
          <div style={{ marginTop: "55px", color: "#A88B62", fontFamily: "serif", fontSize: "19px" }}>
            {content.tagline}
          </div>
        </div>
      </section>

      <section className="section" id="library">
        <div className="container">
          <h2 className="section-title">{content.library}</h2>
          <p className="section-description">{content.libraryDesc}</p>

          <div className="cards">
            {sections.map((section, index) => (
              <a href={section.href} className="card" key={index}>
                <div style={{ color: "#A88B62", fontSize: "30px", marginBottom: "12px" }}>
                  {section.icon}
                </div>
                <h3>{section.title}</h3>
                <p>{section.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="discuss" style={{ background: "#EEE9DF" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title">{content.discussion}</h2>
          <p className="section-description">{content.discussionDesc}</p>
          <a href="mailto:contact@hamzaalfandi.com" className="button-primary">
            {content.start}
          </a>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title">مَدار MADAR</h2>
          <div className="gold-line" />
          <h3 style={{ fontFamily: "Amiri, serif", fontSize: "28px" }}>
            {content.footer}
          </h3>
          <p style={{ color: "#77736B", marginTop: "12px" }}>
            {isArabic ? "منصة مستقلة تجمع الكتب بالأسئلة، والأفكار بالحوار." : "An independent platform connecting books, questions and dialogue."}
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <div className="brand">مَدار</div>
        <p>{content.tagline}</p>
        <p style={{ marginTop: "15px" }}>© {new Date().getFullYear()} MADAR — Hamza Al-Fandi</p>
      </footer>
    </main>
  );
}
