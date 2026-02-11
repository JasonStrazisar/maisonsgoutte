import Link from "next/link";

const components = [
  {
    name: "Header",
    href: "/playground/header",
    description: "Navigation bar with logo and anchor links.",
  },
];

export default function PlaygroundIndex() {
  return (
    <div className="pg-shell">
      <h1 className="pg-title">Playground</h1>
      <p className="pg-subtitle">Browse and test components in isolation.</p>
      <div className="pg-grid">
        {components.map((c) => (
          <Link key={c.href} href={c.href} className="pg-card">
            <h2>{c.name}</h2>
            <p>{c.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
