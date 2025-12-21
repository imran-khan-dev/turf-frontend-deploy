"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface Props {
  customers: any[];
  error?: string | null;
}

export default function CustomersTable({ customers, error }: Props) {
  // Error state
  if (error) {
    return (
      <div className="text-center py-10 text-red-600 font-medium bg-red-50 rounded-lg">
        {error}
      </div>
    );
  }

  // Empty state
  if (!customers || customers.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500 font-medium">
        No customers found.
      </div>
    );
  }

  return (
    <div>
      {/* Desktop Table */}
      <div className="hidden md:overflow-x-auto md:block">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#1A80E3] hover:bg-[#1A80E3]">
              <TableHead className="text-white">Name</TableHead>
              <TableHead className="text-white">Email</TableHead>
              <TableHead className="text-white">Phone</TableHead>
              <TableHead className="text-white">Photo</TableHead>
              <TableHead className="text-white">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer: any) => (
              <TableRow
                key={customer.id}
                className="hover:bg-blue-50 transition"
              >
                <TableCell className="font-medium">{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>
                  {customer.photo ? (
                    <Image
                      src={customer.photo}
                      alt={customer.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    "N/A"
                  )}
                </TableCell>
                <TableCell>
                  <Badge
                    className={
                      customer.status === "ACTIVE"
                        ? "bg-green-600"
                        : "bg-gray-600"
                    }
                  >
                    {customer.status ?? "UNKNOWN"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Card Layout */}
      <div className="space-y-4 md:hidden">
        {customers.map((customer: any) => (
          <div
            key={customer.id}
            className="border rounded-lg p-4 shadow bg-white space-y-2"
          >
            <div className="flex items-center gap-3">
              {customer.photo ? (
                <Image
                  src={customer.photo}
                  alt={customer.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="h-10 w-10 bg-gray-200 rounded-full" />
              )}
              <span className="font-medium">{customer.name}</span>
            </div>
            <div className="text-sm space-y-1">
              <div>Email: {customer.email}</div>
              <div>Phone: {customer.phone}</div>
              <div>
                Status:{" "}
                <Badge
                  className={
                    customer.status === "ACTIVE"
                      ? "bg-green-600"
                      : "bg-gray-600"
                  }
                >
                  {customer.status ?? "UNKNOWN"}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
