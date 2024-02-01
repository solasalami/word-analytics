import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";

export default function Container() {
  const [text, setText] = useState("");

  const numberOfCharacters = text.length;
  const wordsCounts = text.split(" ");
  const words = wordsCounts.length;

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />

      <Stats numberOfCharacters={numberOfCharacters} words={words} />
    </main>
  );
}
