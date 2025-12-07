import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';
import ProjectDetailItem from './ProjectDetailItem';

interface Impact {
  title: string;
  description: string;
}

interface ProjectImpactProps {
  items: Impact[];
}

const ProjectImpact: React.FC<ProjectImpactProps> = ({ items }) => {
  return (
    <SectionWrapper className='py-16'>
      <Section>
        <h2 className='text-2xl lg:text-3xl font-bold text-brand-secondary mb-8 text-center'>
          Impact
        </h2>

        <div className='grid gap-8 md:grid-cols-2'>
          {items.map((item, i) => (
            <ProjectDetailItem
              key={i}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Section>
    </SectionWrapper>
  );
};

export default ProjectImpact;
