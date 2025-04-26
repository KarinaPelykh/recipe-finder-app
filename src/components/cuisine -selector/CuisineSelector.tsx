type CuisineSelectorProps = {
  setOption: (value: string) => void;
};
const cuisines = [
  "American",
  "British",
  "Italian",
  "Mexican",
  "Chinese",
  "European",
];

export const CuisineSelector = ({ setOption }: CuisineSelectorProps) => {
  return (
    <select
      className="w-full placeholder:text-amber-100 text-black h-10 px-5 py-2.5 outline-none border-white border-2 rounded-xl"
      defaultValue=""
      onChange={(e) => setOption(e.target.value)}
    >
      <option value="" disabled hidden>
        Select a cuisine
      </option>

      {cuisines.map((cuisine, idx) => (
        <option key={idx} value={cuisine}>
          {cuisine}
        </option>
      ))}
    </select>
  );
};
