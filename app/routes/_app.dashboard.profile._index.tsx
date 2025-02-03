import { Link } from "@remix-run/react";

export default function AppDashboardProfile() {
  return (
    <div>
      <h2>The is profile</h2>
      <Link to="/dashboard/profile/edit">Go to Edit</Link>
    </div>
  )
}
