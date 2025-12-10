/* eslint-disable @typescript-eslint/no-explicit-any */
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

export default function TurfUsersTable({ users }: { users: any[] }) {
  if (!users || users.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500 font-medium">
        No turf users found.
      </div>
    );
  }

  return (
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
          const slug = user.turf?.slug ?? null;

          return (
            <TableRow key={user.id} className="hover:bg-blue-50 transition">
              {/* PHOTO */}
              <TableCell>
                <Image
                  src={
                    user.photo || "/assets/images/default-user.png"
                  }
                  alt={user.name}
                  width={40}
                  height={40}
                  className="rounded-full border w-10 h-10 object-cover"
                />
              </TableCell>

              {/* NAME */}
              <TableCell className="font-medium">{user.name}</TableCell>

              {/* EMAIL */}
              <TableCell>{user.email}</TableCell>

              {/* PHONE */}
              <TableCell>{user.phone}</TableCell>

              {/* TURF SLUG */}
              <TableCell>{slug ? slug : "No Turf"}</TableCell>

              {/* STATUS */}
              <TableCell>
                <Badge
                  className={
                    user.status === "ACTIVE"
                      ? "bg-green-600"
                      : "bg-gray-600"
                  }
                >
                  {user.status}
                </Badge>
              </TableCell>

              {/* CREATED */}
              <TableCell>
                {new Date(user.createdAt).toLocaleDateString()}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
