'use client';

const WhatWeDoBlock = () => {
  return (
    <section className='flex flex-col gap-8'>
      <h3 className='text-2xl font-semibold text-brand-secondary'>
        What We Do
      </h3>

      <p className='text-sf-neutral-700 leading-relaxed max-w-3xl'>
        [Placeholder overview: short paragraph describing the overall purpose of
        the sponsorship program and how SA Foundation helps students in need.]
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4'>
        {/* Card 1 */}
        <div className='p-6 rounded-2xl bg-white shadow-sm'>
          <h4 className='text-xl font-semibold text-brand-primary mb-3'>
            Receive Updates
          </h4>
          <p className='text-sf-neutral-700 leading-relaxed'>
            [Placeholder: Explanation of how scholarships assist students with
            temporary or academic-year-based support.]
          </p>
        </div>

        {/* Card 2 */}
        <div className='p-6 rounded-2xl bg-white shadow-sm'>
          <h4 className='text-xl font-semibold text-brand-primary mb-3'>
            Scholarship vs Sponsorship
          </h4>
          <p className='text-sf-neutral-700 leading-relaxed'>
            [Placeholder: Description of how sponsorship provides long-term,
            continuous guidance and resources for a student’s full growth path.]
          </p>
        </div>

        {/* Card 3 */}
        <div className='p-6 rounded-2xl bg-white shadow-sm'>
          <h4 className='text-xl font-semibold text-brand-primary mb-3'>
            Financial Commitment
          </h4>
          <p className='text-sf-neutral-700 leading-relaxed'>
            [Placeholder: The financial commtiment text]
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoBlock;
