import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Priority } from "@/types/recommendation";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  priorities: Priority[];
  tuningTips: string[];
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
          <CardTitle>{title}</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="mb-4 text-slate-300">
            {description}
          </p>

          {priorities.map(priority => (
            <Card key={priority.id} className="mb-4 bg-slate-700 border">
              <CardHeader>
                <CardTitle className="text-slate-100">{priority.name}</CardTitle>
                <CardDescription className="text-slate-400">{priority.explanation}</CardDescription>
              </CardHeader>
              <CardContent>
                {priority.guideId && (
                  <Link className="text-indigo-400 hover:text-indigo-500" href={`/upgrade-guide/${priority.guideId}`}>
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
            <CardTitle>Upgrade Notes</CardTitle>
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
          <CardTitle>Tuning Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {tuningTips.map((tip) => (
              <li key={tip}>
                ✓ {tip}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
}