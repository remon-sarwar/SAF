import volunteerHero from '../../../../../public/images/pexels-gelgas-401213.jpg';

export default function Hero() {
  return (
    <section className='relative w-full min-h-[650px] flex items-start pt-32 overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 -z-10'>
        <img
          src={volunteerHero.src}
          alt='Volunteer Hero'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-linear-to-r from-black/50 to-black/20' />
      </div>

      {/* Content */}
      <div className='relative z-10 w-full pl-[120px] pr-8 text-white text-left'>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-2xl'>
          Give Your Time. Change a Life.
        </h1>

        <p className='mt-4 text-lg max-w-xl text-white/90'>
          Join our volunteer community and help us support families, students,
          and orphans across Bangladesh.
        </p>

        <div className='mt-8'>
          <a
            href='#volunteer-form'
            className='bg-[#65af3e] text-white font-semibold px-6 py-3 rounded-xl text-lg shadow-lg'
          >
            Become a Volunteer
          </a>
        </div>
      </div>
    </section>
  );
}
