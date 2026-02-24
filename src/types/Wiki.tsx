export type Wiki = {
  id: string;
  title: string;
  imageSrc: string;
  source: { kind: "md"; content: string };
}

export const wikis: Wiki[] = [
  {
    id: "th10",
    title: "Touhou 10: Mountain of Faith",
    imageSrc: "",
    source: { kind: "md", content: "" },
  },
  {
    id: "th123",
    title: "Touhou 12.3: Hisoutensoku",
    imageSrc: "",
    source: { kind: "md", content: "" },
  },
]
