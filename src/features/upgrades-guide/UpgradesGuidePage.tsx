import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import Link from "next/link";

import { GuideSection } from "./components/GuideSection";

export default function UpgradesGuidePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        <div className="flex-row">
          <Link className="mr-4" href="/">
            Build Assistant
          </Link>
          <Link href="/tuning-guide">
            Tuning Guide
          </Link>
        </div>
        <Card className="bg-slate-800 border-slate-700 text-slate-100">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-semibold">
              Upgrading Guide
            </CardTitle>
            <CardDescription className="text-center text-lg font-semibold text-slate-400">
              Welcome to the Forza Upgrading Guide! 
              This section explains how upgrades affect your vehicle, how much value they provide for their PI cost, 
              and when they should be prioritized. Whether you&apos;re building a road racer, rally car, drift machine, 
              or drag setup, these guides will help you make smarter upgrade decisions and understand the trade-offs behind each modification.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">
                Performance Index (PI)
              </h2>
              <p className="text-slate-300 mb-4">
                Performance Index, commonly referred to as PI, is the rating system used by Forza
                to measure a vehicle&apos;s overall performance. Every upgrade increases PI by a
                different amount, and your available upgrades are often limited by the class you
                want to race in.
              </p>
              <p className="text-slate-300 mb-4">
                Building a competitive car is not about installing every available upgrade.
                Instead, it is about spending PI efficiently and choosing the upgrades that
                provide the biggest performance gains for your intended build and racing surface.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-cyan-400">
                    PI Efficiency
                  </h3>

                  <p className="text-slate-300 mb-4">
                    Not all upgrades provide the same value for their PI cost. Some upgrades offer
                    significant improvements for a relatively small PI increase, while others may
                    consume a large amount of PI for smaller gains. Understanding upgrade efficiency
                    is one of the most important skills when building competitive cars.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-indigo-400">
                    Upgrade Trade-Offs
                  </h3>

                  <p className="text-slate-300 mb-4">
                    Every upgrade comes with compromises. More grip often means less PI available
                    for power, while additional horsepower may reduce handling and traction.
                    Successful builds focus on balancing strengths and weaknesses rather than
                    maximizing a single performance area.
                  </p>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-slate-100">
              Upgrade Guides by Categories
            </h3>
            <GuideSection />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}