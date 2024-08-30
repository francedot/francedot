import React from 'react';
import { Github } from 'lucide-react';
import ProjectCarousel from './ProjectCarousel';
import ProjectGrid from './ProjectGrid';

const XIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>);
const LinkedInIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48a1.56,1.56,0,1,1,1.56-1.56A1.56,1.56,0,0,1,6.59,8.48ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" /></svg>);

const NavItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="px-4 py-2 hover:text-gray-300 cursor-pointer transition-colors duration-200">{text}</li>
);

const SocialIcon: React.FC<{ Icon: React.ElementType, link: string }> = ({ Icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
    <Icon size={24} />
  </a>
);

const ResearchItem: React.FC<{ Icon: React.ElementType; title: string; description: string }> = ({ Icon, title, description }) => (
  <div className="bg-gray-800 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-gray-700">
    <Icon className="w-12 h-12 text-gray-300 mb-4" />
    <h3 className="text-xl font-semibold mb-3 text-gray-100">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const FrancescoPortfolio = () => {
  const gridProjects = [
    {
      title: "iOS & OS Agents in the Era of Multi-Modal Generative AI",
      image: "https://i.imgur.com/0AzT1B1.png",
      description: "First iOS Agent capable of interacting with the OS and other apps. Using SoM, UIA and chain of thoughts prompting to create long-term plans across mobile apps.",
      link: "https://medium.com/@francedot/ios-ui-focused-agents-in-the-era-of-multi-modal-generative-ai-1f2097fa8ba6"
    },
    {
      title: "AI Driven User Interface Structure Grounding for Automated Generation of Actionable Tasks",
      image: "https://i.imgur.com/QXiZ8tR.png",
      description: "I’m officially an inventor at Microsoft!",
      link: "https://www.linkedin.com/posts/francesco-bonacci-70428a121_1-2-3-puff-im-officially-activity-7213200978089570304-psa6?utm_source=share&utm_medium=member_desktop"
    },
    {
      title: "Interface Agent",
      image: "https://github.com/francedot/Interface-Agent/raw/main/img/logo.png",
      description: "An Agent framework to create system and interface agents capable of managing mobile and desktop applications and features.",
      link: "https://github.com/francedot/Interface-Agent"
    },
    {
      title: "EdgeTile Creators (featured on Windows Central)",
      image: "https://cdn.mos.cms.futurecdn.net/UqpRYnYoaMGe3ieUXsq77F-650-80.jpg.webp",
      description: "First Win10 app enabling users to create Windows 10 Live Tiles for launching files, folders, apps, and websites.",
      link: "https://www.windowscentral.com/edgetile-creators-windows-10-lets-you-create-custom-pins-just-about-anything"
    },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <nav className="bg-black p-4 sticky top-0 z-10 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-inner">
              <img src="https://github.com/francedot.png" alt="Francesco Bonacci" className="w-full h-full rounded-full" />
            </div>
            <span className="font-semibold text-xl">Francesco Bonacci</span>
          </div>
          <div className="flex space-x-4">
            <SocialIcon Icon={XIcon} link="https://twitter.com/francedot" />
            <SocialIcon Icon={LinkedInIcon} link="https://www.linkedin.com/in/francesco-bonacci-70428a121" />
            <SocialIcon Icon={Github} link="https://github.com/francedot" />
          </div>
        </div>
      </nav>
      <main className="max-w-6xl mx-auto mt-8 pb-16 px-4">
        <div className="flex flex-col items-center justify-center space-y-8 max-w-4xl mx-auto">
          <div className="text-center flex flex-col items-center">
            <h2 className="text-xl text-gray-400 mb-2">SOFTWARE ENGINEER ↔ ML ENGINEER</h2>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-400 text-transparent bg-clip-text">Francesco Bonacci</h1>
            <p className="text-gray-400 mb-6 max-w-2xl leading-relaxed text-justify">
              <strong>Francesco</strong> here! I'm a SWE at Microsoft. Here you'll also find a mix of my OSS work and interests.
              I've worn several hats in my career, starting as a Windows Phone developer (remember that?), then moving on to Xamarin, and then all about .NET and Azure.
              Since joining Microsoft in 2019, I've worked with great people across 4 country subsidiaries and 3 different divisions.
              Fast forward to today, I'm now part of Microsoft AI, where I train models to improve experiences across Bing, Edge and Windows
            </p>
            <h3 className="text-2xl font-semibold mb-4 mt-4 text-center bg-gradient-to-r from-gray-100 to-gray-400 text-transparent bg-clip-text">Highlights</h3>
            <div className="w-full flex justify-center">
              <ProjectCarousel projects={gridProjects.slice(0, 4)} />
            </div>
            <h3 className="text-2xl font-semibold mt-12 mb-4 text-center bg-gradient-to-r from-gray-100 to-gray-400 text-transparent bg-clip-text">More Projects</h3>
            <div className="w-full">
              <ProjectGrid projects={gridProjects} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FrancescoPortfolio;