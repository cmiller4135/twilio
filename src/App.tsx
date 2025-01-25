import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-semibold text-gray-900">
            Here is the profile page of a logged-in user that shows the opt-in options for users of the website to receive Twilio messages
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-6">
          <img 
            src="/twilio1.jpg" // Updated the src attribute with a valid URL
            alt="Twilio SMS configuration interface"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </main>
    </div>
  );
}

export default App;