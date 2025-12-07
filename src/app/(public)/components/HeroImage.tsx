import heroImage from '../../../../public/images/pexels-gelgas-401213.jpg';

export default function HeroImage() {
  return (
    <section className='relative w-full min-h-[750px] flex items-start pt-32 overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 -z-10'>
        <img
          src={heroImage.src}
          alt='Hero Background'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-linear-to-r from-black/40 to-green-700/30' />
      </div>

      {/* Content */}
      <div className='relative z-10 w-full pl-[120px] pr-8 text-white text-left'>
        <p className='text-sm bg-black/60 px-4 py-2 rounded-md w-fit'>
          Welcome to Sofia Alauddin Foundation
        </p>

        <h1 className='mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-2xl'>
          A <span className='text-[#8ee95e]'>community of</span>{' '}
          <span className='text-[#8ee95e]'>hearts</span> working to make life a
          little <span className='text-[#8ee95e]'>brighter</span>.
        </h1>

        <div className='mt-8 flex gap-4 flex-wrap'>
          <button className='bg-[#ff751f] text-white font-semibold px-6 py-3 rounded-xl text-lg'>
            Donate Now
          </button>

          <button className='bg-[#65af3e] text-white font-semibold px-6 py-3 rounded-xl text-lg shadow-lg'>
            Watch Video
          </button>
        </div>
      </div>
    </section>
  );
}
