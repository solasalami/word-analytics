export default function Stats({
  numberOfCharacters,
  words,
  instagram,
  facebook,
}) {
  return (
    <section className="stats">
      <Stat number={words} label="Words" />
      <Stat number={numberOfCharacters} label="Characters" />
      <Stat number={instagram} label="Instagram" />
      <Stat number={facebook} label="Facebook" />
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <section className="stat">
      <span className="stat__number">{number}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
