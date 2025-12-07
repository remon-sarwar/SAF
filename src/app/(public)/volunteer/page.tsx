import Hero from './components/Hero';
import WhyVolunteer from './components/WhyVolunteer';
import Roles from './components/Roles';
import Requirements from './components/Requirements';
import VolunteerForm from './components/VolunteerForm';

export default function VolunteerPage() {
  return (
    <main className='flex flex-col'>
      <Hero />
      <WhyVolunteer />

      {/* Roles + Requirements in same row */}
      <section className='py-20'>
        <div className='max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16'>
          <Roles />
          <Requirements />
        </div>
      </section>

      {/* Volunteer Form */}
      <section className='py-20'>
        <div className='max-w-3xl mx-auto px-6'>
          <VolunteerForm />
        </div>
      </section>
    </main>
  );
}
