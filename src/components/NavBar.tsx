import { Link } from 'react-router-dom';

import { wikis } from '@data/wikis';
import { wikiRouteBase } from '@data/constants';

export default function NavBar() {
  return (
    <div style={{
      border: "1px solid #000",
      width: "15rem",
      height: "60rem",
      padding: "9px",
      gap: "3px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <hr style={{ width: "100%" }} />
      {wikis.map(({ id, title }) => (
        <Link to={wikiRouteBase + '/' + id}>
          {title}
        </Link>
      ))}
    </div>
  );
}
