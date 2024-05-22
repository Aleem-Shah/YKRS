import { Client, Databases } from 'appwrite';
// Adjust the import according to your file structure

 // Adjust the import according to your file structure

 const client = new Client();
 client
 .setEndpoint('https://cloud.appwrite.io/v1')
 .setProject('664d705f0009be3c1b10'); // Replace YOUR_PROJECT_ID with your project ID
 
 const databases = new Databases(client);

 const databaseId = '664d715400248ae5c53e'; // Replace YOUR_DATABASE_ID with your database ID
 const collectionId = '664d716000177b1a9ff2'; // Replace YOUR_COLLECTION_ID with your collection ID
 

 // Initialize the Appwrite client
 interface Professor {
  name: string;
  title: string;
  department: string;
  institution: string;
  gender: string;
  bio: string;
}

 const stemProfessors: Professor[] = [
    {
      name: 'Dr. Mohammad Farooq Mir',
      title: 'Professor',
      department: 'Physics',
      institution: 'University of Kashmir, Srinagar',
      gender: 'male',
      bio: 'Dr. Mohammad Farooq Mir is a professor in the Department of Physics of University of Kashmir, Srinagar. He is also an alumnus of Kashmir University from where he had completed his PhD.'
    },
    {
      name: 'Dr. Harkirat Singh',
      title: 'Assistant Professor',
      department: 'Physics',
      institution: 'National Institute of Technology (NIT), Srinagar',
      gender: 'male',
      bio: 'Dr. Harkirat Singh is an assistant professor in the Department of Physics of National Institute of Technology (NIT), Srinagar. He is an alumnus of Indian Institute of Science Education and Research (IISER) Kolkata, where he had completed his PhD in 2014.'
    },
    {
      name: 'Dr. Waseem',
      title: 'Scholar',
      department: 'Physics',
      institution: 'Kashmir University, Srinagar',
      gender: 'male',
      bio: 'Dr Waseem is a scholar of Physics from Kashmir University, Srinagar, from where he has completed his PhD.'
    },
    {
      name: 'Dr. Rameez Raja',
      title: 'Assistant Professor',
      department: 'Mathematics',
      institution: 'National Institute of Technology (NIT), Srinagar',
      gender: 'male',
      bio: 'Dr. Rameez Raja is an assistant professor in the Department of Mathematics of National Institute of Technology (NIT), Srinagar. He is an alumnus of BITS Pilani and Tata Research institute, where he had completed his PhD.'
    },
    {
      name: 'Dr. Mushtaq Ahmed Bhat',
      title: 'Assistant Professor',
      department: 'Mathematics',
      institution: 'National Institute of Technology (NIT), Srinagar',
      gender: 'male',
      bio: 'Dr. Mushtaq Ahmed Bhat is an assistant professor in the Department of Mathematics National Institute of Technology (NIT), Srinagar. He is an alumnus of Indian Institute of Technology (IIT), Bombay and University of Kashmir, Srinagar where he did his Post Doc and PhD respectively.'
    },
    {
      name: 'Dr. Rezwan Ul Shaban',
      title: 'Professor',
      department: 'Mathematics',
      institution: 'Central University, Kashmir',
      gender: 'male',
      bio: 'Dr Rezwan Ul Shaban is a professor in the Department of Mathematics in Central University, Kashmir. He is an alumnus of University of Kashmir, Srinagar, from where he has completed his PhD.'
    },
    {
      name: 'Dr. Harris Tantaray',
      title: 'Associate Professor',
      department: 'Chemistry',
      institution: 'Cluster University, Srinagar',
      gender: 'male',
      bio: 'Dr. Harris Tantaray is an associate professor in the Department of Chemistry of Cluster University, Srinagar. He is an alumnus of University of Kashmir, where he did his PhD. Professor Tantaray is one of the most recognized and respected Chemistry professors of Northern India.'
    },
    {
      name: 'Dr. Anzar Ahmad Khuroo',
      title: 'Assistant Professor',
      department: 'Botany',
      institution: 'University of Kashmir, Srinagar',
      gender: 'male',
      bio: 'Dr. Anzar Ahmad Khuroo is an assistant Professor in the University of Kashmir. His credentials are as follows: M.Sc. (Botany), M. Phil., Ph. D., NET (CSIR-UGC), SET (Jammu University)'
    },
    {
      name: 'Dr. Bilal Ahmad Rather',
      title: 'Lecturer',
      department: 'Botany',
      institution: 'Government Degree College, Kupwara',
      gender: 'male',
      bio: 'Dr Bilal Ahmad Rather is a lecturer from Government Degree College, Kupwara. He has completed his PhD from the Department of Botany, Aligarh Muslim University. He has worked as a Junior Research Fellow (JRF) at Centre for Cellular and Molecular Biology (CCMB) Hyderabad, India on Gut Microbiome. He has been awarded with Maulana Azad National Fellowship (MANF-2019) by the University Grant Commission (UGC) India. Furthermore, he has also qualified CSIR-UGC NET (2017), CSIR-UGC JRF (2019), ICAR NET 2017 (ASRB), Telangana SET, and GATE-2020.'
    },
    {
      name: 'Dr. Tabassum Ismail',
      title: 'Assistant Professor',
      department: 'Chemistry',
      institution: 'Kashmir University, Srinagar',
      gender: 'female',
      bio: 'Dr. Tabassum Ismail is an assistant professor in the Department of Chemistry of Kashmir University, Srinagar. Being an alumnus of this University, she has completed her PhD from this institution only.'
    },
    {
      name: 'Dr. Ibraq',
      title: 'Assistant Professor',
      department: 'Zoology',
      institution: 'Central University, Kashmir',
      gender: 'female',
      bio: 'Dr. Ibraq is an assistant professor in the Department of Zoology of Central University, Kashmir. She has completed her PhD from University of Kashmir.'
    },
    {
      name: 'Moin Mir',
      title: 'Senior',
      department: 'Computer Science',
      institution: 'Princeton University, Princeton, USA',
      gender: 'male',
      bio: 'Moin Mir is a senior at Princeton University, Princeton, USA. He is currently majoring in computer science and is highly experienced in web and mobile backend developing.'
    }
  ];
  
  
  
  
  const socialScienceProfessors: Professor[] = [
    {
      name: 'Dr. Rasak',
      title: 'Assistant Professor',
      department: 'Liberal Arts',
      institution: 'University of Kashmir, Srinagar',
      gender: 'male',
      bio: 'Dr. Rasak is an assistant professor in the Department of Liberal Arts of University of Kashmir, Srinagar. He is an alumnus of Kashmir University, Srinagar, where he had completed his PhD.'
    },
    {
      name: 'Dr. Aasia Maqbool',
      title: 'Senior Assistant Professor',
      department: 'School of Education and Behavioral sciences',
      institution: 'University of Kashmir, Srinagar',
      gender: 'female',
      bio: 'Dr. Aasia Maqbool is a senior assistant professor in the School of Education and Behavioral sciences, University of Kashmir, Srinagar.'
    },
    {
      name: 'Dr. Mohammad Altaf Paul',
      title: 'Head Of Department',
      department: 'Psychology',
      institution: 'Government Degree College, Kulgam',
      gender: 'male',
      bio: 'Dr. Mohammad Altaf Paul is the Head Of Department of the Department of Psychology, Government Degree College, Kulgam. He has completed his PhD in psychology from Jamia Milia Islamia, New Delhi. He has also done his M.Phil in Clinical Psychology.'
    },
    {
      name: 'Dr. Rizwan Hassan Bhat',
      title: 'Assistant Professor',
      department: 'Psychology',
      institution: 'Government Degree College, Baramulla',
      gender: 'male',
      bio: 'Dr. Rizwan Hassan Bhat is an assistant professor in the Department of Psychology of Government Degree College, Baramulla. He is an alumnus of Aligarh Muslim University, from where he did his PhD.'
    },
    {
      name: 'Dr. Musair Hassan',
      title: 'Assistant Professor/Child Psychologist',
      department: 'Psychology',
      institution: 'Government Medical College, Baramulla',
      gender: 'male',
      bio: 'Dr. Musair Hassan is an assistant Professor/child psychologist in Government Medical College, Baramulla. He has completed his PhD in psychology from Jamia Milia Islamia, New Delhi. Furthermore, he has also done his MPhil in clinical psychology.'
    },
    {
      name: 'Dr. Hilal Ahmad Kumar',
      title: 'Assistant Professor',
      department: 'Sociology',
      institution: 'University of Kashmir',
      gender: 'male',
      bio: 'Dr. Hilal Ahmad Kumar is an assistant professor from the Department of Sociology, University of Kashmir. He has qualified NET, SET and JRF. The main areas of his research work being family and marriage studies, he has completed his PhD from University of Kashmir itself.'
    },
    {
      name: 'Dr. Bilal Ahmad Dada',
      title: 'Scholar',
      department: 'Philosophy',
      institution: 'Aligarh Muslim University, University of Kashmir',
      gender: 'male',
      bio: 'Dr. Bilal Ahmad Dada is a scholar of philosophy from Aligarh Muslim University, and University of Kashmir, from where he has completed his PhD and Post Doctorate respectively.'
    },
    {
      name: 'Dr. Imtiaz Khan',
      title: 'Assistant Professor',
      department: 'History',
      institution: 'Government Degree College, Pattan',
      gender: 'male',
      bio: 'Dr. Imtiaz Khan is assistant professor in the Department of History in Government Degree College, Pattan. He is an alumnus of University of Kashmir, Srinagar, from where he has completed his PhD.'
    },
    {
      name: 'Dr. Tauseef Mushtaq',
      title: 'Lecturer',
      department: 'History',
      institution: 'University of Kashmir, Srinagar',
      gender: 'male',
      bio: 'Dr. Tauseef Mushtaq is a lecturer in the Department of History of University of Kashmir, Srinagar. He is a JRF Junior Research Fellow and has completed his PhD from University of Kashmir itself.'
    },
    {
      name: 'Dr. Mohammad Ameen Mir',
      title: 'Scholar',
      department: 'Urdu',
      institution: 'Jamia Milia University, Delhi',
      gender: 'male',
      bio: 'Dr. Mohammad Ameen Mir is a scholar of Urdu from Jamia Milia University, Delhi, from where he has completed his PhD.'
    },
  ];



async function addProfessorsToDb(professors: Professor[]) {
  for (const professor of professors) {
      try {
          const response = await databases.createDocument(databaseId, collectionId, 'unique()', professor);
          console.log(`Document created with ID: ${response.$id}`);
      } catch (error:any) {
          // If the document already exists (duplicate entry), skip it
          if (error.code === 1109) {
              console.log('Document already exists. Skipping...');
          } else {
              console.error('Error creating document:', error);
          }
      }
  }
}

async function main() {
  try {
      await addProfessorsToDb(stemProfessors);
      console.log('All STEM professors added successfully.');
      await addProfessorsToDb(socialScienceProfessors);
      console.log('All Social Science professors added successfully.');
  } catch (error) {
      console.error('Error adding professors:', error);
  }
}



  main();




const page = () => {
  return (
    <div>done</div>
  )
}

export default page