import React from "react";

interface CodeSnippetProps {
  code: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code }) => {
  return (
    <pre className="bg-gray-100 p-4 rounded-md">
      <code className="text-xs font-mono">{code}</code>
    </pre>
  );
};

export default CodeSnippet;
