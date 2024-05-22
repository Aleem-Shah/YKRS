// src/data/events.ts

export interface Event {
    id: number;
    title: string;
    date: string; // Format: YYYY-MM-DD
    time: string; // Format: HH:MM
    venue: string;
    motive: string;
    image: string;
  }
  
  export const sampleEvents: Event[] = [
    {
      id: 1,
      title: "Tech Conference 2024",
      date: "2024-05-21",
      time: "10:00",
      venue: "Convention Center, New York",
      motive: "Explore the latest in tech",
      image: "https://example.com/images/tech-conference.jpg"
    },
    {
      id: 2,
      title: "Music Festival",
      date: "2024-07-20",
      time: "16:00",
      venue: "Central Park, New York",
      motive: "Enjoy live music from various artists",
      image: "https://example.com/images/music-festival.jpg"
    },
    {
      id: 3,
      title: "Art Exhibition",
      date: "2024-05-21",
      time: "23:27",
      venue: "Art Gallery, San Francisco",
      motive: "Discover contemporary art pieces",
      image: "https://example.com/images/art-exhibition.jpg"
    },
    {
      id: 4,
      title: "Charity Run",
      date: "2024-08-10",
      time: "07:00",
      venue: "Beachfront, Miami",
      motive: "Run for a cause",
      image: "https://example.com/images/charity-run.jpg"
    },
    {
      id: 5,
      title: "Food Festival",
      date: "2024-09-05",
      time: "12:00",
      venue: "Downtown, Los Angeles",
      motive: "Taste culinary delights from around the world",
      image: "https://example.com/images/food-festival.jpg"
    }
  ];
  