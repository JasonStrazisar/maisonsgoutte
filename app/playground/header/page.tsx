import Link from "next/link";
import Header from "@/app/components/Header";

export default function HeaderPlayground() {
  return (
    <div className="pg-shell pg-shell-wide">
      <div className="pg-back">
        <Link href="/playground">&larr; Playground</Link>
      </div>
      <h1 className="pg-title">Header</h1>
      <p className="pg-subtitle">Navigation bar with logo and section links.</p>

      <section className="pg-preview">
        <h2 className="pg-section-title">Desktop</h2>
        <div className="pg-frame">
          <Header />
        </div>
      </section>

      <section className="pg-preview">
        <h2 className="pg-section-title">Mobile — 375px</h2>
        <div className="pg-frame pg-frame-mobile">
          <Header />
        </div>
      </section>
    </div>
  );
}
