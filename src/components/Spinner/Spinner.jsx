// components/Spinner.jsx
const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div
        className="w-10 h-10 border-4 border-gray-300 rounded-full animate-spin"
        style={{ borderTopColor: "#3C393B" }}
      />
    </div>
  );
};

export default Spinner;
