"use client"
import React, { useRef, useState, useEffect } from 'react';
import { FaCirclePlay } from 'react-icons/fa6';

const AboutVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [timeIndicator, setTimeIndicator] = useState('');

  const handleLabelClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
    }
  };

  const handleControlsClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.addEventListener('pause', handleVideoPause);
      videoElement.addEventListener('play', handleVideoPlay);

      let clickCount = 0;
      let timeout: NodeJS.Timeout;

      const handleClick = () => {
        clickCount++;
        if (clickCount === 2) {
          videoElement.currentTime += 10; // Forward by 10 seconds
          setTimeIndicator('+10s');
          clickCount = 0;
          setTimeout(() => {
            setTimeIndicator('');
          }, 2000); // Clear time indicator after 2 seconds
        } else {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            clickCount = 0;
          }, 300);
        }
      };

      videoElement.addEventListener('click', handleClick);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting && !videoElement.paused) {
              videoElement.pause();
            } else if (entry.isIntersecting && !videoElement.paused && isVideoPlaying) {
              videoElement.play();
            }
          });
        },
        {
          threshold: 0.5, // Adjust this value according to your needs
        }
      );

      observer.observe(videoElement);

      return () => {
        videoElement.removeEventListener('pause', handleVideoPause);
        videoElement.removeEventListener('play', handleVideoPlay);
        videoElement.removeEventListener('click', handleClick);
        observer.unobserve(videoElement);
      };
    }
  }, [isVideoPlaying]);

  return (
    <div className="relative flex items-center justify-center h-[60vh] md:h-[100vh]">
      <video
        ref={videoRef}
        src="AhmadVideo.mp4"
        aria-label="hello"
        className="shadow-2xl object-cover rounded-2xl"
        poster='/poster.png'
        onClick={handleVideoClick}
        playsInline 
        controlsList="nodownload" 
        disablePictureInPicture
      />
      <div
        onClick={handleLabelClick}
        className={`absolute flex gap-2 items-center bottom-1/2 transform translate-y-1/2 p-4 bg-primary-crimson text-white font-semibold text-center rounded-md shadow-lg cursor-pointer transition-opacity duration-300 ${
          isVideoPlaying ? 'opacity-0' : 'opacity-100'
        }`}
      >
       <FaCirclePlay /> Watch: WHAT IS YKRS
      </div>
      {timeIndicator && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-75 text-white px-4 py-2 rounded-md">
          {timeIndicator}
        </div>
      )}
      <div
        onClick={handleControlsClick}
        className="absolute bottom-0 left-0 right-0 h-10 cursor-pointer"
      ></div>
    </div>
  );
};

export default AboutVideo;
