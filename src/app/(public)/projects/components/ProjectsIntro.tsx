import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';

const ProjectsIntro = () => {
  return (
    <SectionWrapper className='py-16 bg-brand-soft'>
      <Section>
        <h1 className='text-4xl font-bold text-brand-secondary text-center'>
          Introducing Our Projects
        </h1>
        <p className='text-center text-sf-neutral-700 mt-4'>
          We have charitable projects under various aspects of humanitarian
          needs.
        </p>
      </Section>
    </SectionWrapper>
  );
};

export default ProjectsIntro;
