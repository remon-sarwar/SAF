import orphanHero from '../../../../../public/images/pexels-gelgas-401213.jpg';

export default function OrphanHero() {
  return (
    <section className='relative w-full min-h-[750px] flex items-start pt-32 overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 -z-10'>
        <img
          src={orphanHero.src}
          alt='Sponsor an Orphan'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-linear-to-r from-black/50 to-black/10' />
      </div>

      {/* Content */}
      <div className='relative z-10 w-full pl-[120px] pr-8 text-white text-left'>
        <p className='text-sm bg-black/60 px-4 py-2 rounded-md w-fit'>
          Sponsor an Orphan Today
        </p>

        <h1 className='mt-4 text-3xl lg:text-4xl font-bold leading-tight'>
          Help an orphan living in hardship,
          <br />
          give them the love and care they deserve.
        </h1>

        <p className='mt-4 text-lg text-white/90 max-w-xl'>
          Your support provides shelter, food, education, and emotional
          wellbeing.
        </p>

        <div className='mt-8 flex gap-4 flex-wrap'>
          <a
            href='/donate'
            className='bg-[#ff751f] text-white font-semibold px-6 py-3 rounded-xl text-lg'
          >
            Sponsor an Orphan
          </a>

          <p className='text-white text-lg flex items-center'>
            $50/month or $600/year
          </p>
        </div>
      </div>
    </section>
  );
}
