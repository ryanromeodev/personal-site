export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
  {
    title: 'Python',
    competency: 4,
    category: ['Language', 'Python', 'Data Engineering'],
  },
  {
    title: 'ScipPy, Numpy, Pandas, Matplotlib, Jupyter, Built-in-packages...',
    competency: 4,
    category: ['Data Engineering', 'Python'],
  },
  {
    title: 'KiCAD',
    competency: 4,
    category: ['Software', 'PCB Design'],
  },
  {
    title: 'Altium',
    competency: 3,
    category: ['Software', 'PCB Design'],
  },
  {
    title: 'Next.JS, TypeScript, Node.JS, React',
    competency: 3,
    category: ['Web Development', 'Language'],
  },
  {
    title: 'PostgreSQL, MySQL, SQL',
    competency: 3,
    category: ['Web Development', 'Databases', 'Language'],
  },
  {
    title: 'Git, GitLab, Slack',
    competency: 4,
    category: ['Tools', 'Documentation', 'Workspace'],
  },
  {
    title: 'Google Cloud Platform, Docker, Kubernetes',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Flutter, Dart',
    competency: 4,
    category: ['Software', 'Language'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Language'],
  },
  {
    title: 'Ansys Electronic Desktop',
    competency: 3,
    category: ['Software', 'Python'],
  },
  {
    title: 'MATLAB',
    competency: 3,
    category: ['Software'],
  },
  {
    title: 'Android Studio',
    competency: 3,
    category: ['Software'],
  },
  {
    title: 'LabVIEW',
    competency: 2,
    category: ['Software'],
  },
  {
    title: 'Quarto',
    competency: 3,
    category: ['Documentation'],
  },
  {
    title: 'LaTex',
    competency: 4,
    category: ['Documentation'],
  },
  {
    title: 'MS Office',
    competency: 4,
    category: ['Workspace'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors: string[] = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories: Category[] = Array.from(new Set(skills.flatMap(({ category }) => category)))
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
