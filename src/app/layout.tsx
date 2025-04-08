import type React from "react"
import { Helmet } from "react-helmet"
import "../App.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Helmet>
          <title>CTS Dashboard</title>
          <meta name="description" content="Course Testing System Dashboard" />
        </Helmet>
      </head>
      <body>{children}</body>
    </html>
  )
}

