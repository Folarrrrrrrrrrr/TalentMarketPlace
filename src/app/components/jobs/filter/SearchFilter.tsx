export default function SearchFilter() {
  return (
    <div>
      <label className="font-semibold">Search by Job Title</label>
      <input
        type="text"
        placeholder="Job title or company"
        className="w-full border-none bg-white  p-2 rounded mt-1"
      />
    </div>
  );
}
