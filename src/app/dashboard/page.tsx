export default function OverviewPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2">Total Users</h3>
          <p className="text-3xl font-bold text-yellow-400">1,234</p>
        </div>
        <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2">Active Sessions</h3>
          <p className="text-3xl font-bold text-yellow-400">567</p>
        </div>
        <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2">Revenue</h3>
          <p className="text-3xl font-bold text-yellow-400">$12,345</p>
        </div>
      </div>
      <p className="text-zinc-400 mt-8">Welcome to your dashboard overview.</p>
    </div>
  );
}
