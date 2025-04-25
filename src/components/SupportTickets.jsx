import { tickets as mockTickets } from "../mockData";

export default function SupportTickets() {
  const statusBadge = (status) => {
    const base = "px-3 py-1 text-sm font-medium rounded-full";
    if (status === "open") return `${base} bg-green-100 text-green-700`;
    if (status === "closed") return `${base} bg-gray-200 text-gray-700`;
    return `${base} bg-yellow-100 text-yellow-700`;
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Support Tickets</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-100 text-left text-gray-700 text-sm uppercase tracking-wider">
            <tr>
              <th className="py-3 px-6">Title</th>
              <th className="py-3 px-6">User ID</th>
              <th className="py-3 px-6">Category</th>
              <th className="py-3 px-6">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {mockTickets.map(ticket => (
              <tr key={ticket.id} className="border-b hover:bg-gray-50 transition">
                <td className="py-3 px-6">{ticket.title}</td>
                <td className="py-3 px-6">{ticket.userId}</td>
                <td className="py-3 px-6">{ticket.category}</td>
                <td className="py-3 px-6">
                  <span className={statusBadge(ticket.status)}>{ticket.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
