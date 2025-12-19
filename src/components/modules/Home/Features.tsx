// import { Users, CalendarCheck, DollarSign, MapPin } from 'lucide-react';
// import { cn } from '@/lib/utils';
// import { Card, CardContent } from '@/components/ui/card';

// const features = [
//   {
//     name: 'Turf Owner Registration',
//     description: 'Register and manage your turf business with ease.',
//     icon: Users,
//     bgColor: 'bg-blue-100',
//     iconColor: 'text-blue-500',
//   },
//   {
//     name: 'Online Booking Management',
//     description: 'Accept and track bookings from users directly online.',
//     icon: CalendarCheck,
//     bgColor: 'bg-green-100',
//     iconColor: 'text-green-500',
//   },
//   {
//     name: 'Payments & Earnings',
//     description: 'Manage payments, track earnings and financials seamlessly.',
//     icon: DollarSign,
//     bgColor: 'bg-yellow-100',
//     iconColor: 'text-yellow-500',
//   },
//   {
//     name: 'Turf Profiles',
//     description: 'Showcase your turf fields with professional profiles.',
//     icon: MapPin,
//     bgColor: 'bg-purple-100',
//     iconColor: 'text-purple-500',
//   },
// ];

// const Features = () => {
//   return (
//     <section id='features' className="w-full py-24">
//       <div className="container mx-auto px-4 md:px-8 lg:px-16">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
//           <div>
//             <h2 className="text-3xl font-bold text-foreground">
//               Key Features
//             </h2>
//             <p className="text-muted-foreground max-w-md mt-2">
//               Everything you need to manage your turf business efficiently.
//             </p>
//           </div>
//         </div>

//         {/* Feature Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {features.map((feature) => (
//             <Card
//               key={feature.name}
//               className={cn(
//                 'text-center transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:bg-[#0C78E1] hover:text-white'
//               )}
//             >
//               <CardContent className="p-6">
//                 <div
//                   className={cn(
//                     `w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4 ${feature.bgColor}`
//                   )}
//                 >
//                   <feature.icon
//                     className={cn(`text-2xl ${feature.iconColor}`)}
//                   />
//                 </div>
//                 <h3 className="text-lg font-semibold mb-1">
//                   {feature.name}
//                 </h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-300">
//                   {feature.description}
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;

import { Users, CalendarCheck, DollarSign, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    name: 'Turf Business Onboarding',
    description: 'Sign up and manage your turf effortlessly.',
    icon: Users,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    name: 'Booking Management',
    description: 'Track all bookings from one dashboard.',
    icon: CalendarCheck,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    name: 'Payments & Earnings',
    description: 'Receive payments and monitor earnings easily.',
    icon: DollarSign,
    bgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
  },
  {
    name: 'Professional Turf Venues',
    description: 'Showcase your fields with pricing, and details to get bookings, and paid seamlessly.',
    icon: MapPin,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
];

const Features = () => {
  return (
    <section id='features' className="w-full py-24 bg-blue-50/50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Key Features
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-md mt-2">
              All the tools you need to run your turf business smoothly.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.name}
              className={cn(
                'text-center transition-all duration-300 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1'
              )}
            >
              <CardContent className="p-6 flex flex-col items-center">
                <div
                  className={cn(
                    `w-16 h-16 rounded-full flex items-center justify-center mb-4 ${feature.bgColor}`
                  )}
                >
                  <feature.icon className={cn(`text-2xl ${feature.iconColor}`)} />
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">
                  {feature.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
