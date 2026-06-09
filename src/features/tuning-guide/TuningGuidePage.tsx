import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

import { GuideSection } from "./components/GuideSection";

export default function TuningGuidePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        <Link href="/">
          Build Assistant
        </Link>
        <Card className="bg-slate-800 border-slate-700 text-slate-100">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-semibold">
              Tuning Guide
            </CardTitle>
            <CardDescription className="text-center text-lg font-semibold text-slate-400">
              Welcome to the Forza Tuning Guide! 
              This guide is designed to help you understand the basics of tuning your car in Forza Horizon. 
              Whether you&apos;re new to tuning or looking to refine your skills, 
              this guide will provide you with general knowledge and tips you need to get the most out of your car&apos;s performance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">
                Vehicle Balance Basics
              </h2>
              <p className="text-slate-300 mb-4">
                Understanding understeer and oversteer is the first step to making effective tuning changes.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-cyan-400">
                    Understeer
                  </h3>

                  <p className="text-slate-300 mb-4">
                    Understeer occurs when the front tires lose grip before the rear tires,
                    causing the car to turn less than intended and push wide through a corner.
                  </p>

                  <Image
                    src="/oversteer-and-understeer-ilustration.jpg"
                    alt="Understeer and oversteer example"
                    width={450}
                    height={300}
                    className="rounded-lg border border-slate-700"
                  />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-indigo-400">
                    Oversteer
                  </h3>

                  <p className="text-slate-300 mb-4">
                    Oversteer occurs when the rear tires lose grip before the front tires,
                    causing the rear of the car to slide outward and rotate more than intended.
                  </p>

                  <Image
                    src="/oversteer-and-understeer-3d.jpg"
                    alt="Understeer and oversteer 3D example"
                    width={358}
                    height={300}
                    className="rounded-lg border border-slate-700"
                  />
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-slate-100">
              Tuning Guides
            </h3>
            <GuideSection />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}