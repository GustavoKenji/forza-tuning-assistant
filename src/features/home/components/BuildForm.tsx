'use client'

import React, { useState } from 'react';
import Link from "next/link";
import { classes, drivetrains, categories } from '../types/constants';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from '@/components/ui/select';
import { Recommendation } from '@/types/recommendation';
import { getRecommendation } from '../services/recommendationService';
import { RecommendationCard } from '@/features/home/components/recommendationCard';

export default function BuildForm() {
  // const router = useRouter()
  const [currentClass, setCurrentClass] = useState('');
  const [targetClass, setTargetClass] = useState('');
  const [drivetrain, setDrivetrain] = useState('');
  const [category, setCategory] = useState('');
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields are selected
    if (!currentClass || !targetClass || !drivetrain || !category) {
      alert('Please fill in all fields')
      return
    }

    const recommendation = getRecommendation({
      currentClass,
      targetClass,
      drivetrain,
      category
    });

    setRecommendation(recommendation || null);
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link href="/tuning-guide">
          Tuning Guide
        </Link>
        <Card className="bg-slate-800 border-slate-700 text-slate-100">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-semibold">Forza Tuning Assistant</CardTitle>
            <CardDescription className="text-center text-lg font-semibold text-slate-400">
              Learn, Understand, Improve
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Current Class */}
              <div>
                <Label data-slot="current-class" className="block text-sm font-medium mb-2">
                  Current Car Class
                </Label>
                <Select
                  value={currentClass}
                  onValueChange={setCurrentClass}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>

                  <SelectContent position="popper" className="bg-slate-800 border-slate-700 text-slate-100">
                    {classes.map((cls) => (
                      <SelectItem
                        key={cls}
                        value={cls}
                      >
                        {cls}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Target Class */}
              <div>
                <Label data-slot="target-class" className="block text-sm font-medium mb-2">
                  Target Car Class
                </Label>
                <Select
                  value={targetClass}
                  onValueChange={setTargetClass}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>

                  <SelectContent position="popper" className="bg-slate-800 border-slate-700 text-slate-100">
                    {classes.map((cls) => (
                      <SelectItem
                        key={cls}
                        value={cls}
                      >
                        {cls}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Drivetrain */}
              <div>
                <Label data-slot="drivetrain" className="block text-sm font-medium mb-2">
                  Drivetrain
                </Label>
                <Select
                  value={drivetrain}
                  onValueChange={setDrivetrain}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select drivetrain" />
                  </SelectTrigger>

                  <SelectContent position="popper" className="bg-slate-800 border-slate-700 text-slate-100">
                    {drivetrains.map((dt) => (
                      <SelectItem
                        key={dt}
                        value={dt}
                      >
                        {dt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Category */}
              <div>
                <Label data-slot="category" className="block text-sm font-medium mb-2">
                  Race Category
                </Label>
                <Select
                  value={category}
                  onValueChange={setCategory}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>

                  <SelectContent position="popper" className="bg-slate-800 border-slate-700 text-slate-100">
                    {categories.map((cat) => (
                      <SelectItem
                        key={cat}
                        value={cat}
                      >
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-slate-950 hover:bg-slate-900"
                size="lg"
              >
                Get Recommendations
              </Button>
            </form>
          </CardContent>
        </Card>
        {
          recommendation && (
            <Card className="bg-slate-800 border-slate-700 text-slate-100 mt-6">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Recommended Build</CardTitle>
                <CardDescription className="text-lg font-semibold text-slate-400">
                  Class Upgrade: {recommendation.classUpgrade}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RecommendationCard
                  title={recommendation.title}
                  description={recommendation.description}
                  priorities={recommendation.priorities}
                  tuningTips={recommendation.tuningTips}
                  upgradeNotes={recommendation.upgradeNotes}
                />
              </CardContent>
            </Card>
          )
        }
      </div>
    </div>
  )
}