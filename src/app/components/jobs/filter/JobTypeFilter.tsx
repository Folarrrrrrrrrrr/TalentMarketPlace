export default function JobTypeFilter() {
  return (
    <div>
      <label className="font-semibold">Job Type</label>
      <div className="space-y-1">
        <label><input type="checkbox" /> Full Time</label><br />
        <label><input type="checkbox" /> Part Time</label><br />
        <label><input type="checkbox" /> Freelance</label>
      </div>
    </div>
  );
}
