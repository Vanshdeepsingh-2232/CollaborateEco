import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Users,
  BarChart,
  Settings,
  Plus,
  Search,
  Menu,
  X,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from '@/components/ui/sidebar';

// Mock data for events
const events = [
  {
    id: 1,
    title: 'Team Building Workshop',
    date: '2024-03-15',
    attendees: 25,
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    id: 2,
    title: 'Product Launch Meeting',
    date: '2024-03-20',
    attendees: 50,
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    id: 3,
    title: 'Quarterly Review',
    date: '2024-03-25',
    attendees: 15,
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    id: 4,
    title: 'Customer Feedback Session',
    date: '2024-03-30',
    attendees: 30,
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    id: 5,
    title: 'Agile Sprint Planning',
    date: '2024-04-02',
    attendees: 10,
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    id: 6,
    title: 'Annual Company Picnic',
    date: '2024-04-10',
    attendees: 100,
    image: '/placeholder.svg?height=200&width=300',
  },
];

const EventCard = ({ event }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="overflow-hidden">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
        <CardDescription>
          {new Date(event.date).toLocaleDateString()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500">Attendees: {event.attendees}</p>
      </CardContent>
      <CardFooter>
        <Button>View Details</Button>
      </CardFooter>
    </Card>
  </motion.div>
);

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-gray-100">
        {/* Toggle Sidebar Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 m-4 text-gray-600 hover:text-gray-800"
        >
          <Menu size={24} />
        </button>

        {/* Sidebar - only visible when isSidebarOpen is true */}
        {isSidebarOpen && (
          <Sidebar>
            <SidebarHeader className="flex justify-between items-center px-4 py-2">
              <h2 className="text-xl font-bold">Management Tools</h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                <X size={24} />
              </button>
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Calendar className="mr-2" />
                    <span>Calendar</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Users className="mr-2" />
                    <span>Attendees</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <BarChart className="mr-2" />
                    <span>Analytics</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Settings className="mr-2" />
                    <span>Settings</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>
        )}

        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">Ongoing Events</h1>
              <Button>
                <Plus className="mr-2" />
                Create Event
              </Button>
            </div>
            <div className="mb-6">
              <Input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full max-w-md"
                icon={<Search className="text-gray-400" />}
              />
            </div>
            <motion.div
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </motion.div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default EventsPage;
