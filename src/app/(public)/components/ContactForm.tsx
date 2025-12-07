import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';

export default function ContactUs() {
  return (
    <SectionWrapper className='w-full bg-[#F3FEE9] py-32'>
      <Section className='w-11/12 lg:w-8/12'>
        {/* Heading */}
        <h2 className='text-3xl font-bold text-[#55833d] text-center mb-16'>
          Contact Us
        </h2>

        {/* Form */}
        <form className='w-full space-y-10'>
          {/* Row — Name + Email */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            {/* Name */}
            <div>
              <label className='text-[#65af3e] font-semibold'>Name</label>
              <input
                type='text'
                placeholder='Full Name'
                className='mt-2 w-full border border-[#65af3e] rounded-xl px-4 py-4 text-lg outline-none bg-white placeholder:text-gray-600 text-gray-600'
              />
            </div>

            {/* Email */}
            <div>
              <label className='text-[#65af3e] font-semibold'>Email</label>
              <input
                type='email'
                placeholder='Email'
                className='mt-2 w-full border border-[#65af3e] rounded-xl px-4 py-4 text-lg outline-none bg-white placeholder:text-gray-600 text-gray-600'
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className='text-[#65af3e] font-semibold'>Subject</label>
            <input
              type='text'
              placeholder='Select Subject'
              className='mt-2 w-full border border-[#65af3e] rounded-xl px-4 py-4 text-lg outline-none bg-white placeholder:text-gray-600 text-gray-600'
            />
          </div>

          {/* Description */}
          <div>
            <label className='text-[#65af3e] font-semibold'>Description</label>
            <textarea
              placeholder='Write your query'
              className='mt-2 w-full border border-[#65af3e] rounded-xl px-4 py-4 text-lg outline-none h-40 resize-none bg-white placeholder:text-gray-600 text-gray-600'
            />
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='w-full bg-[#65af3e] text-white text-lg font-semibold py-4 rounded-xl mt-4'
          >
            Submit
          </button>
        </form>
      </Section>
    </SectionWrapper>
  );
}
