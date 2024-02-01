import Warning from "./warning";
import { useState } from "react";
export default function Textarea({ text, setText }) {
  //const [showWarning, setShowWarning] = useState(false);
  const [WarningText, setWarningText] = useState("");
  const clearText = () => {
    setWarningText("");
  };

  setInterval(() => {
    if (WarningText) {
      clearText();
    }
  }, 3000);

  const handleChange = (e) => {
    let newText = e.target.value;
    console.log(newText);

    if (newText.includes("<script>")) {
      //setShowWarning(true);
      newText = newText.replace("<script>", "");
      setWarningText("No Script tag allowed");
      setText(newText);
      return;
    } else if (newText.includes("</script>")) {
      //setShowWarning(true);
      newText = newText.replace("</script>", "");
      setWarningText("No Script tag allowed");
      setText(newText);
      return;
    } else if (newText.includes("@")) {
      //setShowWarning(true);
      newText = newText.replace("@", "");
      setWarningText("@ symbol allowed");
      setText(newText);
      return;
    }

    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck="false"
      />
      {WarningText ? <Warning WarningText={WarningText} /> : null}
    </div>
  );
}
