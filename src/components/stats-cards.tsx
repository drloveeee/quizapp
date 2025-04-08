import { FileText, Users, HelpCircle } from "lucide-react"
import React from "react"

interface StatsCardsProps {
  stats: {
    exams: number
    totalUsers: number
    totalQuestions: number
  }
}

export default function StatsCards({ stats }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-[#607d8b] text-white p-6 rounded shadow flex items-center justify-between">
        <div>
          <div className="text-sm mb-1 flex items-center">
            <FileText size={16} className="mr-1" />
            Exams
          </div>
          <div className="text-3xl font-bold">{stats.exams}</div>
        </div>
      </div>

      <div className="bg-[#9c27b0] text-white p-6 rounded shadow flex items-center justify-between">
        <div>
          <div className="text-sm mb-1 flex items-center">
            <Users size={16} className="mr-1" />
            Total Users
          </div>
          <div className="text-3xl font-bold">{stats.totalUsers}</div>
        </div>
      </div>

      <div className="bg-[#e91e63] text-white p-6 rounded shadow flex items-center justify-between">
        <div>
          <div className="text-sm mb-1 flex items-center">
            <HelpCircle size={16} className="mr-1" />
            Total Questions
          </div>
          <div className="text-3xl font-bold">{stats.totalQuestions}</div>
        </div>
      </div>
    </div>
  );
}

