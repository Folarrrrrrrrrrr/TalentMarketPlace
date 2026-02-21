interface Props {
  total: number;
}

export default function ResultsHeader({ total }: Props) {
  return (
    <div className="flex justify-between mb-4">
      <p>Showing {total} results</p>

      <select className="border p-2 rounded">
        <option>Sort by latest</option>
        <option>Highest salary</option>
        <option>Most relevant</option>
      </select>
    </div>
  );
}
