export default function CategoryFilter() {
  return (
    <div>
      <label className="font-semibold">Category</label>
      <div className="space-y-1">
        <label><input type="checkbox" /> Commerce</label><br />
        <label><input type="checkbox" /> Design</label><br />
        <label><input type="checkbox" /> Engineering</label>
      </div>
    </div>
  );
}
