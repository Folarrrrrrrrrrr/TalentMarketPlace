export default function DatePostedFilter() {
  return (
    <div>
      <label className="font-semibold">Date Posted</label>
      <div className="space-y-1">
        <label><input type="radio" name="date" /> Last 24 hours</label><br />
        <label><input type="radio" name="date" /> Last 7 days</label>
      </div>
    </div>
  );
}
