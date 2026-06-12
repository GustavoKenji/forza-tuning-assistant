import { UpgradeGuide } from "@/types/upgradesGuide";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import Link from "next/link";

interface Props {
  guide: UpgradeGuide;
}

export function GuideCard({ guide }: Props) {
  return (
    <Card className="bg-slate-700 border-slate-700 text-slate-100 mt-2">
      <CardHeader>
        <CardTitle className="font-semibold">{guide.title}</CardTitle>
        <CardDescription className="text-slate-400">{guide.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {guide.tips?.slice(0, 2).map((tip) => (
            <li key={tip}>
              ✓ {tip}
            </li>
          ))}
        </ul>
        <Link href={`/upgrades-guide/${guide.id}`} className="text-indigo-400 hover:text-indigo-500 mt-4 inline-block">
          Learn More
        </Link>
      </CardContent>
    </Card>
  )
};