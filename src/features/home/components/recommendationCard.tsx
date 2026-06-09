import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

interface Props {
  title: string;
  description: string;
  priorities: string[];
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

          <ul className="space-y-2">
            {priorities.map((item) => (
              <li key={item}>
                ✓ {item}
              </li>
            ))}
          </ul>
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