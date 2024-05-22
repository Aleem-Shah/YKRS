"use client";
import React from 'react';

const defaultMaleAvatar = '/images/man.png';
const defaultFemaleAvatar = '/images/femaleavatar.webp';

interface TeamMember {
  name: string;
  title: string;
  email: string;
  image: string;
  gender: 'male' | 'female';
  bio: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Ahmed', title: 'Co-Founder', email: '', image: '', gender: 'male', bio: 'Bio for Ahmed' },
  { name: 'Mehroz', title: 'Co-Founder', email: '', image: '/images/mehroz.jpg', gender: 'male', bio: 'Bio for Mehroz' },
  { name: 'Samaniya', title: 'Creative Director', email: '', image: '/images/samaniya.jpg', gender: 'female', bio: 'A curious explorer of ideas.' },
  { name: 'Asad', title: 'Tech Director', email: '', image: '/images/Asad.jpg', gender: 'male', bio: 'Bio for Asad' },
  // PR Team
  { name: 'Sharmeen', title: 'Manager (PR Team)', email: '', image: '/images/sharmeen.jpg', gender: 'female', bio: 'Meet Sharmeen, your friendly neighborhood expert in accidentally starting fights on woke topics, lives for the chuckles and would love to dive into the fray together to emerge with some laughs and maybe a few bruises.' },
  { name: 'Rumman Jan', title: 'Manager (PR Team)', email: '', image: '', gender: 'female', bio: 'Bio for Rumman Jan' },
  { name: 'Mansha', title: 'Director (PR Team)', email: '', image: '/images/mansha.jpg', gender: 'female', bio: 'Bio for Mansha' },
  { name: 'Zehwa', title: 'Executive (PR Team)', email: '', image: '/images/zehwa.jpg', gender: 'female', bio: 'Bio for Zehwa' },
  { name: 'Zikra', title: 'Manager (PR Team)', email: '', image: '/images/zakira.jpg', gender: 'female', bio: 'Bio for Zikra' },
  // Tech Team
  { name: 'Tawseeq', title: 'Associate (Tech Team)', email: '', image: '/images/tawsiq.jpg', gender: 'male', bio: 'Bio for Tawseeq' },
  { name: 'Aleem Shah', title: 'Executive (Tech Team)', email: '', image: '/images/aleem.jpg', gender: 'male', bio: 'Bio for Aleem Shah' },
  { name: 'Faheem', title: 'Executive (Tech Team)', email: '', image: '/images/faheem.jpg', gender: 'male', bio: 'Bio for Faheem' },
  { name: 'Numair', title: 'Executive (Tech Team)', email: '', image: '/images/numair.jpg', gender: 'male', bio: 'Bio for Numair' },
  { name: 'Arsalan', title: 'Executive (SM Team)', email: '', image: '/images/arsalan.jpg', gender: 'male', bio: 'Bio for Arsalan' },
  { name: 'Haabeel', title: 'Executive (Tech Team)', email: '', image: '', gender: 'male', bio: 'Bio for Haabeel' },
  // Social Media (SM) Team
  { name: 'Sana', title: 'Executive (SM Team)', email: '', image: '', gender: 'female', bio: 'Bio for Sana' },
  { name: 'Zainab', title: 'Manager (SM Team)', email: '', image: '', gender: 'female', bio: 'Bio for Zainab' },
];

const Page: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our People</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => {
            const avatar = member.image || (member.gender === 'male' ? defaultMaleAvatar : defaultFemaleAvatar);
            return (
              <div key={member.email} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front bg-white rounded-lg p-6 shadow-md text-center">
                    <img className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" src={avatar} alt={member.name} />
                    <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
                    <p className="text-gray-500">{member.title}</p>
                    <a href={`mailto:${member.email}`} className="text-purple-600 hover:underline mt-2 block">{member.email}</a>
                  </div>
                  <div className="flip-card-back bg-white rounded-lg p-6 shadow-md text-center">
                    <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
                    <p className="text-gray-500">{member.title}</p>
                    <p className="text-gray-700 mt-4">{member.bio}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <style jsx>{`
        .flip-card {
          background-color: transparent;
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 320px; /* Fixed height for consistent layout */
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 0.5rem;
        }
        .flip-card-front {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .flip-card-back {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default Page;
