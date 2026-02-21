export default function JobQualifications({ items }: { items: string[] }) {
  return (
    <section>
      <h3 className="font-bold mb-2">Professional Skills</h3>
      <ul className="list-disc ml-5 space-y-1">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
