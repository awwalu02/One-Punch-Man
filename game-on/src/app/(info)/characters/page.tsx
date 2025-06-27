export const metadata = {
  title:'Characters'
}

import '../../styles/characters.css';

const characters = [
  {
    name: "Saitama",
    image: "/saitama.png",
    description: "The Caped Baldy. One punch is all it takes.",
  },
  {
    name: "Genos",
    image: "/genos.png",
    description: "The Demon Cyborg. Fast, fiery, and loyal.",
  },
  {
    name: "Tatsumaki",
    image: "/tatsumaki.png",
    description: "Tornado of Terror. A psychic powerhouse.",
  },
  {
    name: "Speed-o'-Sound Sonic",
    image: "/sonic.png",
    description: "Deadly ninja. Saitama's self-declared rival.",
  },
  {
    name: "Garou",
    image: "/garou.png",
    description: "Hero Hunter. Martial arts prodigy with a dark twist.",
  },
];

export default function CharactersPage() {
  return (
    <div className="characters-page">
      <h1>Meet the Fighters</h1>
      <div className="characters-grid">
        {characters.map((char) => (
          <div key={char.name} className="character-card">
            <img src={char.image} alt={char.name} />
            <h2>{char.name}</h2>
            <p>{char.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}