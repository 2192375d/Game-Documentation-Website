import { Link } from 'react-router-dom';

import { wikis } from '@data/wikis';
import { wikiRouteBase } from '@data/constants';

export default function NavBar() {
  return (
    <div className='vcontainer navbar'>

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
