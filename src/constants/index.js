import { FaTelegramPlane, FaLaptopCode, FaCode, FaBlog } from 'react-icons/fa';
import { GrServices } from 'react-icons/gr';
import { BsPersonFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { MdBusinessCenter } from 'react-icons/md';
import { GiSkills } from 'react-icons/gi';

import {
  uDeveloper,
  uFreelancer,
  uWriter,
  uDesigner,
  designer,
  developer,
  writer,
  freelancer,
} from '../assets';

export const navigation = [
  { id: 1, link: '/', icon: AiFillHome, linkName: 'Home', current: true },
  {
    id: 2,
    link: '/about',
    icon: BsPersonFill,
    linkName: 'About',
    current: false,
  },
  {
    id: 3,
    link: '/skills',
    icon: GiSkills,
    linkName: 'Skills',
    current: false,
  },
  {
    id: 4,
    link: '/projects',
    icon: FaLaptopCode,
    linkName: 'Projects',
    current: false,
  },
  {
    id: 5,
    link: '/blog',
    icon: FaBlog,
    linkName: 'Blog',
    current: false,
  },
  {
    id: 6,
    link: '/contact',
    icon: FaTelegramPlane,
    linkName: 'Contact',
    current: false,
  },
  // { id: 6, link: '/team', linkName: 'Team', current: false },
  // { id: 8, link: '/service', linkName: 'Service' },
];

export const services = [
  {
    id: 'service-1',
    service: 'Web Design',
    info: "Designing the digital world, one pixel at a time. I specialize in creating visually stunning and user-friendly websites that leave a lasting impression. With a keen eye for aesthetics and a deep understanding of user experience, I transform concepts into captivating designs. Let's collaborate to make your online presence shine. Your website's first impression starts with exceptional design.",
    img: designer,
  },
  {
    id: 'service-2',
    service: 'Web Development',
    info: "As a web developer, I'm dedicated to crafting captivating digital experiences. With expertise in HTML, CSS, JavaScript, and more, I bring your web projects to life. Whether you need a stunning website, a responsive design, or interactive web applications, I have you covered. Let's turn your vision into a pixel-perfect reality. Your online success starts here!",
    img: developer,
  },
  {
    id: 'service-3',
    service: 'Content Writing',
    info: "Words have the power to inform, engage, and inspire. I'm your content writing partner, dedicated to delivering impactful written solutions. Whether you need technical documentation, persuasive content, creative storytelling, or meticulous proofreading and editing, I've got you covered. Let's bring your ideas to life through the art of words. ",
    img: writer,
  },
  {
    id: 'service-4',
    service: 'Freelancing',
    info: "My services together makes me an efficient freelancer. With a commitment to quality, I'm here to turn your ideas into reality. Let's collaborate on your next project and achieve your goals together.",
    img: freelancer,
  },
];
