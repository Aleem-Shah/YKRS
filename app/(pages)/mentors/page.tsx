"use client";
import { databases } from '@/client';
import { DocumentData } from '@/client/types';
import conf from '@/config';
import React, { useEffect, useState } from 'react';
import { FaFilter } from 'react-icons/fa6';
import { InfinitySpin } from 'react-loader-spinner';

interface Professor {
  name: string;
  title: string;
  department: string;
  institution: string;
  email?: string;
  image?: string;
  gender: 'male' | 'female';
  bio: string;
}

const ProfessorCard: React.FC<Professor> = ({ name, title, department, institution, bio, image, gender }) => {
  const defaultMaleImage = "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/scientist_einstein_avatar_professor-512.png";
  const defaultFemaleImage = "https://th.bing.com/th/id/R.92708aa38cfff12d463d6d3678eadb1c?rik=HaymwC2ppUtpYg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-female-scientist-education-female-lab-medical-science-scientist-woman-icon-512.png&ehk=WasP70qpxy9umkx0BE2PUPgCK2U%2fNsdkgJ%2b41PteR8Q%3d&risl=&pid=ImgRaw&r=0";

  const profileImage = image || (gender === 'female' ? defaultFemaleImage : defaultMaleImage);

  return (
    <div className="w-full sm:w-80 h-96 perspective group mx-auto">
      <div className="relative w-full h-full duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
        <div className="absolute w-full h-full backface-hidden bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
            <img className="object-cover w-full h-full" src={profileImage} alt={name} />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
            <p className="text-sm text-gray-500 italic mb-1">{title}</p>
            <p className="text-sm text-primary-crimson font-medium mb-1">{department}</p>
            <p className="text-sm text-gray-600 font-semibold">{institution}</p>
          </div>
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-lg shadow-lg p-6 flex items-center justify-center text-center">
          <p className="text-sm text-gray-700 leading-relaxed">{bio}</p>
        </div>
      </div>
    </div>
  );
};

interface ProfessorsSectionProps {
  professors: Professor[];
}

const normalizeString = (str: string) => str.toLowerCase().replace(/[\W_]+/g, '');

const ProfessorsSection: React.FC<ProfessorsSectionProps> = ({ professors }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const departments = Array.from(new Set(professors.map(professor => professor.department)));

  const handleFilterClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleDepartmentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDepartment(event.target.value);
    setCurrentPage(1);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const filteredProfessors = (selectedDepartment
    ? professors.filter(professor => professor.department === selectedDepartment)
    : professors
  ).filter(professor => {
    const normalizedQuery = normalizeString(searchQuery);
    return (
      normalizeString(professor.name).includes(normalizedQuery) ||
      normalizeString(professor.department).includes(normalizedQuery) ||
      normalizeString(professor.institution).includes(normalizedQuery)
    );
  });

  const professorsPerPage = 12;
  const totalPages = Math.ceil(filteredProfessors.length / professorsPerPage);
  const displayedProfessors = filteredProfessors.slice(
    (currentPage - 1) * professorsPerPage,
    currentPage * professorsPerPage
  );

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-gray-800">Our Mentors</h2>
          <button onClick={handleFilterClick} className="text-gray-800">
            <FaFilter size={24} />
          </button>
        </div>
        <input
          type="text"
          placeholder="Search by name, department, or institution"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full mb-4 border-2 border-gray-100 outline-none p-3 rounded-lg"
        />
        {isDrawerOpen && (
          <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
            <h3 className="text-lg font-semibold mb-2">Filter by Department</h3>
            <div className="flex flex-col">
              {departments.map(department => (
                <label key={department} className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="department"
                    value={department}
                    checked={selectedDepartment === department}
                    onChange={handleDepartmentChange}
                    className="mr-2"
                  />
                  {department}
                </label>
              ))}
              <button
                onClick={() => setSelectedDepartment(null)}
                className="mt-2 p-2 bg-red-500 text-white rounded-lg"
              >
                Clear Filter
              </button>
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedProfessors.map(professor => (
            <ProfessorCard key={professor.name} {...professor} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 mx-1 rounded-lg ${
                currentPage === index + 1
                  ? 'bg-primary-crimson text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Page: React.FC = () => {
  const [professors, setProfessors] = useState<Professor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {


      try {
        const response = await databases.listDocuments<DocumentData>(
          '664d715400248ae5c53e', // replace with your actual database ID
          '664d716000177b1a9ff2' // replace with your actual collection ID
        );
        setProfessors(response.documents as Professor[]);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='flex items-center justify-center'>
          <InfinitySpin width="200" color="#e93453" />
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <ProfessorsSection professors={professors} />;
};

export default Page;
