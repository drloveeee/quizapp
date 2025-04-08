import React from "react";

interface User {
  id: number;
  username: string;
  mobile: string;
  balance: string;
  email: string;
  sponsor: string;
  action: string;
}

interface StatsTableProps {
  data: User[];
}

export default function StatsTable({ data }: StatsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 border-b">
            <th className="px-4 py-2 text-left">#</th>
            <th className="px-4 py-2 text-left">Username</th>
            <th className="px-4 py-2 text-left">Mobile</th>
            <th className="px-4 py-2 text-left">Balance</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Sponsor</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={user.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="px-4 py-3 border-t">{index + 1}</td>
              <td className="px-4 py-3 border-t">{user.username}</td>
              <td className="px-4 py-3 border-t">{user.mobile}</td>
              <td className="px-4 py-3 border-t">{user.balance}</td>
              <td className="px-4 py-3 border-t">{user.email}</td>
              <td className="px-4 py-3 border-t">{user.sponsor}</td>
              <td className="px-4 py-3 border-t">
                <button className="text-blue-500 hover:text-blue-700">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
