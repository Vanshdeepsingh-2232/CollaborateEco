import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, UserPlus, Plus, Search } from 'lucide-react';

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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data for teams
const initialTeams = [
  {
    id: 1,
    name: 'Design Wizards',
    members: 5,
    image: '/placeholder.svg?height=100&width=100',
  },
  {
    id: 2,
    name: 'Backend Ninjas',
    members: 8,
    image: '/placeholder.svg?height=100&width=100',
  },
  {
    id: 3,
    name: 'Frontend Gurus',
    members: 6,
    image: '/placeholder.svg?height=100&width=100',
  },
  {
    id: 4,
    name: 'DevOps Masters',
    members: 4,
    image: '/placeholder.svg?height=100&width=100',
  },
];

const TeamCard = ({ team }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
  >
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <img
            src={team.image}
            alt={team.name}
            className="w-10 h-10 rounded-full mr-2"
          />
          {team.name}
        </CardTitle>
        <CardDescription>{team.members} members</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="outline" className="w-full">
          <UserPlus className="mr-2 h-4 w-4" /> Join Team
        </Button>
      </CardFooter>
    </Card>
  </motion.div>
);

const CreateTeamDialog = ({ onCreateTeam }) => {
  const [teamName, setTeamName] = useState('');

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Create Team
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Team</DialogTitle>
          <DialogDescription>
            Enter a name for your new team. Click create when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="team-name" className="text-right">
              Team Name
            </Label>
            <Input
              id="team-name"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => {
              if (teamName) {
                onCreateTeam(teamName);
                setTeamName('');
              }
            }}
          >
            Create Team
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const TeamsPage = () => {
  const [teams, setTeams] = useState(initialTeams);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all-teams');

  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateTeam = (name) => {
    const newTeam = {
      id: teams.length + 1,
      name,
      members: 1,
      image: '/placeholder.svg?height=100&width=100',
    };
    setTeams([...teams, newTeam]);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Teams</h1>
      <div className="flex justify-between items-center mb-6">
        <Input
          type="text"
          placeholder="Search teams..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
          icon={<Search className="text-gray-400" />}
        />
        <CreateTeamDialog onCreateTeam={handleCreateTeam} />
      </div>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList>
          <TabsTrigger value="all-teams">All Teams</TabsTrigger>
          <TabsTrigger value="my-teams">My Teams</TabsTrigger>
        </TabsList>
        <TabsContent value="all-teams">
          <AnimatePresence>
            <motion.div
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {filteredTeams.map((team) => (
                <TeamCard key={team.id} team={team} />
              ))}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="my-teams">
          <p className="text-center text-gray-500">
            You haven't joined any teams yet.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TeamsPage;
