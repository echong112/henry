import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
const skills = [
  {
    title: 'Web',
    skills: ['HTML',
    'CSS(3)',
    'SASS/SCSS',
    'JavaScript',
    'jQuery',
    'PHP'
    ]
  },
  {
    title: 'Code',
    skills: ['TypeScript',
    'ES6',
    'Java',
    ]
  },
  {
    title: 'Database',
    skills: [
      'MSSQL',
      'MYSQL',
      'MongoDB'
    ]
  },
  {
    title: 'Server',
    skills: [
      'node',
      'LAMP',
      'Apache',
      'Docker'
    ]
  },
  {
    title: 'Marketing',
    skills: [
      'Sailthru',
      'HubSpot',
      'Google Ads',
      'Facebook Ads',
      'YouTube Ads',
      'SEO'
    ]
  },
  {
    title: 'Tools',
    skills: [
      'git',
      'gulp',
      'webpack',
      'Visual Studio Code',
      'XCode',
      'Android Studio'
    ]
  },
  {
    title: 'Tools',
    skills: [
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Microsoft Office',
    ]
  },
  {
    title: 'Analytics',
    skills: [
      'GTM',
      'Segment.io',
      'Optimizely',
    ]
  },
  {
    title: 'eCommerce',
    skills: [
      'Magento',
      'OpenCart',
      'Shopify',
    ]
  },
  {
    title: 'Coming soon...',
    skills: [
      'Apollo + GraphQL',
      'Django',
      'Kotlin',
      'Python',
    ]
  },
  {
    title: 'JavaScript',
    skills: [
      'AngularJS',
      'next.js',
      'React',
      'React Native',
      'Redux',
      'Vue',
      'Vuex'
    ]
  },
  {
    title: 'CMS',
    skills: [
      'Drupal',
      'Joomla',
      'Prismic',
      'WordPress',
    ]
  },
  {
    title: 'Testing',
    skills: [
      'Enzyme',
      'Jasmine',
      'Jest',
      'Karma',
    ]
  },
  {
    title: 'Cloud',
    skills: [
      'AWS',
      'Azure',
      'Firebase',
      'Google Cloud',
      'Heroku',
      'IBM Cloud',
    ]
  }
];

const Skills: React.FC = () => {
  const activeIndex = useSelector((state: any) => state.activeIndex);
  let thisPage: any;
  useEffect(() => {
    if (activeIndex && thisPage) thisPage.scrollTo(activeIndex, activeIndex * 10);
  }, [activeIndex]);

  return (
    <div className="page" ref={myPage => thisPage = myPage}>
      <div className="skills">
        {skills && skills.map((skill, i) => (
          <div className="skill-group" key={i}>
            <h4>{skill.title}</h4>
            {skill.skills.map((item, j) => <p key={j}>{item}</p>)}
          </div>
        ))}
      </div>
      <p></p>
    </div>
  )
}

export default Skills;
