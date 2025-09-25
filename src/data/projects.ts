export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
}

const data: Project[] = [
  {
    title: 'BiQuad Filter Design',
    subtitle: 'as a part of Optical Lab',
    image: './images/projects/filterdesign.png',
    date: '2024-04-20',
    desc: `This project centers on the analog circuit design of a universal biquad filter targeting a corner frequency of 1 kHz and a quality factor (Q) of 10.`,
    link: 'https://ryanromeodev.github.io/hsb-amcd-sose2025-5/',
  },
  {
    title: 'Plant-App',
    subtitle: 'as a hobbying project',
    image: './images/projects/plantapp.png',
    date: '2024-04-20',
    desc: `Flutter, Dart Application with File I/O, CRUD, Notification, Themes and Fun for Plant🪴 Enthusiasts and Hobbyist.`,
    link: 'https://ryanromeodev.github.io/Plant-App/',
  },
  {
    title: 'Estimation of Brewster angle using Frensel equation',
    subtitle: 'as a part of Optical Lab',
    image: './images/projects/frenselexp.jpg',
    date: '2024-04-20',
    desc: ` This experiment is performed to identify the light reflection
        at an interface between two media.`,
    link: '/resume',
  },
  {
    title:
      "Understanding of Linearly polarized light, Malu\'s law, and verification of Optical Acivity",
    subtitle: 'as a part of Optical Lab',
    image: './images/projects/malusLaw.jpg',
    date: '2024-05-20',
    desc: ` Measurement of optical activity by polarization rotation in a sugar solution,
        Analyzing polarized light with a linear polarization polaroid filter`,
  },
  {
    title: 'Prototype of 3 - phase measurement system',
    subtitle: 'using Labview and Arduino mega 2560',
    image: './images/projects/Lcode.jpg',
    date: '2023-08-20',
    desc: `Verification of the output Characteristics of Transistor
        (BC547B) using LabVIEW and familiarization with LabVIEW software`,
  },
];

export default data;
