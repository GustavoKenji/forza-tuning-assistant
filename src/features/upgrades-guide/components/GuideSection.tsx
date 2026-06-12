import { GuideCard } from "./GuideCard";

import { upgradeCategories } from "../data/upgradesGuides";

export function GuideSection(){
  return (
    <div className="space-y-8">
      {
        upgradeCategories.map((category) => (
          <div key={category.id} className="mt-4">
            <h3 className="text-slate-100 font-semibold text-2xl">{category.title}</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {
                category.guides?.map((guide) => (
                  <GuideCard key={guide.id} guide={guide} />
                ))
              }
            </div>
          </div>
        ))
      }
    </ div>
  )
};