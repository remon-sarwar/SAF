import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';
import ProjectCard from './ProjectCard';

interface CategoryItem {
  title: string;
  description: string;
  image: string;
}

interface CategoryGridProps {
  title: string;
  subtitle?: string;
  items: CategoryItem[];
}

const CategoryGrid: React.FC<CategoryGridProps> = ({
  title,
  subtitle,
  items
}) => {
  return (
    <SectionWrapper className='py-16 bg-sf-neutral-50'>
      <Section>
        <h2 className='text-3xl font-bold text-brand-secondary text-center mb-8'>
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

export default CategoryGrid;
