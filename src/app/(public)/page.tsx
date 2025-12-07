import Image from 'next/image';
import HeroImage from './components/HeroImage';
import About from './components/About';
import MissionVision from './components/MissionVision';
import CoreProgramAreas from './components/CoreProgramAreas';
import ContactForm from './components/ContactForm';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <HeroImage />
      <About />
      <MissionVision />
      <CoreProgramAreas />
      <ContactForm />
    </>
  );
}
