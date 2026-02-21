export default function LocationFilter() {
  return (
    <div>
      <label className="font-semibold">Location</label>
      <select className="w-full bg-white p-2 rounded mt-1">
        <option>Choose city</option>
        <option>New York</option>
        <option>London</option>
      </select>
    </div>
  );
}
