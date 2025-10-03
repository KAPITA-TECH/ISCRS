import React from 'react';
import MembershipHero from '@/components/MembershipHero';
import MembershipForm from '@/components/MembershipForm';

const MembershipPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <MembershipHero />
      
      {/* Form Section */}
      <MembershipForm />
    </div>
  );
};

export default MembershipPage;
