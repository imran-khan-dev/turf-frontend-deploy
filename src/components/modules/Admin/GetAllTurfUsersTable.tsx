/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface TurfUsersTableProps {
  users: any[];
  error?: string | null;
}

export default function TurfUsersTable({ users, error }: TurfUsersTableProps) {
  // Error state
  if (error) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 shadow p-6 text-center">
        <h3 className="text-lg font-semibold text-red-700">{error}</h3>
      </div>
    );
  }

  // Empty state
  if (!users || users.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-4 text-[#1A80E3] text-4xl">👤</div>
        <h3 className="text-lg font-semibold text-gray-800">
          No turf users yet
        </h3>
        <p className="text-sm text-gray-500 mt-1 max-w-sm">
          Users will appear here once customers start booking turfs.
        </p>
      </div>
    );
  }

  // Desktop Table
  return (
    <>
      <div className="hidden md:block overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#1A80E3] hover:bg-[#1A80E3]">
              <TableHead className="text-white">Photo</TableHead>
              <TableHead className="text-white">Name</TableHead>
              <TableHead className="text-white">Email</TableHead>
              <TableHead className="text-white">Phone</TableHead>
              <TableHead className="text-white">Turf Slug</TableHead>
              <TableHead className="text-white">Status</TableHead>
              <TableHead className="text-white">Created</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.map((user: any) => {
              const slug = user.turf?.slug ?? "No Turf";

              return (
                <TableRow key={user.id} className="hover:bg-blue-50 transition">
                  <TableCell>
                    <Image
                      src={user.photo || "/assets/images/default-user.png"}
                      alt={user.name}
                      width={40}
                      height={40}
                      className="rounded-full border w-10 h-10 object-cover"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{slug}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        user.status === "ACTIVE"
                          ? "bg-green-600"
                          : "bg-gray-600"
                      }
                    >
                      {user.status ?? "UNKNOWN"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(user.createdAt).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {users.map((user: any) => {
          const slug = user.turf?.slug ?? "No Turf";

          return (
            <div
              key={user.id}
              className="border rounded-lg p-4 shadow bg-white space-y-2"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={user.photo || "/assets/images/default-user.png"}
                  alt={user.name}
                  width={40}
                  height={40}
                  className="rounded-full border w-10 h-10 object-cover"
                />
                <span className="font-medium text-gray-800">{user.name}</span>
              </div>

              <div className="text-sm space-y-1">
                <div>
                  <span className="font-semibold">Email:</span> {user.email}
                </div>
                <div>
                  <span className="font-semibold">Phone:</span> {user.phone}
                </div>
                <div>
                  <span className="font-semibold">Turf Slug:</span> {slug}
                </div>
                <div>
                  <span className="font-semibold">Created:</span>{" "}
                  {new Date(user.createdAt).toLocaleDateString()}
                </div>
                <div>
                  <Badge
                    className={
                      user.status === "ACTIVE" ? "bg-green-600" : "bg-gray-600"
                    }
                  >
                    {user.status ?? "UNKNOWN"}
                  </Badge>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
