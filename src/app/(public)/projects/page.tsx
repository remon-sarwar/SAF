import { projectsContent } from '@/data/projects';
import ProjectsIntro from './components/ProjectsIntro';
import CategoryGrid from './components/CategoryGrid';
import ProjectCategorySection from './components/ProjectCategorySection';

export default function page() {
  return (
    <>
      <ProjectsIntro />

      <CategoryGrid
        title='Our Core Program Areas'
        items={projectsContent.coreProgramAreas}
      />

      {projectsContent.categories.map(category => (
        <ProjectCategorySection
          key={category.id}
          title={category.title}
          subtitle={category.subtitle}
          items={category.items}
        />
      ))}
    </>
  );
}
