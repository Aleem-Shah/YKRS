import Card from '@/components/Card'
import React from 'react'

const Programs = () => {
  const desc1="Our program provides tailored mentorship and guidance for students navigating research projects, ensuring support at every stage. Access personalized assistance and solutions through our centralized platform, streamlining your research journey.";

  const desc2= "YKRS' flagship program empowers independent researchers with comprehensive resources and mentorship. Collaborate and experiment alongside like-minded peers, fostering innovation and growth in your research pursuits.";
  
  const fellowship = [
    "YKRS Fellowship offers resources and support for independent research.",
    "Ideal for those without professional research access.",
    "Connects like-minded researchers for collaboration.",
    "Provides mentorship for guidance on projects.",
    "Fill out the form accurately and completely.",
    "Helps YKRS understand your personality and skills."
  ];
  const assistance = [
    "For students currently working on a research project.",
    "Apply for special assistance and guidance from mentors.",
    "Available at various stages of the research journey.",
    "Request one-to-one mentorship.",
    "Ask for additional team members.",
    "One-stop solution for project-related issues."
  ];
  
  return (
    <section className='mb-20'>
        <div className="">
        
            <h1 className=' text-4xl font-bold '>Our Programs</h1>
            <div className="space-y-10 lg:space-y-5 lg:grid lg:grid-cols-2 xl:flex xl:flex-col">
                <Card image='/zoom.png' points={fellowship} title='YKRS  fellowship program' badge='Program 2' description={desc2}/>
                <Card image='/notebook.png' points={assistance} title='YKRS assistance  program' badge='Program 1' description={desc1}/>
                
                
            </div>
        </div>
    </section>
  )
}

export default Programs