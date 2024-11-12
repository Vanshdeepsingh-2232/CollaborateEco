// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/PYXtQJkfdok
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// //import Link from "next/link"
// import { Link } from 'react-router-dom';
// import { Card, CardContent } from '@/components/ui/card';
// import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
// import { Button } from '@/components/ui/button';
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from '@/components/ui/navigation-menu';

// export default function Landing() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <header className="h-20 flex items-center px-6">
//         <NavigationMenu>
//           <NavigationMenuList>
//             <NavigationMenuItem>
//               <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
//               <NavigationMenuContent>
//                 <NavigationMenuLink>Link</NavigationMenuLink>
//               </NavigationMenuContent>
//               <NavigationMenuTrigger>About</NavigationMenuTrigger>
//               <NavigationMenuContent>
//                 <NavigationMenuLink>Link</NavigationMenuLink>
//               </NavigationMenuContent>
//               <NavigationMenuTrigger>Our Team</NavigationMenuTrigger>
//               <NavigationMenuContent>
//                 <NavigationMenuLink>Link</NavigationMenuLink>
//               </NavigationMenuContent>
//               <NavigationMenuTrigger>Usage Guide</NavigationMenuTrigger>
//               <NavigationMenuContent>
//                 <NavigationMenuLink>Link</NavigationMenuLink>
//               </NavigationMenuContent>
//             </NavigationMenuItem>
//           </NavigationMenuList>
//         </NavigationMenu>
//       </header>
//       <main className="flex-1">
//         <section className="w-full py-24 bg-gray-100 dark:bg-gray-800">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
//                 Welcome to Acme Inc
//               </h1>
//               <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//                 We provide the best solutions for your business.
//               </p>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
//               <div className="flex flex-col items-center space-y-4 text-center">
//                 <RocketIcon className="h-12 w-12" />
//                 <h2 className="text-2xl font-bold">Fast Delivery</h2>
//                 <p className="text-gray-500 dark:text-gray-400">
//                   We ensure quick delivery of our products.
//                 </p>
//               </div>
//               <div className="flex flex-col items-center space-y-4 text-center">
//                 <ShieldIcon className="h-12 w-12" />
//                 <h2 className="text-2xl font-bold">Secure Payment</h2>
//                 <p className="text-gray-500 dark:text-gray-400">
//                   We provide secure payment options for our customers.
//                 </p>
//               </div>
//               <div className="flex flex-col items-center space-y-4 text-center">
//                 <PowerIcon className="h-12 w-12" />
//                 <h2 className="text-2xl font-bold">24/7 Support</h2>
//                 <p className="text-gray-500 dark:text-gray-400">
//                   We provide 24/7 support to all our customers.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
//           <div className="container px-4 md:px-6">
//             <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
//               Testimonials
//             </h2>
//             <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 mt-8">
//               <Card>
//                 <CardContent className="flex flex-col items-center space-y-4 text-center">
//                   <Avatar>
//                     <AvatarImage src="/placeholder-user.jpg" alt="User" />
//                     <AvatarFallback>JP</AvatarFallback>
//                   </Avatar>
//                   <h3 className="text-xl font-bold">John Doe</h3>
//                   <p className="text-gray-500 dark:text-gray-400">
//                     "Acme Inc provides the best service in the market. I'm very
//                     satisfied with their service."
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="flex flex-col items-center space-y-4 text-center">
//                   <Avatar>
//                     <AvatarImage src="/placeholder-user.jpg" alt="User" />
//                     <AvatarFallback>JP</AvatarFallback>
//                   </Avatar>
//                   <h3 className="text-xl font-bold">Jane Doe</h3>
//                   <p className="text-gray-500 dark:text-gray-400">
//                     "I love the products from Acme Inc. They are of high quality
//                     and affordable."
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="flex flex-col items-center space-y-4 text-center">
//                   <Avatar>
//                     <AvatarImage src="/placeholder-user.jpg" alt="User" />
//                     <AvatarFallback>JP</AvatarFallback>
//                   </Avatar>
//                   <h3 className="text-xl font-bold">Jim Doe</h3>
//                   <p className="text-gray-500 dark:text-gray-400">
//                     "The customer service from Acme Inc is top-notch. They are
//                     always available to help."
//                   </p>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
//             <div className="space-y-3">
//               <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
//                 Ready to get started?
//               </h2>
//               <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//                 Join us today and experience the best service.
//               </p>
//             </div>
//             <div className="mx-auto w-full max-w-sm space-y-2">
//               <Button className="w-full">Sign Up</Button>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// function MountainIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   );
// }

// function PowerIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12 2v10" />
//       <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
//     </svg>
//   );
// }

// function RocketIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
//       <path d="m12 15-3-3a22 22 0 0 1 7-7l3 3a22 22 0 0 1-7 7z" />
//       <path d="M9 9l-2.5-2.5" />
//       <path d="M14.5 17.5 17 15" />
//       <path d="M12 12l1 1" />
//     </svg>
//   );
// }

// function ShieldIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//     </svg>
//   );
// }

import React from 'react';
import { UserCircle } from 'lucide-react';
import PropTypes from 'prop-types';

// Since we can't use Next.js Image component, we'll create a simple img wrapper
const Image = ({ src, alt, width, height, className }) => (
  <img
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={className}
  />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  className: PropTypes.string,
};

// Button component (simplified version of the one from shadcn/ui)
const Button = ({
  children,
  variant = 'default',
  size = 'default',
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background';
  const variantStyles = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
  };
  const sizeStyles = {
    default: 'h-10 py-2 px-4',
    sm: 'h-9 px-3 rounded-md',
    lg: 'h-11 px-8 rounded-md',
  };
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'outline', 'ghost']),
  size: PropTypes.oneOf(['default', 'sm', 'lg']),
  className: PropTypes.string,
};

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="/">
          <Image
            src="src/client/assets/placeholder.svg?height=40&width=40"
            alt="Company Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="ml-2 text-lg font-bold">CollabPlatform</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button>Features</Button>
          <Button>Pricing</Button>
          <Button>About</Button>
        </nav>
        <div className="flex items-center gap-4 ml-4">
          <Button>Sign In</Button>
          <Button>Register</Button>
          <UserCircle className="h-8 w-8 text-gray-500" />
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Collaborate Seamlessly
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Empower your team with our intuitive collaboration platform.
                  Connect, create, and conquer projects together.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">Get Started</Button>
                <Button size="lg">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Image
                  src="src/client/assets/placeholder.svg?height=100&width=100"
                  alt="Real-time Collaboration"
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
                <h2 className="text-xl font-bold">Real-time Collaboration</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Work together in real-time with your team members, no matter
                  where they are.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Image
                  src="src/client/assets/placeholder.svg?height=100&width=100"
                  alt="Project Management"
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
                <h2 className="text-xl font-bold">Project Management</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Organize tasks, set deadlines, and track progress all in one
                  place.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Image
                  src="src/client/assets/placeholder.svg?height=100&width=100"
                  alt="Secure File Sharing"
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
                <h2 className="text-xl font-bold">Secure File Sharing</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Share files securely with team members and external
                  collaborators.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 CollabPlatform. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-xs hover:underline underline-offset-4"
            href="/terms"
          >
            Terms of Service
          </a>
          <a
            className="text-xs hover:underline underline-offset-4"
            href="/privacy"
          >
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default LandingPage;
