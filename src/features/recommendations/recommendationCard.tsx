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
}

export function RecommendationCard({
  title,
  description,
  priorities
}: Props) {
  return (
    <Card className="bg-slate-700 border-slate-700 text-slate-100 mt-6">
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
  );
}