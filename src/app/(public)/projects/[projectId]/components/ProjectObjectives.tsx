import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';
import ProjectDetailItem from './ProjectDetailItem';

interface Objective {
  title: string;
  description: string;
}

interface ProjectObjectivesProps {
  items: Objective[];
}

const ProjectObjectives: React.FC<ProjectObjectivesProps> = ({ items }) => {
  return (
    <SectionWrapper className='py-16 bg-sf-neutral-50'>
      <Section>
        <h2 className='text-2xl lg:text-3xl font-bold text-brand-secondary mb-8 text-center'>
          Objectives
        </h2>

        <div className='grid gap-4 md:grid-cols-4'>
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

export default ProjectObjectives;
