import { GuideCard } from "./GuideCard";

import { tuningGuides } from "../data/tuningGuides";

export function GuideSection(){
  return (
    <>
      {
        tuningGuides.map((guide) => (
          <GuideCard key={guide.id} guide={guide} />
        ))
      }
    </>
  )
};