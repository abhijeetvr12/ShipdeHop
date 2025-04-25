import { useState } from "react";
import { users as mockUsers } from "../mockData";

export default function UserList() {
  const [users, setUsers] = useState(mockUsers);

  const updateKYC = (id, status) => {
    setUsers(users.map(u => u.id === id ? { ...u, kycStatus: status } : u));
  };

  const statusColor = status => {
    switch (status) {
      case "approved": return "text-green-600 font-semibold";
      case "rejected": return "text-red-600 font-semibold";
      case "pending": default: return "text-yellow-600 font-semibold";
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">User List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-left text-gray-700">
            <tr>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">KYC Status</th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-b hover:bg-gray-50 transition">
                <td className="py-3 px-6">{user.name}</td>
                <td className="py-3 px-6">{user.email}</td>
                <td className={`py-3 px-6 ${statusColor(user.kycStatus)}`}>{user.kycStatus}</td>
                <td className="py-3 px-6 space-x-2">
                  <button
                    onClick={() => updateKYC(user.id, "approved")}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => updateKYC(user.id, "rejected")}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
