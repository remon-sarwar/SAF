interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image
}) => {
  return (
    <div className='rounded-xl overflow-hidden border border-sf-neutral-200 shadow-sm bg-white'>
      <img src={image} className='w-full h-40 object-cover' alt={title} />

      <div className='p-4'>
        <h3 className='text-lg font-semibold text-brand-secondary'>{title}</h3>
        <p className='text-sf-neutral-700 text-sm mt-1'>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
