import { upgradeCategories } from "./data/upgradesGuides";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {
  slug: string;
};

const TAG_COLORS: Record<string, string> = {
  Grip: "bg-cyan-500 border-cyan-500 text-slate-100",
  Handling: "bg-indigo-500 border-indigo-500 text-slate-100",
  Horsepower: "bg-red-500 border-red-500 text-slate-100",
  Torque: "bg-orange-500 border-orange-500 text-slate-100",
  Aero: "bg-purple-500 border-purple-500 text-slate-100",
  Tuning: "bg-green-600 border-green-600 text-slate-100",
  Power: "bg-red-950 border-red-950 text-slate-100",
  Acceleration: "bg-teal-700 border-teal-700 text-slate-100",
};

export default function GuideDetailPage({ slug }: Props) {
  const guide = upgradeCategories
    .flatMap(category => category.guides)
    .find(g => g.id === slug);

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
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-6 pb-10">
      <div className="w-full max-w-4xl">
        <Link href={`/upgrades-guide`}>
          Go Back ⬅️
        </Link>
        <Card className="bg-slate-800 border-slate-700 text-slate-100">
          <CardHeader className="border-b border-slate-600">
            <CardTitle className="text-2xl font-semibold mb-2">{guide.title}</CardTitle>
            <CardDescription className="text-slate-400 font-semibold">{guide.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 mt-2">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="font-semibold">
                PI Cost: {guide.piCost}
              </Badge>
              {guide.unlocksTuning && (
                <Badge className="font-semibold">
                  Unlocks Tuning
                </Badge>
              )}
              {guide.tags?.map((tag) => (
                <Badge key={tag} variant="outline" className={TAG_COLORS[tag] || "bg-yellow-600 border-yellow-600 text-slate-100"}>
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                  Benefits
                </h4>
                <ul className="space-y-2">
                  {guide.benefits?.map((benefit) => (
                    <li key={benefit}>
                      ✓ {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-indigo-400 mb-2">
                  Drawbacks
                </h4>

                <ul className="space-y-2">
                  {guide.drawbacks?.map((drawback) => (
                    <li key={drawback}>
                      ✗ {drawback}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                  Use When
                </h4>
                <ul className="space-y-2">
                  {guide.whenToUse?.map((situation) => (
                    <li key={situation}>
                      ✓ {situation}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-indigo-400 mb-2">
                  Avoid When
                </h4>

                <ul className="space-y-2">
                  {guide.avoidWhen?.map((situation) => (
                    <li key={situation}>
                      ✗ {situation}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Card className="bg-slate-900/50 border-slate-700 text-slate-100">
              <CardTitle className="text-2xl font-semibold">💡 Tips</CardTitle>
              <CardContent>
                <div>
                  <ul className="space-y-2">
                    {guide.tips?.map((tip) => (
                      <li key={tip}>
                        ✓ {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  )
};