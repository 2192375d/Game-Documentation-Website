import { wikis } from '@data/wikis';
import WikiCard from '@components/WikiCard';

export default function Home() {
  return (
    <div>
      <p>Games I document:</p>
      <div className="hcontainer"
        style={{
          gap: "10px",
        }}>
        {wikis.map((wiki) => (
          <WikiCard key={wiki.id} wiki={wiki} />
        ))}
      </div>
    </div>
  );
}
