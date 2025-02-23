import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Code2, Database, Globe, Bot } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    icon: <Globe className="w-6 h-6" />,
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS"]
  },
  {
    category: "Backend",
    icon: <Database className="w-6 h-6" />,
    items: ["Node.js", "Python"]
  },
  {
    category: "Data Science, AI, and Machine Learning",
    icon: <Bot className="w-6 h-6" />,
    items: ["Pandas", "Big Data", "NumPy", "Data Mining", "Python", "Jupyter Notebooks", "R Studio"]
  },
  {
    category: "Other",
    icon: <Code2 className="w-6 h-6" />,
    items: ["Git", "CI/CD", "Cloud Computing", "DevOps", "Linux"]
  }
];

export default function Skills() {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    startAutoScroll(); // Start auto-scroll on page l
