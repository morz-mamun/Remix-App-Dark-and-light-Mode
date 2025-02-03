import { Link, Outlet } from "@remix-run/react";

export default function DashboardAppLayout() {
  return (
    <div className="flex w-full">
      <main>
        <aside className="flex h-screen w-36 flex-col items-center overflow-y-auto border-r bg-white py-8 rtl:border-l rtl:border-r-0 dark:border-gray-700 dark:bg-gray-900">
          <nav className="flex flex-1 flex-col space-y-6">
            <Link to="/" className="text-center text-xl text-white">
              Home
            </Link>

            {/* More links */}
          </nav>

          <div className="flex flex-col space-y-6">
            <Link to="/dashboard/setting" className="text-center text-xl text-white">
              Setting
            </Link>

            <Link to="/dashboard/profile" className="text-center text-xl text-white">
              Profile
            </Link>
          </div>
        </aside>
      </main>
      <Outlet />
    </div>
  );
}