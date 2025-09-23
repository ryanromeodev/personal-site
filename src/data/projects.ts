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
    title: 'A Bi-Quadratic Filter',
    subtitle: 'as a part of Optical Lab',
    image: './images/projects/filterdesign.png',
    date: '2024-04-20',
    desc: `This project centers on the analog circuit design of a universal biquad filter (Low Pass, High Pass, Band Stop and Band Pass Filters) targeting a corner frequency of 1 kHz and a quality factor (Q) of 10. The design process spans the complete development cycle—from initial specification and simulation to physical layout and hardware realization. Key phases include schematic design, functional modeling, simulation, and full PCB development.`,
    link: 'https://github.com/ryanromeodev/hsb-amcd-sose2025-5/blob/main/README.md',
  },
  {
    title: 'Plant-App: Flutter/Dart Application',
    subtitle: 'as a hobbying project',
    image: './images/projects/plantapp.png',
    date: '2024-04-20',
    desc: `Flutter, Dart Application with File I/O, CRUD, Notification, Themes and Fun for Plant🪴 Enthusiasts and Hobbyist.`,
    link: 'https://github.com/ryanromeodev/Plant-App/blob/main/README.md',
  },
  {
    title: 'Estimation of Brewster angle using Frensel equation',
    subtitle: 'as a part of Optical Lab',
    image: './images/projects/frenselexp.jpg',
    date: '2024-04-20',
    desc: ` This experiment is performed to identify the light reflection
        at an interface between two media. Quantitative verification
        of Frensel formulas for reflection of p- and s- polarised light
        is performed along with measurement of brewster angle for a
        p-polarised light.`,
    link: '/resume',
  },
  {
    title:
      "Understanding of Linearly polarized light, Malu\'s law, and verification of Optical Acivity",
    subtitle: 'as a part of Optical Lab',
    image: './images/projects/malusLaw.jpg',
    date: '2024-05-20',
    desc: ` Measurement of optical activity by polarization rotation in a sugar solution,
        Generation of linearly polarized light with a polaroid filter
        Analyzing polarized light with a linear polarization polaroid filter
        Understanding properties of linearly polarized light`,
  },
  {
    title: 'Charecterisation of Laser Radiation',
    subtitle: 'using Labview and Arduino mega 2560',
    image: './images/projects/Claser.jpg',
    date: '2024-06-20',
    desc: `Estimated various parametrs of HeNe Laser. For different distances z the Intensity of the laser beam is recorded by'
        a CCD and the diameter of the laser beam is calculated.`,
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
