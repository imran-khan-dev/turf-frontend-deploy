// import { Search, CalendarCheck, CreditCard, ClipboardList } from 'lucide-react';
// import React from 'react';
// import { Card, CardContent } from '@/components/ui/card';

// const steps = [
//   {
//     icon: Search,
//     title: 'Register Your Turf',
//     description: 'Create a professional turf venue in minutes.',
//   },
//   {
//     icon: CalendarCheck,
//     title: 'Booking Management',
//     description: 'Manage all bookings from a single dashboard.',
//   },
//   {
//     icon: CreditCard,
//     title: 'Payments & Earnings',
//     description: 'Receive payments safely and track earnings.',
//   },
//   {
//     icon: ClipboardList,
//     title: 'Analytics & Reports',
//     description: 'Track revenue and gain actionable insights.',
//   },
// ];

// const StepCard = ({
//   icon: Icon,
//   title,
//   description,
//   index,
// }: {
//   icon: React.ElementType;
//   title: string;
//   description: string;
//   index: number;
// }) => {
//   const bgColors = ['bg-blue-50', 'bg-green-50', 'bg-purple-50', 'bg-yellow-50'];
//   const textColors = ['text-blue-500', 'text-green-500', 'text-purple-500', 'text-yellow-500'];

//   return (
//     <Card className={`${bgColors[index % bgColors.length]} hover:shadow-lg transition-shadow duration-300`}>
//       <CardContent className="p-6 flex items-start space-x-4">
//         <div className={`p-3 rounded-full ${textColors[index % textColors.length]} bg-white shadow-sm`}>
//           <Icon size={28} />
//         </div>
//         <div>
//           <h3 className="font-bold text-foreground text-lg">{title}</h3>
//           <p className="text-muted-foreground mt-1 text-sm">{description}</p>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// const Steps = () => {
//   return (
//     <section className="w-full py-24 bg-blue-50/50">
//       <div className="container mx-auto px-4 md:px-8 lg:px-16">
//         <div className="text-center max-w-2xl mx-auto">
//           <h2 className="text-3xl font-bold text-foreground">4 Easy Steps to Run Your Turf Sports Business</h2>
//           <p className="text-muted-foreground mt-3">
//             Manage bookings, track customers, and get paid—all from one platform.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
//           {steps.map((step, index) => (
//             <StepCard key={index} {...step} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Steps;


import { Search, CalendarCheck, CreditCard, ClipboardList } from 'lucide-react';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const steps = [
  {
    icon: Search,
    title: 'Register Your Turf',
    description: 'Create a professional turf venue in minutes.',
  },
  {
    icon: CalendarCheck,
    title: 'Booking Management',
    description: 'Manage all bookings from a single dashboard.',
  },
  {
    icon: CreditCard,
    title: 'Payments & Earnings',
    description: 'Receive payments safely and track earnings.',
  },
  {
    icon: ClipboardList,
    title: 'Analytics & Reports',
    description: 'Track revenue and gain actionable insights.',
  },
];

const StepCard = ({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}) => {
  const bgColors = ['bg-blue-50', 'bg-green-50', 'bg-purple-50', 'bg-yellow-50'];
  const textColors = ['text-blue-500', 'text-green-500', 'text-purple-500', 'text-yellow-500'];

  return (
    <Card className={`${bgColors[index % bgColors.length]} hover:shadow-lg transition-shadow duration-300`}>
      <CardContent className="p-6 flex items-start space-x-4">
        <div className={`p-3 rounded-full ${textColors[index % textColors.length]} bg-white shadow-sm`}>
          <Icon size={28} />
        </div>
        <div>
          <h3 className="font-bold text-foreground text-lg">{title}</h3>
          <p className="text-muted-foreground mt-1 text-sm">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const Steps = () => {
  return (
    <section className="w-full py-24 bg-blue-50/50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Header + CTA */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-foreground">
            4 Easy Steps to Run Your Turf Sports Business
          </h2>
          <p className="text-muted-foreground mt-3">
            Manage bookings, track customers, and get paid—all from one platform.
          </p>

          {/* CTA Button */}
          <Link
            href="/owner/register"
            className="inline-block mt-6 bg-[#0C78E1] text-white rounded-xl px-8 py-3
                       transition-all duration-300 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg
                       active:scale-95 font-semibold"
          >
            Start for Free
          </Link>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
