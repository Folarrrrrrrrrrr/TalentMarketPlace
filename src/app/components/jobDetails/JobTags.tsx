export default function JobTags({ tags }: { tags: string[] }) {
  return (
    <div>
      <h3 className="font-bold mb-2">Tags</h3>
      <div className="flex gap-2 flex-wrap">
        {tags.map(tag => (
          <span key={tag} className="border px-2 py-1 rounded text-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
