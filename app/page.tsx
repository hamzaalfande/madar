
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="container" style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px 0"
      }}>
        <h2 style={{ color: "#273b35", margin: 0 }}>
          مَدار<span style={{ color: "#b18a55" }}>.</span>
        </h2>

        <nav style={{ display: "flex", gap: "24px" }}>
          <Link href="/">الرئيسية</Link>
          <Link href="/about">عن مدار</Link>
          <Link href="/library">المكتبة</Link>
        </nav>

        <Link href="/login" style={{
          background: "#273b35",
          color: "white",
          padding: "10px 22px",
          borderRadius: "8px"
        }}>
          دخول القراء
        </Link>
      </header>

      <section className="container" style={{
        textAlign: "center",
        padding: "100px 20px 110px"
      }}>
        <p style={{ color: "#b18a55", fontWeight: "bold" }}>
          مساحة للفكر والحوار والمعرفة
        </p>

        <h1 style={{
          fontSize: "clamp(38px, 6vw, 66px)",
          lineHeight: 1.5,
          color: "#273b35",
          maxWidth: "850px",
          margin: "20px auto"
        }}>
          ليست كل الأسئلة تبحث عن إجابة،
          بعضها يبحث عن عقلٍ يحاورها.
        </h1>

        <p style={{
          color: "#77766f",
          fontSize: "19px",
          maxWidth: "650px",
          margin: "20px auto 35px"
        }}>
          مَدار مساحة فكرية تجمع العقول،
          وتفتح أبواب النقاش حول قضايا الإنسان
          والعلم والدين والمجتمع والحياة.
        </p>

        <Link href="/library" style={{
          display: "inline-block",
          background: "#273b35",
          color: "white",
          padding: "14px 32px",
          borderRadius: "8px",
          margin: "8px"
        }}>
          اكتشف مشاريعنا الفكرية
        </Link>

        <Link href="/about" style={{
          display: "inline-block",
          border: "1px solid #b18a55",
          color: "#273b35",
          padding: "14px 32px",
          borderRadius: "8px",
          margin: "8px"
        }}>
          اكتشف مدار
        </Link>
      </section>

      <section style={{
        background: "#273b35",
        color: "white",
        padding: "65px 20px",
        textAlign: "center"
      }}>
        <div className="container">
          <h2 style={{ fontSize: "32px" }}>
            الفكرة لا تنتهي عند صاحبها
          </h2>
          <p style={{ color: "#e1ded5" }}>
            هنا تبدأ الأسئلة، وتتعدد الرؤى،
            ويصبح الحوار طريقاً إلى معرفة أعمق.
          </p>
        </div>
      </section>

      <footer style={{
        textAlign: "center",
        padding: "25px",
        color: "#77766f"
      }}>
        © 2026 مَدار — مساحة للفكر والحوار
      </footer>
    </main>
  );
}
