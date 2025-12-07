import { Home, Calendar, Users, DollarSign, Settings } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const dashboardConfig: Record<string, any> = {
  owner: {
    sidebar: [
      { label: "Dashboard", href: "/dashboard/owner", icon: Home },
      { label: "Earnings", href: "/dashboard/owner/earnings", icon: DollarSign },
      { label: "Bookings", href: "/dashboard/owner/bookings", icon: Calendar },
      { label: "Customers", href: "/dashboard/owner/customers", icon: Users },
      { label: "Settings", href: "/dashboard/owner/settings", icon: Settings },
    ],
  },

  admin: {
    sidebar: [
      { label: "Dashboard", href: "/dashboard/admin", icon: Home },
      { label: "All Turfs", href: "/dashboard/admin/turfs", icon: Calendar },
      { label: "Users", href: "/dashboard/admin/users", icon: Users },
      { label: "Settings", href: "/dashboard/admin/settings", icon: Settings },
    ],
  },

  turfUser: {
    sidebar: [
      { label: "My Bookings", href: "/dashboard/user/bookings", icon: Calendar },
      { label: "Profile", href: "/dashboard/user/profile", icon: Users },
    ],
  },
};
