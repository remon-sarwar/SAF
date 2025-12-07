import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';

const SAFZakatHandling = () => {
  return (
    <SectionWrapper className='py-16 bg-white'>
      <Section>
        <h2 className='text-2xl lg:text-3xl font-bold text-brand-secondary mb-6'>
          How SA Foundation Handles Zakat
        </h2>

        <div className='space-y-6 text-sf-neutral-700 max-w-3xl'>
          <p>
            SA Foundation maintains strict separation between Zakat funds and
            general donations to ensure full Shariah compliance. All Zakat
            contributions are tracked and distributed exclusively to eligible
            recipients.
          </p>

          <p>
            Zakat funds support essential needs such as food, education,
            healthcare, housing assistance, and emergency relief for qualifying
            families and individuals.
          </p>

          <p>
            Our distribution process follows verified guidelines to ensure
            transparency, accountability, and responsible use of every donation
            entrusted to us.
          </p>
        </div>
      </Section>
    </SectionWrapper>
  );
};

export default SAFZakatHandling;
