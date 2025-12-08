/* eslint-disable @typescript-eslint/no-explicit-any */
import serverFetch from "@/lib/server-fetch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default async function CustomersPage() {
  // 1️⃣ Get Turf Profile
  const res = await serverFetch.get("user/my-turf-profile", {}, "ownerAccess");
  const data = await res.json();

  const turfProfileId = data?.data?.[0]?.id;

  // 2️⃣ If no turf profile, return empty state
  if (!turfProfileId) {
    return (
      <div className="rounded-xl border border-[#1A80E3]/30 shadow-lg p-4">
        <h2 className="text-xl font-semibold mb-4 text-[#1A80E3]">
          All Customers of Turf
        </h2>
        <div className="text-center py-10 text-gray-500 font-medium">
          No turf profile found.
        </div>
      </div>
    );
  }

  // 3️⃣ Fetch all customers for this turf
  const res2 = await serverFetch.get(
    `turf-user/all?turfProfileId=${turfProfileId}`,
    {},
    "ownerAccess"
  );
  const data2 = await res2.json();
  const customers = data2?.data ?? [];

  const noCustomers = customers.length === 0;

  return (
    <div className="rounded-xl border border-[#1A80E3]/30 shadow-lg p-4">
      <h2 className="text-xl font-semibold mb-4 text-[#1A80E3]">
        All Customers of Turf
      </h2>

      <div className="overflow-x-auto">
        {noCustomers ? (
          <div className="text-center py-10 text-gray-500 font-medium">
            No customers found.
          </div>
        ) : (
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
                      <img
                        src={customer.photo}
                        alt={customer.name}
                        className="h-10 w-10 rounded-full object-cover"
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
        )}
      </div>
    </div>
  );
}
