export default function TagsFilter() {
  return (
    <div>
      <label className="font-semibold">Tags</label>
      <div className="flex flex-wrap gap-2">
        <span className="border px-2 py-1 rounded">Design</span>
        <span className="border px-2 py-1 rounded">Finance</span>
        <span className="border px-2 py-1 rounded">Marketing</span>
      </div>
    </div>
  );
}
