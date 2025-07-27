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
  {
    name: 'TATA CONSULTANCY SERVICES Ltd.',
    position: 'Assistant Systems Engineer',
    url: 'https://www.tcs.com/',
    startDate: '2021-07-01',
    endDate: '2023-07-01',
    summary: 'I worked as **Assistant Systems Engineer** for The Home Depot.',
    highlights: [
      'My job and responsibilities were to develop, migrate '
      + 'test and deploy applications which benefited the '
      + 'internal and external retail domain of The Home Depot in '
      + 'scrum methodology',
      'Co-ordinated formal review meetings with rangers and '
      + 'on-site managers to discuss the deliverables and '
      + 'timelines along with in depth documentation of the '
      + 'application to ensure smooth workflow and data transfer.',
    ],
  },
];

export default work;
