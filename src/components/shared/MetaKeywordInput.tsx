import { useState } from "react";
import { Input } from "../ui/input";

const MetaKeywordsInput = ({
  value,
  onChange,
}: {
  value?: string[] | string;
  onChange: (val: string[]) => void;
}) => {
  const [text, setText] = useState(
    Array.isArray(value) ? value.join(", ") : value || ""
  );

  const handleBlur = () => {
    const keywords = text
      .split(/[,،\s]+/)
      .map((k) => k.trim())
      .filter(Boolean);
    onChange(keywords);
  };

  return (
    <Input
      value={text}
      onChange={(e) => setText(e.target.value)}
      onBlur={handleBlur}
      placeholder="كامري, تويوتا, سيارات, 2025"
    />
  );
};

export default MetaKeywordsInput;
