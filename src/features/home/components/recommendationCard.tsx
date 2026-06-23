import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Priority, TuningTips } from "@/types/recommendation";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  priorities: Priority[];
  tuningTips: TuningTips[];
  upgradeNotes?: string[];
}

export function RecommendationCard({
  title,
  description,
  priorities,
  tuningTips,
  upgradeNotes
}: Props) {
  return (
    <>
      <Card className="bg-slate-700 border-slate-700 text-slate-100 mt-1">
        <CardHeader>
          <CardTitle className="text-cyan-700 font-semibold text-xl">{title}</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="mb-4 text-slate-300">
            {description}
          </p>

          {priorities.map(priority => (
            <Card key={priority.id} className="mb-4 bg-slate-700 border">
              <CardHeader>
                <CardTitle className="font-semibold text-teal-500">{priority.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-100 rounded-lg border border-slate-600 px-4 py-2 mb-2">
                  <div className="mb-2">
                    <p className="font-medium text-cyan-400">
                      Benefits ↑
                    </p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      {priority.benefits?.map((effect) => (
                        <li key={effect}>{effect}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-2">
                    <p className="font-medium text-indigo-400">
                      Drawbacks ↓
                    </p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      {priority.drawbacks?.map((effect) => (
                        <li key={effect}>{effect}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-medium text-cyan-300">
                      Reasons
                    </p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      {priority.reasons?.map((effect) => (
                        <li key={effect}>{effect}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {priority.guideId && (
                  <Link className="text-indigo-400 hover:text-indigo-500" href={`/upgrades-guide/${priority.guideId}`}>
                    Learn More
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
      {upgradeNotes && (
        <Card className="bg-slate-700 border-slate-700 text-slate-100 mt-3">
          <CardHeader>
            <CardTitle className="text-cyan-700 font-semibold text-xl">Upgrade Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {upgradeNotes.map((note) => (
                <li key={note}>
                  ✓ {note}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
      <Card className="bg-slate-700 border-slate-700 text-slate-100 mt-3">
        <CardHeader>
          <CardTitle className="text-cyan-700 font-semibold text-xl">Tuning Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {tuningTips.map((tip, id) => (
              <li key={id}>
                ✓ {tip.content}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
}