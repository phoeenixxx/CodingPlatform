const CodeSnippet = ({ code, language }) => {
  return (
    <div className="bg-[#1e1e1e] rounded-md overflow-hidden border border-gray-700 my-4">
      <div className="bg-[#2d2d2d] px-4 py-2 text-xs text-gray-400 font-mono flex justify-between items-center border-b border-gray-700">
        <span>{language || 'code'}</span>
      </div>
      <pre className="p-4 overflow-x-auto text-sm text-gray-300 font-mono">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeSnippet;