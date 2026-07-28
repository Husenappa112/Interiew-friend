const ResumeUpload = ({ file, setFile }) => {
  const handleChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="bg-slate-900 border-2 border-dashed border-slate-700 rounded-2xl p-8">

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleChange}
        className="text-white"
      />

      {file && (
        <div className="mt-4">
          <p className="text-green-400 font-medium">
            Selected File
          </p>

          <p className="text-gray-300">
            {file.name}
          </p>
        </div>
      )}
    </div>
  );
};

export default ResumeUpload;