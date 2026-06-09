import { GuideCard } from "./GuideCard";

import { tuningGuides } from "../data/tuningGuides";

export function GuideSection(){
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {
        tuningGuides.map((guide) => (
          <GuideCard key={guide.id} guide={guide} />
        ))
      }
    </ div>
  )
};