import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import WikiCard from "@components/WikiCard"
import { wikis } from "@data/wikis";
import { wikisContentBase } from "@data/constants";


export default function WikiPage() {

  const { id } = useParams<{ id: string }>();
  const wiki = wikis.find(wiki => wiki.id === id);

  if (!wiki) {
    return (<p>The wiki entry with id "{id}" does not exist</p>);
  }

  const [loading, setLoading] = useState<boolean>(true);
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {

    async function load() {
      if (!wiki) {
        return
      }
      const res = await fetch(wikisContentBase + '/' + wiki.source.path);
      const text = await res.text();
      setContent(text);
      setLoading(false);
    }

    load();
  }, [wiki])

  if (loading) {
    return (<p>loading...</p>);
  }


  return (
    <div>
      <div className="hcontainer"
        style={{
          minWidth: "50rem",
          justifyContent: "space-between"
        }}>
        <h1>{wiki.title}</h1>
        <WikiCard wiki={wiki} />
      </div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}
