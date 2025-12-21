/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function GetAllOwnersTable({
  owners,
  error,
}: {
  owners: any[];
  error?: string | null;
}) {
  // Show error message if fetch failed
  if (error) {
    return (
      <div className="text-center py-10 text-red-600 font-medium bg-red-50 rounded-lg">
        {error}
      </div>
    );
  }

  if (!owners || owners.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500 font-medium">
        No owners found.
      </div>
    );
  }

  return (
    <div>
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-[#1A80E3]">
              <th className="text-white p-3">Photo</th>
              <th className="text-white p-3">Name</th>
              <th className="text-white p-3">Email</th>
              <th className="text-white p-3">Phone</th>
              <th className="text-white p-3">Profile Slug</th>
              <th className="text-white p-3">Created</th>
              <th className="text-white p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {owners.map((owner: any) => {
              const profileSlug = owner.turfProfileSlug?.[0] || null;
              return (
                <tr
                  key={owner.id}
                  className="hover:bg-blue-50 transition border-b last:border-b-0"
                >
                  <td className="p-3">
                    <Image
                      src={owner.photo || "/assets/images/default-user.png"}
                      alt={owner.name}
                      width={40}
                      height={40}
                      className="rounded-full border w-10 h-10 object-cover"
                    />
                  </td>
                  <td className="p-3 font-medium">{owner.name}</td>
                  <td className="p-3">{owner.email}</td>
                  <td className="p-3">{owner.phone}</td>
                  <td className="p-3">{profileSlug ?? "No Profile"}</td>
                  <td className="p-3">
                    {new Date(owner.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-3">
                    <Badge
                      className={profileSlug ? "bg-green-600" : "bg-gray-600"}
                    >
                      {profileSlug ? "ACTIVE" : "NO PROFILE"}
                    </Badge>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout */}
      <div className="md:hidden space-y-4">
        {owners.map((owner: any) => {
          const profileSlug = owner.turfProfileSlug?.[0] || null;
          return (
            <div
              key={owner.id}
              className="border rounded-lg p-4 shadow bg-white space-y-2"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={owner.photo || "/assets/images/default-user.png"}
                  alt={owner.name}
                  width={40}
                  height={40}
                  className="rounded-full border w-10 h-10 object-cover"
                />
                <div className="font-medium text-lg">{owner.name}</div>
              </div>

              <div className="text-sm text-gray-600">
                <div>
                  <span className="font-semibold">Email:</span> {owner.email}
                </div>
                <div>
                  <span className="font-semibold">Phone:</span> {owner.phone}
                </div>
                <div>
                  <span className="font-semibold">Profile Slug:</span>{" "}
                  {profileSlug ?? "No Profile"}
                </div>
                <div>
                  <span className="font-semibold">Created:</span>{" "}
                  {new Date(owner.createdAt).toLocaleDateString()}
                </div>
                <div className="mt-1">
                  <Badge
                    className={profileSlug ? "bg-green-600" : "bg-gray-600"}
                  >
                    {profileSlug ? "ACTIVE" : "NO PROFILE"}
                  </Badge>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
