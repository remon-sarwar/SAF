// data/projects.ts

import ss1 from '../../public/images/areas/Gemini_Generated_Image_77061n77061n7706.png';
import ss2 from '../../public/images/areas/Gemini_Generated_Image_mh44plmh44plmh44.png';
import ss3 from '../../public/images/areas/Gemini_Generated_Image_irysu5irysu5irys.png';
import ss4 from '../../public/images/areas/Gemini_Generated_Image_uztyzduztyzduzty.png';
import ss5 from '../../public/images/areas/Gemini_Generated_Image_8x3v688x3v688x3v.png';

import placeholderImage from '../../public/images/placeholder-image.png';

export interface CategoryItem {
  title: string;
  description: string;
  image: string;
}

export interface CategorySection {
  id: string;
  order: number;
  title: string;
  subtitle?: string;
  items: CategoryItem[];
}

export interface ProjectsContent {
  intro: {
    title: string;
    subtitle: string;
  };
  coreProgramAreas: CategoryItem[];
  categories: CategorySection[];
}

export const projectsContent: ProjectsContent = {
  intro: {
    title: 'Introducing Our Projects',
    subtitle:
      'We have charitable projects under various aspects of humanitarian needs.'
  },

  coreProgramAreas: [
    {
      title: 'Educational Support Initiative',
      description: 'Educational assistance and scholarship for students',
      image: ss1.src
    },
    {
      title: 'Technical & Vocational Training',
      description: 'Vocational training for the youth',
      image: ss3.src
    },
    {
      title: 'Self-reliance Program',
      description: 'Self sufficiency program',
      image: ss4.src
    },
    {
      title: 'Social Services',
      description: 'Social services for the underprivileged',
      image: ss2.src
    },
    {
      title: 'Healthcare & Sanitation',
      description: 'Social services for the underprivileged',
      image: ss2.src
    },
    {
      title: 'Agricultural Initiative Program',
      description: 'Small agricultural farm for those in need',
      image: ss5.src
    }
  ],

  categories: [
    {
      id: 'education',
      order: 1,
      title: 'Educational ',
      subtitle: 'Education projects introduction',
      items: [
        {
          title: 'Admission Aid Scholarship',
          description: '...',
          image: placeholderImage.src
        },
        {
          title: 'Annual Achievement Scholarship',
          description: '...',
          image: placeholderImage.src
        },
        {
          title: 'Interest Free Student loan',
          description: '...',
          image: placeholderImage.src
        },
        {
          title: 'Satellite Library',
          description: '...',
          image: placeholderImage.src
        }
      ]
    },
    {
      id: 'vocational-training',
      order: 2,
      title: 'Technical & Vocational Training Program',
      subtitle: 'Vocational training description',
      items: [
        {
          title: 'Computer Training',
          description: '...',
          image: placeholderImage.src
        },
        {
          title: 'Tailoring',
          description: '...',
          image: placeholderImage.src
        },
        {
          title: 'Language Training',
          description: '...',
          image: placeholderImage.src
        }
      ]
    },
    {
      id: 'sufficiency-program',
      order: 3,
      title: 'Self-reliance Program',
      subtitle: 'Self-reliance program description',
      items: [
        {
          title: 'Employment Program',
          description: '...',
          image: placeholderImage.src
        },
        {
          title: 'Rickshaw/Van Program',
          description: '...',
          image: placeholderImage.src
        },
        {
          title: 'Agricultural Farming', // overlaps with agro
          description: '...',
          image: placeholderImage.src
        }
      ]
    },
    {
      id: 'social-services',
      order: 4,
      title: 'Social Services',
      subtitle: 'Social services description',
      items: [
        {
          title: 'Clean Water',
          description: '...',
          image: placeholderImage.src
        },
        {
          title: 'Sanitation',
          description: '...',
          image: placeholderImage.src
        },
        {
          title: 'Tree Planting',
          description: '...',
          image: placeholderImage.src
        }
      ]
    },
    {
      id: 'healthcare-assistance',
      order: 5,
      title: 'Healthcare & Sanitation',
      subtitle: 'Healthcare assistance description',
      items: [
        {
          title: 'Eye Care',
          description: '...',
          image: placeholderImage.src
        },
        {
          title: 'Free Friday',
          description: '...',
          image: placeholderImage.src
        }
      ]
    },
    {
      id: 'small-agro-farm',
      order: 6,
      title: 'Agricultural Initiative Program',
      subtitle: 'Small Agro Farm Description',
      items: [
        {
          title: 'Animal Husbandry',
          description: '...',
          image: placeholderImage.src
        },
        {
          title: 'Poultry',
          description: '...',
          image: placeholderImage.src
        },
        {
          title: 'Seed Farming',
          description: '...',
          image: placeholderImage.src
        },
        {
          title: 'Backyard Gardening',
          description: '...',
          image: placeholderImage.src
        }
      ]
    }
  ]
};
