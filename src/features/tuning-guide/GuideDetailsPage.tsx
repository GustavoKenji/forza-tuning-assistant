import { tuningGuides } from "./data/tuningGuides";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import Link from "next/link";

interface Props {
  slug: string;
}

export default function GuideDetailPage({ slug }: Props) {
  const guide = tuningGuides.find((guide) => guide.id === slug);

  if (!guide) {
    return (
      <Card className="bg-slate-700 border-slate-700 text-slate-100 mt-6">
        <CardHeader>
          <CardTitle>Guide Not Found</CardTitle>
          <CardDescription className="text-slate-400">The requested tuning guide could not be found.</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link href={`/tuning-guide`}>
          Go Back ⬅️
        </Link>
        <Card className="bg-slate-800 border-slate-700 text-slate-100">
          <CardHeader>
            <CardTitle>{guide.title}</CardTitle>
            <CardDescription className="text-slate-400">{guide.description}</CardDescription>
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
      </div>
    </div>
  )
};