'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { classes, drivetrains, categories } from '../constants'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'

export default function BuildForm() {
  const router = useRouter()
  const [currentClass, setCurrentClass] = useState('')
  const [targetClass, setTargetClass] = useState('')
  const [drivetrain, setDrivetrain] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields are selected
    if (!currentClass || !targetClass || !drivetrain || !category) {
      alert('Please fill in all fields')
      return
    }

    // Navigate to results page with query parameters
    const params = new URLSearchParams({
      currentClass,
      targetClass,
      drivetrain,
      category,
    })
    router.push(`/results?${params.toString()}`)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Forza Tuning Assistant</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Current Class */}
          <div>
            <label htmlFor="currentClass" className="block text-sm font-medium mb-2">
              Current Car Class
            </label>
            <select
              id="currentClass"
              value={currentClass}
              onChange={(e) => setCurrentClass(e.target.value)}
              className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-slate-500"
            >
              <option value="">Select class</option>
              {classes.map((cls) => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
            </select>
          </div>

          {/* Target Class */}
          <div>
            <label htmlFor="targetClass" className="block text-sm font-medium mb-2">
              Target Car Class
            </label>
            <select
              id="targetClass"
              value={targetClass}
              onChange={(e) => setTargetClass(e.target.value)}
              className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-slate-500"
            >
              <option value="">Select class</option>
              {classes.map((cls) => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
            </select>
          </div>

          {/* Drivetrain */}
          <div>
            <label htmlFor="drivetrain" className="block text-sm font-medium mb-2">
              Drivetrain
            </label>
            <select
              id="drivetrain"
              value={drivetrain}
              onChange={(e) => setDrivetrain(e.target.value)}
              className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-slate-500"
            >
              <option value="">Select drivetrain</option>
              {drivetrains.map((dt) => (
                <option key={dt} value={dt}>
                  {dt}
                </option>
              ))}
            </select>
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium mb-2">
              Race Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-slate-500"
            >
              <option value="">Select category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 mt-8 bg-blue-600 hover:bg-blue-700 rounded font-medium transition-colors"
          >
            Get Recommendations
          </button>
        </form>
      </div>
    </div>
  )
}