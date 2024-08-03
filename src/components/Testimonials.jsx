import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/InfiniteMovingCards";
import axios from "axios";
import { IconStar } from "@tabler/icons-react"; // Import the star icon

export function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Function to fetch data
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API}/feedbacks`);
        const feedbacks = response.data;

        // Transform data into the required format
        const transformedTestimonials = feedbacks.map(feedback => ({
          quote: feedback.message,
          name: feedback.name,
          title: feedback.title,
          email: feedback.email,
          rating: renderStars(feedback.rating) // Generate stars based on rating
        }));

        setTestimonials(transformedTestimonials);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <IconStar
          key={i}
          size={16}
          className={`${i < rating ? "text-yellow-500" : "text-gray-300"}`}
        />
      );
    }
    return <div className="flex">{stars}</div>;
  };

  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased w-full dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
