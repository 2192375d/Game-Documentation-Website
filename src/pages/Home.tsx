import { wikis } from '@data/wikis';
import WikiCard from '@components/WikiCard';

export default function Home() {
  return (
    <div>
      <h1>(some website)</h1>
      <p>Games I document:</p>
      <div className="hcontainer wikicardlist">

        {wikis.map((wiki) => (
          <WikiCard key={wiki.id} wiki={wiki} />
        ))}
      </div>
    </div>
  );
}
