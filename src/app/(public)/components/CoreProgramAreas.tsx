import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';

import ss1 from '../../../../public/images/areas/Gemini_Generated_Image_77061n77061n7706.png';
import ss2 from '../../../../public/images/areas/Gemini_Generated_Image_mh44plmh44plmh44.png';
import ss3 from '../../../../public/images/areas/Gemini_Generated_Image_irysu5irysu5irys.png';
import ss4 from '../../../../public/images/areas/Gemini_Generated_Image_uztyzduztyzduzty.png';
import ss5 from '../../../../public/images/areas/Gemini_Generated_Image_8x3v688x3v688x3v.png';

const programs = [
  {
    title: 'Educational Support Initiative',
    desc: 'Education scholarship for students',
    img: ss5.src
  },
  {
    title: 'Technical & Vocational Training',
    desc: 'Vocational training for the youth',
    img: ss2.src
  },
  {
    title: 'Self-reliance Program',
    desc: 'Self-reliance program',
    img: ss3.src
  },
  {
    title: 'Social Services',
    desc: 'Social services for the underprivileged',
    img: ss1.src
  },
  {
    title: 'Healthcare & Sanitation',
    desc: 'Healthcare assistance',
    img: ss4.src
  },
  {
    title: 'Agricultural Initiative Program',
    desc: 'Small agricultural farm for those in need',
    img: ss4.src
  }
];

export default function ProgramAreas() {
  return (
    <SectionWrapper className='w-full bg-white py-28'>
      <Section>
        {/* Heading */}
        <h2 className='text-4xl font-bold text-[#55833d] text-center mb-16'>
          Our Core Program Areas
        </h2>

        {/* Grid */}
        <div className='w-full flex flex-wrap justify-center gap-10'>
          {programs.map((item, i) => (
            <div
              key={i}
              className='w-full sm:w-[45%] lg:w-[30%] bg-[#f4f8f2] rounded-2xl shadow-md overflow-hidden'
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className='w-full h-[150px] object-cover'
              />

              {/* Content */}
              <div className='p-5'>
                <h3 className='text-xl font-bold text-[#65af3e]'>
                  {item.title}
                </h3>
                <p className='mt-1 text-gray-700'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </SectionWrapper>
  );
}
