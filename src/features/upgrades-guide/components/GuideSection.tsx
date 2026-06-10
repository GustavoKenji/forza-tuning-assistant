import { GuideCard } from "./GuideCard";

import { upgradesGuides } from "../data/upgradesGuides";

export function GuideSection(){
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {
        upgradesGuides.map((guide) => (
          <GuideCard key={guide.id} guide={guide} />
        ))
      }
    </ div>
  )
};