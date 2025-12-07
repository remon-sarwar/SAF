import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
}

interface ProjectGalleryProps {
  media: MediaItem[];
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ media }) => {
  return (
    <SectionWrapper className='py-16 bg-brand-soft'>
      <Section>
        <h2 className='text-2xl lg:text-3xl font-bold text-brand-secondary mb-8'>
          Gallery
        </h2>

        <div className='grid gap-6 md:grid-cols-3'>
          {media.map((item, i) => (
            <div
              key={i}
              className='rounded-xl overflow-hidden border border-sf-neutral-200 shadow-sm'
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  className='w-full h-full object-cover'
                  alt=''
                />
              ) : (
                <video
                  src={item.src}
                  controls
                  className='w-full h-full object-cover'
                />
              )}
            </div>
          ))}
        </div>
      </Section>
    </SectionWrapper>
  );
};

export default ProjectGallery;
