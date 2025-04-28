import React, { useState } from 'react';
import { Home, Smile, Users, Calendar, BookOpen, MessageCircleHeart, Mail, Globe, Github, Candy, Sprout, HandHeart, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import { useRef } from "react";

const papers = [
  {
    title: "Attention Is All You Need",
    authors: "Vaswani et al.",
    year: "2017",
    link: "https://arxiv.org/abs/1706.03762",
  },
  {
    title: "BERT: Pre-training of Deep Bidirectional Transformers",
    authors: "Devlin et al.",
    year: "2018",
    link: "https://arxiv.org/abs/1810.04805",
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F5DFDF]">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center text-[#AF3737] font-semibold text-xl">
              <Candy className="inline w-5 h-5 text-[#AF3737] animate-bounce mr-2" />ECAI 2025 Tutorial
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <NavItem icon={<Home size={18} />} text="Home" onClick={() => scrollToSection('home')} />
              <NavItem icon={<Smile size={18} />} text="About" onClick={() => scrollToSection('about')} />
              <NavItem icon={<Users size={18} />} text="Organizer" onClick={() => scrollToSection('organizer')} />
              <NavItem icon={<Calendar size={18} />} text="Schedule" onClick={() => scrollToSection('schedule')} />
              <NavItem icon={<BookOpen size={18} />} text="Reading List" onClick={() => scrollToSection('reading')} />
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://ecai2025.org/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                <img
                  src="https://ecai2025.org/wp-content/uploads/2023/09/logo.png"
                  className="w-21 h-8 object-cover cursor-pointer hover:scale-105 transition-transform duration-200"
                  alt="ECAI 2025 Logo"
                />
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="block md:hidden p-2 text-[#AF3737] hover:text-[#E8B6B6] transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
              <div className="px-4 py-2 space-y-1">
                <MobileNavItem icon={<Home size={18} />} text="Home" onClick={() => scrollToSection('home')} />
                <MobileNavItem icon={<Smile size={18} />} text="About" onClick={() => scrollToSection('about')} />
                <MobileNavItem icon={<Users size={18} />} text="Organizer" onClick={() => scrollToSection('organizer')} />
                <MobileNavItem icon={<Calendar size={18} />} text="Schedule" onClick={() => scrollToSection('schedule')} />
                <MobileNavItem icon={<BookOpen size={18} />} text="Reading List" onClick={() => scrollToSection('reading')} />
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#AF3737] mb-4">
            Insight to Impact: Multimodal AI for a More Accessible World
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Explore the latest advances in Multimodal AI
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Cross-Disciplinary Innovation"
              description="Combining and exploring techniques from human perception to real action"
              image="https://images.pexels.com/photos/2228183/pexels-photo-2228183.jpeg"
            />
            <FeatureCard
              title="Lecture & Hands-on Sessions"
              description="Practical tutorial to implement and experiment with Multimodal AI"
              image="https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg"
            />
            <FeatureCard
              title="Networking"
              description="Early-stage researchers, experts, and the general public brainstorm together"
              image="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#AF3737] mb-8 text-center">About the Tutorial</h2>
          <p className="text-lg text-gray-600 mb-8">
            This tutorial is for researchers and engineers in computer vision, natural language processing, multimodal systems, generative AI, and assistive technology. It builds on key ideas from past foundational works in video denoising, text-driven image editing, robotic manipulation, and multimodal large language models for specific fields. The session also considers critical ethical issues to address real-world challenges faced by disabled individuals. It combines lecture-style talks with hands-on activities where participants can develop a prototype system. <br /><strong className="font-bold text-gray-800"><MessageCircleHeart className="inline w-5 h-5 text-[#AF3737] animate-bounce mr-2" />Whether you are a general public, a PhD student just starting, or an expert with years of interdisciplinary experience, this tutorial provides useful research perspectives and practical skills.</strong>
          </p>

          {/* Target Audience */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[#AF3737] mb-4">Target Audience</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#F5DFDF] p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Graduate Students & Early-stage PhD Students</h4>
                <p className="text-gray-700">Interested in multimodal learning, robotics, and assistive technologies. This tutorial introduces state-of-the-art Multimodal Large Language Models (MM-LLMs) and assistive technology.</p>
              </div>
              <div className="bg-[#F5DFDF] p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Experienced Researchers & Engineers</h4>
                <p className="text-gray-700">From fields such as computer vision, NLP, multimodal, robotics, and medical or rehabilitation engineering exploring new intersections between these disciplines.</p>
              </div>
              <div className="bg-[#F5DFDF] p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Industry Professionals</h4>
                <p className="text-gray-700">Focusing on developing smart assistive systems. This tutorial introduces reality applications that can be utilized in assistive scenarios.</p>
              </div>
              <div className="bg-[#F5DFDF] p-6 rounded-lg">
                <h4 className="font-semibold mb-2">General Public</h4>
                <p className="text-gray-700">Interested in advanced AI technologies and related applications that benefit daily life. Experience how AI can contribute to daily life.</p>
              </div>
            </div>
          </div>

          {/* Prerequisites */}
          <div>
            <h3 className="text-2xl font-semibold text-[#AF3737] mb-4">Prerequisites</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#F5DFDF] p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Lecture Session</h4>
                <p className="text-gray-700">Basic understanding of computer vision and multimodal large language models.</p>
              </div>
              <div className="bg-[#F5DFDF] p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Hands-on Session (Not mandatory)</h4>
                <p className="text-gray-700">Basic knowledge about Python, generative models and generative AI application usage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizer Section */}
      <section id="organizer" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#AF3737] mb-8 text-center">Organizer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <OrganizerCard
              name="Dr. Yutong Zhou"
              role="Organizer & Speaker"
              image="https://media.licdn.com/dms/image/v2/D4E03AQFKf81PTtuPPA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713613796240?e=1750896000&v=beta&t=bY0rO6nSqxHrdjToqtNPxa9QP3yZ-Ef_yrWY9Y1LzbU"
            />
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-[#AF3737] mb-4">Personal Profile</h3>
              <p className="text-gray-600 mb-4">
                Dr. Zhou is a postdoctoral researcher at the Leibniz Centre for Agricultural Landscape Research with rich experience in multimodal AI, computer vision, and biodiversity science. Her works focus on cutting-edge research in video enhancement, generative image editing, innovative image generation, and AI × Biodiversity × Smart agriculture. She is exploring multimodal applications that make a touchable and responsible social impact.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="mailto:yutong.zhou@zalf.de" className="text-gray-600 hover:text-[#AF3737]">
                  <Mail size={20} />
                </a>
                <a href="https://elizazhou96.github.io/" className="text-gray-600 hover:text-[#AF3737]">
                  <Globe size={20} />
                </a>
                <a href="https://github.com/Yutong-Zhou-cv" className="text-gray-600 hover:text-[#AF3737]">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#AF3737] mb-8 text-center">Schedule</h2>
          <div className="space-y-6">
            <ScheduleItem
              time="9:00 AM - 9:30 AM"
              title={
                <span className="inline-flex items-center gap-1">
                  <Sprout className="w-4 h-4 text-[#AF3737]" />
                  [Lecture] Introduction and Motivation
                </span>
              }
              speaker="Dr. Zhou"
              description="Opening lecture covering the fundamentals and motivation behind multimodal AI"
            />
            <ScheduleItem
              time="9:30 AM - 10:00 AM"
              title={
                <span className="inline-flex items-center gap-1">
                  <Sprout className="w-4 h-4 text-[#AF3737]" />
                  [Lecture] From Foundational Technologies to Assistive Prototypes
                </span>
              }
              speaker="Dr. Zhou"
              description="Deep dive into the technical aspects and practical applications"
            />
            <ScheduleItem
              time="10:00 AM - 10:15 AM"
              title="Break and Hands-on Session Preparation"
              speaker="All Participants"
              description="Short break to prepare for the hands-on session"
            />
            <ScheduleItem
              time="10:15 AM - 11:15 AM"
              title={
                <span className="inline-flex items-center gap-1">
                  <HandHeart className="w-4 h-4 text-[#AF3737]" />
                  [Hands-on] Building an Intelligent Assistive System Prototype
                </span>
              }              
              speaker="All Participants"
              description={
                <div className="space-y-2">
                  <p>• General Public: Participants can access a simple website on their phones/laptops</p>
                  <p>• Experienced Researchers: Participants can explore a full system prototype, and adjust and test the code</p>
                </div>
              }
            />
            <ScheduleItem
              time="11:15 AM - 11:30 AM"
              title={
                <span className="inline-flex items-center gap-1">
                  <Sprout className="w-4 h-4 text-[#AF3737]" />
                  [Lecture] New Frontiers and Future Directions
                </span>
              }               
              speaker="Dr. Zhou"
              description="Discussion of emerging trends and future research directions"
            />
            <ScheduleItem
              time="11:30 AM - 12:00 PM"
              title="Q&A and Brainstorming"
              speaker="All Participants"
              description="Interactive discussion and idea exchange session"
            />
          </div>
        </div>
      </section>
       
      {/* Reading List Section */}
      <section id="reading" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#AF3737] mb-8 text-center">
            Reading List
          </h2>
          <ReadingListSlider />
        </div>
      </section>

      {/* Footer with Copyright */}
      <footer className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p>© Copyright Yutong Zhou. All rights reserved.</p>
            <p className="mt-2">ECAI 2025 Tutorial</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavItem({ icon, text, onClick }: { icon: React.ReactNode; text: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-1 text-gray-700 hover:text-[#AF3737] transition-colors duration-200"
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}

function MobileNavItem({ icon, text, onClick }: { icon: React.ReactNode; text: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-2 w-full px-3 py-2 text-gray-700 hover:text-[#AF3737] hover:bg-gray-50 rounded-md transition-colors duration-200"
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}

function FeatureCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#AF3737] mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function OrganizerCard({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold text-[#AF3737] mb-1">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
}

function ScheduleItem({
  time,
  title,
  speaker,
  description,
}: {
  time: string;
  title: React.ReactNode;
  speaker: string;
  description: React.ReactNode;
}) {
  return (
    <div className="bg-[#F5DFDF] rounded-xl p-6 transition transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:bg-[#fbeaea] hover:border-[#AF3737] border border-transparent">
      <div className="flex flex-col space-y-2">
        <div className="font-semibold text-[#AF3737]">{time}</div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600">{speaker}</p>
          <div className="mt-2 text-gray-700">{description}</div>
        </div>
      </div>
    </div>
  );
}

function ReadingListSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const cardWidth = scrollRef.current?.firstElementChild?.clientWidth || 300;
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -cardWidth - 24 : cardWidth + 24,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:scale-110 transition"
      >
        <ChevronLeft className="w-5 h-5 text-[#AF3737]" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:scale-110 transition"
      >
        <ChevronRight className="w-5 h-5 text-[#AF3737]" />
      </button>

      {/* roll */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scroll-smooth no-scrollbar flex gap-6"
      >
        {papers.map((paper) => (
          <div
            key={paper.link}
            className="min-w-[600px] max-w-[600px] flex-shrink-0"
          >
            <ReadingCard {...paper} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ReadingCard({
  title,
  authors,
  year,
  link,
}: {
  title: string;
  authors: string;
  year: string;
  link: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold text-[#AF3737] mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{authors}</p>
      <p className="text-gray-500 text-sm mb-4">{year}</p>
      <a
        href={link}
        className="text-[#AF3737] hover:text-[#E8B6B6] transition-colors duration-200"
      >
        Read Paper →
      </a>
    </div>
  );
}

export default App;

export default App
