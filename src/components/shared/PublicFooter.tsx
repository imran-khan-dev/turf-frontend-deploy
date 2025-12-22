import Link from "next/link";

function PublicFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-10">
        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Brand */}
          <div className="space-y-2">
            <h3 className="font-bold text-lg">Turf Booking App</h3>
            <p className="text-sm text-muted-foreground">
              A free booking management platform for turf sports businesses.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-2">
            <h3 className="font-semibold">Product</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                <Link href="/how-we-work" className="hover:text-foreground">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/policy" className="hover:text-foreground">
                  Policies
                </Link>
              </li>
            </ul>
          </div>

          {/* For Businesses */}
          <div className="space-y-2">
            <h3 className="font-semibold">For Turf Businesses</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li></li>
              <li>
                <Link
                  href="/features/manage-bookings"
                  className="hover:text-foreground"
                >
                  Manage bookings
                </Link>
              </li>
              <li>
                <Link
                  href="/features/online-payments"
                  className="hover:text-foreground"
                >
                  Accept online payments
                </Link>
              </li>
              <li>
                <Link href="/features/reduce-no-shows">Reduce no-shows</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <h3 className="font-semibold">Contact</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Jigatola, Dhanmondi <br />
              Dhaka <br />
              contact@turfapp.com
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t pt-4 text-center text-sm text-muted-foreground space-y-2">
          <p>
            &copy; {new Date().getFullYear()} Turf App. All rights reserved.
          </p>
          <Link
            href="/admin/login"
            className="hover:text-foreground underline underline-offset-4"
          >
            Admin Login
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default PublicFooter;
