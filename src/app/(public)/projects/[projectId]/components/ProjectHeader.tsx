import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';

interface ProjectHeaderProps {
  title: string;
  summary: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ title, summary }) => {
  return (
    <SectionWrapper className='bg-brand-soft py-16'>
      <Section>
        <h1 className='text-3xl lg:text-4xl font-bold text-brand-secondary mb-4 text-center'>
          {title}
        </h1>
        <p className='text-lg text-sf-neutral-700 leading-relaxed text-center'>
          {summary}
        </p>
      </Section>
    </SectionWrapper>
  );
};

export default ProjectHeader;
