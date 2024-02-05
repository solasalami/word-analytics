import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";

export default function Container() {
  const [text, setText] = useState("");

  const numberOfCharacters = text.length;

  let words = 0;

  if (numberOfCharacters > 0) {
    const wordsCounts = text.split(" ");
    words = wordsCounts.length - 1;
  }
  const instagram = 280 - numberOfCharacters;
  const facebook = 2200 - numberOfCharacters;

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />

      <Stats
        numberOfCharacters={numberOfCharacters}
        words={words}
        instagram={instagram}
        facebook={facebook}
      />
    </main>
  );
}
