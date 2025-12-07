import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';

import missionImg from '../../../../public/images/Gemini_Generated_Image_t84xtbt84xtbt84x-3.png';

export default function MissionVision() {
  return (
    <SectionWrapper className='w-full bg-[#f5fff0] py-32'>
      <Section>
        <div className='w-full flex flex-col lg:flex-row justify-between items-center gap-16'>
          {/* LEFT — Text block */}
          <div className='flex-1'>
            <h2 className='text-4xl font-bold text-[#55833d]'>Our Mission</h2>

            <p className='mt-4 text-lg leading-relaxed text-gray-800'>
              To empower underprivileged communities through education, skills,
              and resources that promote self-reliance, dignity, and lasting
              social development — guided by the principles of faith and
              humanity.
            </p>

            <h2 className='mt-12 text-4xl font-bold text-[#55833d]'>
              Our Vision
            </h2>

            <p className='mt-4 text-lg leading-relaxed text-gray-800'>
              A world where no potential is lost to poverty, where education and
              opportunity reach every corner, and where giving transforms lives,
              not just circumstances.
            </p>
          </div>

          {/* RIGHT — Image */}
          <div className='flex-1 flex justify-center lg:justify-end'>
            <img
              src={missionImg.src}
              alt='Mission training'
              className='w-full max-w-xl object-cover'
            />
          </div>
        </div>
      </Section>
    </SectionWrapper>
  );
}
