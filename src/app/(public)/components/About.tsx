import about1 from '../../../../public/images/Gemini_Generated_Image_t84xtbt84xtbt84x-2.png';
import about2 from '../../../../public/images/Gemini_Generated_Image_dnv7p6dnv7p6dnv7.png';
import about3 from '../../../../public/images/Gemini_Generated_Image_v9igbzv9igbzv9ig.png';

export default function About() {
  return (
    <section className='w-full py-24 bg-white'>
      <div className='w-full pl-[120px] pr-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
        {/* Left image grid */}
        <div className='grid grid-cols-2 gap-4'>
          <img
            src={about1.src}
            alt='About image 1'
            className='rounded-2xl h-48 w-full object-cover border-4 border-white'
          />
          <img
            src={about2.src}
            alt='About image 2'
            className='rounded-2xl h-48 w-full object-cover border-4 border-white'
          />
          <img
            src={about3.src}
            alt='About image 3'
            className='rounded-2xl h-64 w-full object-cover border-4 border-white col-span-2'
          />
        </div>

        {/* Right text content */}
        <div className='max-w-xl pr-4'>
          <h2 className='text-4xl font-bold text-[#65af3e]'>About Us</h2>

          <p className='mt-6 text-lg leading-relaxed text-gray-800'>
            SA Foundation is a non-profit organization dedicated to transforming
            rural lives through education, skill development, and essential
            community services. Rooted in the values of compassion and faith, we
            believe that progress begins when every individual has access to
            opportunity.
          </p>

          <p className='mt-6 text-lg leading-relaxed text-gray-800'>
            Our initiatives span scholarships, interest-free loans, vocational
            and computer training, agricultural support, and clean water
            projects. With transparent, community-driven programs, we help
            families build dignity, independence, and hope for generations to
            come.
          </p>

          <button className='py-6 px-8 rounded-md shadow-md shadow-neutral-200 bg-[#65af3e] text-white my-4'>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
