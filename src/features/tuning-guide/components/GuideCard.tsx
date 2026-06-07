import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { TuningGuide } from "@/types/tuningGuide";

interface Props {
  guide: TuningGuide;
}

export function GuideCard({ guide }: Props) {
  return (
    <Card className="bg-slate-700 border-slate-700 text-slate-100 mt-6">
      <CardHeader>
        <CardTitle>{guide.title}</CardTitle>
        <CardDescription>{guide.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {guide.effects.map((effect) => (
            <li key={effect}>
              ✓ {effect}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
};