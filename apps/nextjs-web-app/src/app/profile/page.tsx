import React from 'react';
import Link from 'next/link';
import { fetchProfiles } from '@shared/services';
import { validateProfile } from '@shared/schemas';

/**
 * ProfilePage component
 *
 * This is the main profile page route that will display fetched user images and data.
 * This page is server-rendered and fetches profile data on the server.
 */
export default async function ProfilePage() {
  // Fetch profile data on the server
  let profiles: any[] = [];
  let error = null;

  try {
    const profilesData = await fetchProfiles();

    // Check if there was an error
    if ('error' in profilesData) {
      error = { message: profilesData.error };
    } else {
      // Validate each profile
      profiles = profilesData
        .map((profile: any) => {
          const validationResult = validateProfile(profile);
          if (!validationResult.success) {
            console.warn(`Invalid profile data: ${validationResult.error}`);
            return null;
          }
          return validationResult.data;
        })
        .filter(Boolean); // Filter out null values
    }
  } catch (e) {
    error = { message: e instanceof Error ? e.message : 'An unknown error occurred' };
  }

  // Determine loading state (always false on server)
  const isLoading = false;

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">User Profiles</h1>
        <p className="text-gray-600">View user profiles and their information</p>
      </header>

      <main className="flex flex-col gap-8">
        {/* Conditional rendering based on the loading state */}
        {isLoading ? (
          <div className="flex justify-center items-center p-8" data-testid="loading-spinner">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            <span className="ml-3">Loading profiles...</span>
          </div>
        ) : error ? (
          <div className="bg-red-100 p-6 rounded-lg shadow-md">
            <p className="text-lg text-red-600">Error loading profiles: {error.message}</p>
          </div>
        ) : profiles && profiles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profiles.map(profile => (
              <div key={profile?.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-semibold mb-2">{profile?.name}</h2>
                <div className="flex items-center mb-4">
                  <span className="text-gray-600 mr-2">Age:</span>
                  <span>{profile?.age}</span>
                </div>
                <div className="mb-4">
                  <span className="text-gray-600 mr-2">Location:</span>
                  <span>{profile?.location}</span>
                </div>
                <div className="mb-4">
                  <p className="text-gray-600 mb-1">Bio:</p>
                  <p>{profile?.bio}</p>
                </div>
                <div className="mb-4">
                  <p className="text-gray-600 mb-1">Interests:</p>
                  <div className="flex flex-wrap gap-2">
                    {profile?.interests.map((interest: any, index: number) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  Last active: {new Date(profile?.lastActive ?? new Date()).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg">No profiles found.</p>
          </div>
        )}

        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-4">
          &larr; Back to Home
        </Link>
      </main>
    </div>
  );
}
