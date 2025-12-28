
import { NavItem, FeatureItem, FAQItem, StatItem } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Technology', href: '#tech' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Safety', href: '#safety' },
  { label: 'Journal', href: '#journal' },
];

export const FEATURES: FeatureItem[] = [
  {
    tag: 'Autonomous • 5x',
    title: 'Memo works in the kitchen',
    description: 'Building a single Memo today — by hand, with custom components — costs approximately $20,000.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    tag: 'Precision • 3ms',
    title: 'Memo is always learning',
    description: 'Our Skill Capture Glove™ enables Memo to distill millions of human movements into its onboard AI.',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
  }
];

export const STATS: StatItem[] = [
  { label: 'Latency', value: '3ms', sub: 'Real-time response' },
  { label: 'Dexterity', value: '27+', sub: 'Degrees of freedom' },
  { label: 'Uptime', value: '99.9%', sub: 'Continuous learning' },
  { label: 'Safety', value: 'L5', sub: 'Human-grade certified' },
];

export const FAQS: FAQItem[] = [
  {
    question: "What can Memo do?",
    answer: "Memo is designed for domestic assistance, ranging from complex kitchen management to organized storage solutions and laundry handling."
  },
  {
    question: "How much will a Memo cost?",
    answer: "Currently, initial beta units are targeted at early adopters. We expect mass production to bring the price point down significantly."
  },
  {
    question: "Is Memo safe for children?",
    answer: "Absolutely. Memo features a 'Soft-Touch' exterior and a suite of LIDAR and ultrasonic sensors."
  }
];
