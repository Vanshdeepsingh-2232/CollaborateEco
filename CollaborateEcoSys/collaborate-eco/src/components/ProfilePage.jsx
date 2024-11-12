// import React, { useEffect, useState } from 'react';
// import { doc, getDoc, updateDoc } from 'firebase/firestore';
// import {
//   updatePassword,
//   reauthenticateWithCredential,
//   EmailAuthProvider,
// } from 'firebase/auth';
//import { auth, db } from '@/firebase-config'; // Adjust your db import path
import { useEffect, useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { db } from '@/firebase-config'; // Import your Firebase config
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';

export default function ProfilePage({ userId }) {
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Ensure userId is defined before making Firestore requests
    if (!userId) {
      console.error('userId is undefined');
      return;
    }
 
    const unsubscribe = onSnapshot(
      doc(db, 'users', userId),
      (docSnapshot) => {
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          setProfile(data);
          setName(data.name);
          setEmail(data.email);
        }
      },
      (error) => {
        console.error('Firestore error:', error);
      }
    );

    return () => unsubscribe();
  }, [userId]);

  const handleUpdate = async () => {
    if (!userId) return;
    const profileRef = doc(db, 'users', userId);
    await updateDoc(profileRef, { name, email });
    setEditMode(false);
  };

  return (
    <div>
      <div className="px-4 space-y-6 md:px-6">
        <header className="space-y-1.5">
          <div className="flex items-center space-x-4">
            <img
              src="/placeholder.svg"
              alt="Avatar"
              width="96"
              height="96"
              className="border rounded-full"
              style={{ aspectRatio: '96/96', objectFit: 'cover' }}
            />
            <div className="space-y-1.5">
              <h1 className="text-2xl font-bold">
                Name: {profile ? profile.name : 'Loading...'}
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Role: Developer
              </p>
            </div>
          </div>
        </header>
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  type="email"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" value="123-456-7890" readOnly />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Change Password</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="current-password">Current Password</Label>
                <Input
                  id="current-password"
                  value="password123"
                  type="password"
                  readOnly
                />
              </div>
              <div>
                <Label htmlFor="new-password">New Password</Label>
                <Input
                  id="new-password"
                  placeholder="Enter your new password"
                  type="password"
                />
              </div>
              <div>
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  placeholder="Confirm your new password"
                  type="password"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Button size="lg" onClick={handleUpdate}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
