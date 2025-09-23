import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://github.com/oreymaonr',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/ryan-romeo-aa880821a/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:ryanromeo10@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://www.instagram.com/ryanrome0?igsh=d3dxejNwZHh6ZWlz&utm_source=qr',
    label: 'Instagram',
    icon: faInstagram,
  },
];

export default data;
