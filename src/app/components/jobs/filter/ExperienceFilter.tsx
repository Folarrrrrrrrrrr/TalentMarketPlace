export default function ExperienceFilter() {
  return (
    <div>
      <label className="font-semibold">Experience Level</label>
      <div className="space-y-1">
        <label><input type="checkbox" /> Entry</label><br />
        <label><input type="checkbox" /> Mid</label><br />
        <label><input type="checkbox" /> Senior</label>
      </div>
    </div>
  );
}
