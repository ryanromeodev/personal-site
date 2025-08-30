/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  // {
  //   name: 'Fraunhofer-Institut für Fertigungstechnik und Angewandte Materialforschung IFAM',
  //   position: 'Studentische Hilfskrafte',
  //   url: 'https://www.ifam.fraunhofer.de/',
  //   startDate: '2021-06-16',
  //   endDate: '',
  //   summary: 'I worked as **Python automation engineer** for automating Ansys Electronic Desktop',
  //   highlights: [
  //     `My job an responsibility was to develop python code to automate Ansys electronic desktop 
  //     using PyAEDT api which could size the best possible solution for the electrostatic and 
  //     thermal analysis of different types of motors.`,
  //     `Die Arbeit, Dokumentationen und Besprechungen wurden komplett auf Deutsch durchgeführt.
  //     Die Kaffeepausen mit Gesprächen über Interessen und Hobbys haben mir sehr geholfen, mich in 
  //     die deutsche Arbeitskultur zu integrieren.`,
  //   ],
  // },
  {
    name: 'TATA CONSULTANCY SERVICES Ltd.',
    position: 'Assistant Systems Engineer',
    url: 'https://www.tcs.com/',
    startDate: '2021-07-01',
    endDate: '2023-07-01',
    summary: 'I worked as **Assistant Systems Engineer** for The Home Depot.',
    highlights: [
      `My job and responsibilities were to develop, migrate
      test and deploy applications which benefited the
      internal and external retail domain of The Home Depot in
      scrum methodology`,
      `Co-ordinated formal review meetings with rangers and
      on-site managers to discuss the deliverables and
      timelines along with in depth documentation of the
      application to ensure smooth workflow and data transfer.`,
    ],
  },
];

export default work;
