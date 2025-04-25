import { transactions as mockTransactions } from "../mockData";

export default function Transactions() {
  const statusBadge = (status) => {
    const base = "px-3 py-1 text-sm font-medium rounded-full";
    if (status === "payout") return `${base} bg-green-100 text-green-700`;
    if (status === "refund") return `${base} bg-red-100 text-red-600`;
    return `${base} bg-yellow-100 text-yellow-700`;
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Transactions</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-100 text-left text-gray-700 text-sm uppercase tracking-wider">
            <tr>
              <th className="py-3 px-6">Transaction ID</th>
              <th className="py-3 px-6">Amount</th>
              <th className="py-3 px-6">Status</th>
              <th className="py-3 px-6">Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {mockTransactions.map(txn => (
              <tr key={txn.id} className="border-b hover:bg-gray-50 transition">
                <td className="py-3 px-6 font-mono">{txn.id}</td>
                <td className="py-3 px-6">${txn.amount}</td>
                <td className="py-3 px-6">
                  <span className={statusBadge(txn.status)}>{txn.status}</span>
                </td>
                <td className="py-3 px-6">{txn.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
