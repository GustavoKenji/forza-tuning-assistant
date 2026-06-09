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
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-6 pb-10">
      <div className="w-full max-w-4xl">
        <Link href={`/tuning-guide`}>
          Go Back ⬅️
        </Link>
        <Card className="bg-slate-800 border-slate-700 text-slate-100">
          <CardHeader className="border-b border-slate-600">
            <CardTitle className="text-2xl font-semibold mb-2">{guide.title}</CardTitle>
            <CardDescription className="text-slate-400 font-semibold">{guide.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 mt-2">
            <div>
              <h3 className="text-xl font-semibold mb-2">Overview</h3>
              <p>{guide.overview}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Effects</h4>
              <ul className="space-y-2">
                {guide.effects.map((effect) => (
                  <li key={effect}>
                    ✓ {effect}
                  </li>
                ))}
              </ul>
            </div>
            {guide.adjustments && (
              <div>
                <h4 className="text-lg font-semibold mb-4">Adjustments</h4>

                <div className="grid grid-cols-2 gap-4">
                  {guide.adjustments.map((adjustment) => (
                    <div
                      key={adjustment.setting}
                      className="rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                    >
                      <h5 className="font-semibold text-lg mb-3">
                        {adjustment.setting}
                      </h5>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="font-medium text-cyan-400 mb-2">
                            Increase ↑
                          </p>

                          <ul className="list-disc list-inside text-sm space-y-1">
                            {adjustment.increase.map((effect) => (
                              <li key={effect}>{effect}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <p className="font-medium text-indigo-400 mb-2">
                            Decrease ↓
                          </p>

                          <ul className="list-disc list-inside text-sm space-y-1">
                            {adjustment.decrease.map((effect) => (
                              <li key={effect}>{effect}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div>
              <h4 className="text-lg font-semibold mb-2">Tips</h4>
              <ul className="space-y-2">
                {guide.tips?.map((tip) => (
                  <li key={tip}>
                    ✓ {tip}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Common Mistakes</h4>
              <ul className="space-y-2">
                {guide.mistakes?.map((mistake) => (
                  <li key={mistake}>
                    ✗ {mistake}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
};