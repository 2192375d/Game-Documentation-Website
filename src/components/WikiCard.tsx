import type { Wiki } from "@datatypes/Wiki"
import { Link } from "react-router-dom";
import { wikiRouteBase, wikisContentBase } from '@data/constants';

type WikiCardProp = {
  wiki: Wiki;
}

export default function WikiCard(prop: WikiCardProp) {
  return (
    <Link
      className='wikicard'
      to={wikiRouteBase + '/' + prop.wiki.id}
    >
      <h4>{prop.wiki.title}</h4>
      <img src={wikisContentBase + '/' + prop.wiki.imageSrc} alt={prop.wiki.id} />
    </Link>
  )
}
