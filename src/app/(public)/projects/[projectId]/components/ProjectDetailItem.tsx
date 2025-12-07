interface ProjectDetailItemProps {
  title: string;
  description: string;
}

const ProjectDetailItem: React.FC<ProjectDetailItemProps> = ({
  title,
  description
}) => {
  return (
    <div className='p-6 bg-white rounded-xl border border-sf-neutral-200 shadow-sm'>
      <h3 className='text-xl font-semibold text-brand-secondary'>{title}</h3>
      <p className='mt-2 text-sf-neutral-700 leading-relaxed'>{description}</p>
    </div>
  );
};

export default ProjectDetailItem;
