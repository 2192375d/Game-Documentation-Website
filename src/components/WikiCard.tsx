import type { Wiki } from "@datatypes/Wiki"
import { Link } from "react-router-dom";
import { wikiRouteBase } from '@data/constants';

type WikiCardProp = {
  wiki: Wiki;
}

export default function WikiCard(prop: WikiCardProp) {
  return (
    <Link style={{
      border: "1px solid #000",
      padding: "10px",
      paddingTop: "0px",
      width: "15rem",
      height: "15rem",
      justifyContent: "center",
    }}
      to={wikiRouteBase + '/' + prop.wiki.id} >
      <h4>{prop.wiki.title}</h4>
      <img src={prop.wiki.imageSrc} alt={prop.wiki.id} />
    </Link>
  )
}
