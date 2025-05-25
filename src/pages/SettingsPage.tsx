import React, { useState } from 'react';
import EditProfileForm from '../components/settings/EditProfileForm/EditProfileForm';

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'editProfile' | 'preferences' | 'security'>('editProfile');


  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('editProfile')}
              className={`${
                activeTab === 'editProfile'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Edit Profile
            </button>
            <button
              onClick={() => setActiveTab('preferences')}
              className={`${
                activeTab === 'preferences'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Preferences
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`${
                activeTab === 'security'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Security
            </button>
          </nav>
        </div>
        <div className="mt-6">
          {activeTab === 'editProfile' && <EditProfileForm />}
          {activeTab === 'preferences' && null}
          {activeTab === 'security' && null}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;