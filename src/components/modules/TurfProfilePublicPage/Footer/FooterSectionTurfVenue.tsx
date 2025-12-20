/* eslint-disable @typescript-eslint/no-explicit-any */
interface FooterSectionProps {
  profile: any;
}

export default function FooterSectionTurfVenue({ profile }: FooterSectionProps) {
  return (
    <footer className="py-8 bg-white border-t text-center text-sm text-gray-700">
      &copy; {new Date().getFullYear()} {profile.name}. All Rights Reserved.
    </footer>
  );
}
