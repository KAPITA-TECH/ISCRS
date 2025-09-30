import Hero from "@/components/Hero";
import InternationalSpeakers from "@/components/InternationalSpeakers";
import ProgramPreview from "@/components/ProgramPreview";
import AboutISCRS from "@/components/AboutISCRS";
import ExcellenceInOphthalmology from '@/components/ExcellenceInOphthalmology';
import LeadershipCommittee from '@/components/LeadershipCommittee';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <InternationalSpeakers />
      <ProgramPreview />
      <AboutISCRS />
      <ExcellenceInOphthalmology />
      <LeadershipCommittee />
    </main>
  );
}
