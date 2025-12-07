import ProjectGallery from './components/ProjectGallery';
import ProjectHeader from './components/ProjectHeader';
import ProjectImpact from './components/ProjectImpact';
import ProjectObjectives from './components/ProjectObjectives';

import placeholderImage from '../../../../../public/images/placeholder-image.png';

const page = () => {
  return (
    <>
      <ProjectHeader
        title='Sample Project Title'
        summary='This is a short summary paragraph describing the project in 2–3 lines.'
      />

      <ProjectObjectives
        items={[
          { title: 'Objective 1', description: 'Some description...' },
          { title: 'Objective 2', description: 'Some description...' },
          { title: 'Objective 3', description: 'Some description...' },
          { title: 'Objective 4', description: 'Some description...' }
        ]}
      />

      <ProjectImpact
        items={[
          { title: 'Impact 1', description: 'Some description...' },
          { title: 'Impact 2', description: 'Some description...' },
          { title: 'Impact 3', description: 'Some description...' }
        ]}
      />

      <ProjectGallery
        media={[
          { type: 'image', src: placeholderImage.src },
          { type: 'image', src: placeholderImage.src },
          { type: 'video', src: '/placeholder-video.mp4' }
        ]}
      />
    </>
  );
};

export default page;
