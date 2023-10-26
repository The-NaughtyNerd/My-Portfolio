import { FaTelegramPlane, FaLaptopCode, FaBlog } from 'react-icons/fa';
import { BsPersonFill, BsPeopleFill } from 'react-icons/bs';
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
  htmlLogo,
  cssLogo,
  sassLogo,
  javascriptLogo,
  reactjsLogo,
  tailwindLogo,
  figmaLogo,
  gitLogo,
  auricle,
} from '../assets';

export const navigation = [
  {
    id: 1,
    link: '/',
    icon: AiFillHome,
    linkName: 'Home',
    current: true,
  },
  {
    id: 2,
    link: '/about',
    icon: BsPersonFill,
    linkName: 'About',
    current: false,
  },
  {
    id: 3,
    link: '/services',
    icon: MdBusinessCenter,
    linkName: 'Services',
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
    link: '/testimonials',
    icon: BsPeopleFill,
    linkName: 'Testimonials',
    current: false,
  },
  {
    id: 6,
    link: '/blog',
    icon: FaBlog,
    linkName: 'Blog',
    current: false,
  },
  {
    id: 7,
    link: '/contact',
    icon: FaTelegramPlane,
    linkName: 'Contact',
    current: false,
  },
];

export const services = [
  {
    id: 'service-1',
    service: 'Web Design',
    phrase: "Your website's first impression starts with exceptional design.",
    info: "Designing the digital world, one pixel at a time. I specialize in creating visually stunning and user-friendly websites that leave a lasting impression. With a keen eye for aesthetics and a deep understanding of user experience, I transform concepts into captivating designs. Let's collaborate to make your online presence shine. ",
    img: designer,
  },
  {
    id: 'service-2',
    service: 'Web Development',
    phrase: 'Your online success starts here!',
    info: "As a web developer, I'm dedicated to crafting captivating digital experiences. With expertise in HTML, CSS, JavaScript, and more, I bring your web projects to life. Whether you need a stunning website, a responsive design, or interactive web applications, I have you covered. Let's turn your vision into a pixel-perfect reality. ",
    img: developer,
  },
  {
    id: 'service-3',
    service: 'Content Writing',
    phrase: "Let's bring your ideas to life through the art of words.",
    info: "Words have the power to inform, engage, and inspire. I'm your content writing partner, dedicated to delivering impactful written solutions. Whether you need technical documentation, persuasive content, creative storytelling, or meticulous proofreading and editing, I've got you covered.  ",
    img: writer,
  },
  {
    id: 'service-4',
    service: 'Freelancing',
    info: "My services together makes me an efficient freelancer. With a commitment to quality, I'm here to turn your ideas into reality. Let's collaborate on your next project and achieve your goals together.",
    img: freelancer,
  },
];

export const skills = [
  {
    id: 1,
    name: 'HTML',
    img: htmlLogo,
    accuracy: '95',
  },
  {
    id: 2,
    name: 'CSS',
    img: cssLogo,
    accuracy: '95',
  },
  {
    id: 3,
    name: 'SASS',
    img: sassLogo,
    accuracy: '90',
  },
  {
    id: 4,
    name: 'Tailwind',
    img: tailwindLogo,
    accuracy: '85',
  },
  {
    id: 5,
    name: 'Javascript',
    img: javascriptLogo,
    accuracy: '70',
  },
  {
    id: 6,
    name: 'React',
    img: reactjsLogo,
    accuracy: '75',
  },
  {
    id: 7,
    name: 'Figma',
    img: figmaLogo,
    accuracy: '50',
  },
  {
    id: 8,
    name: 'Git',
    img: gitLogo,
    accuracy: '80',
  },
];

export const projects = [
  {
    id: 'project-1',
    title: 'GetLinked',
    screenshot: auricle,
    tools: 'TailwindCSS, React',
    preview: '',
    purpose: 'Challenge',
  },
  {
    id: 'project-2',
    title: 'Task Tracker',
    screenshot: auricle,
    tools: 'React, CSS',
    preview: '',
    purpose: 'Learning',
  },
  {
    id: 'project-3',
    title: 'Rest Country Generator',
    screenshot: auricle,
    tools: 'React, SASS',
    preview: '',
    purpose: 'Learning',
  },
  {
    id: 'project-4',
    title: 'Auricle',
    screenshot: auricle,
    tools: 'React, SASS, TailwindCSS, AnimateCSS',
    preview: '',
    purpose: 'Learning',
  },
];
