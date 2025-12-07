import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';
import ProjectCard from './ProjectCard';

interface ProjectCategorySectionProps {
  title: string;
  subtitle?: string;
  items: {
    title: string;
    description: string;
    image: string;
  }[];
}

const ProjectCategorySection: React.FC<ProjectCategorySectionProps> = ({
  title,
  subtitle,
  items
}) => {
  return (
    <SectionWrapper className='py-16'>
      <Section>
        <h2 className='text-3xl font-bold text-brand-secondary text-center mb-2'>
          {title}
        </h2>

        {subtitle && (
          <p className='text-center text-sf-neutral-700 mb-10'>{subtitle}</p>
        )}

        <div className='grid gap-8 md:grid-cols-3'>
          {items.map((item, i) => (
            <ProjectCard key={i} {...item} />
          ))}
        </div>
      </Section>
    </SectionWrapper>
  );
};

export default ProjectCategorySection;
