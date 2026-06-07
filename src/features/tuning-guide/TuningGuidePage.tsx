import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import Link from "next/link";

import { GuideSection } from "./components/GuideSection";

export default function TuningGuidePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
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
              This guide is designed to help you understand the basics of tuning your car in Forza Horizon 5. 
              Whether you&apos;re new to tuning or looking to refine your skills, 
              this guide will provide you with general knowledge and tips you need to get the most out of your car&apos;s performance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <GuideSection />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}