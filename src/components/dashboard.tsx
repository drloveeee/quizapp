"use client"

import { useState } from "react"
import Sidebar from "./sidebar"
import StatsCards from "./stats-cards"
import StatsTable from "./stats-table"
import React from "react"

export default function Dashboard() {
  const [userData] = useState([
    {
      id: 1,
      username: "jontee",
      mobile: "2348038021699",
      balance: "200.00",
      email: "johntobby02@gmail.com",
      sponsor: "quiz9ja",
      action: "-",
    },
    {
      id: 2,
      username: "willy",
      mobile: "2348029249922",
      balance: "713.00",
      email: "ninjas96@gmail.com",
      sponsor: "jontee",
      action: "-",
    },
    {
      id: 3,
      username: "ola",
      mobile: "2348057895763",
      balance: "0.00",
      email: "olanate247@gmail.com",
      sponsor: "quiz9ja",
      action: "-",
    },
    {
      id: 4,
      username: "olutayo45",
      mobile: "2347063033963",
      balance: "0.00",
      email: "dasnowteebabic@gmail.com",
      sponsor: "jontee",
      action: "-",
    },
    {
      id: 5,
      username: "rosilee",
      mobile: "2348102611037",
      balance: "600.00",
      email: "oyetunderosiline@gmail.com",
      sponsor: "quiz9ja",
      action: "-",
    },
    {
      id: 6,
      username: "bcrafts",
      mobile: "2349032021244",
      balance: "600.00",
      email: "bolajifarouk@gmail.com",
      sponsor: "jontee",
      action: "-",
    },
  ])

  const statsData = {
    exams: 73,
    totalUsers: 332,
    totalQuestions: 167,
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <header className="bg-[#00bcd4] h-12 flex items-left px-4">
          <div className="text-white text-2xl font-bold">CTS</div>
          <div className="flex-1 mx-4">
            <div className="bg-[#4dd0e1] h-8 rounded"></div>
          </div>
        </header>
        <main className="p-4">
          <StatsCards stats={statsData} />
          <div className="bg-white mt-4 rounded shadow">
            <div className="p-4 font-semibold text-gray-700">STATS</div>
            <StatsTable data={userData} />
          </div>
        </main>
      </div>
    </div>
  )
}

