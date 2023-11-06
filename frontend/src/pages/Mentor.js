// Mentor.js
import React from "react";
import './Mentor.css'; // Import the CSS file
import MentorProfile from "../Components/MentorProfile";
import  Dp  from "../images/profile.jpeg";

export const Mentor = () => {
  // Mock mentor data (replace with actual data from your API or database)
  const mentors = [
    {
      id: 1,
      name: "John Doe",
      country: "United States",
      skills: ["Web Development", "JavaScript", "React"],
      workExperience: "Senior Web Developer at XYZ Company",
      profilePicture: Dp,
    },
    {
        id: 2,
        name: "Jane Smith",
        country: "Canada",
        skills: ["Data Science", "Python", "Machine Learning"],
        workExperience: "Data Scientist at ABC Corporation",
        profilePicture: Dp,
      },
      {
        id: 3,
        name: "David Brown",
        country: "United Kingdom",
        skills: ["Mobile App Development", "iOS", "Android"],
        workExperience: "Mobile App Developer at DEF Solutions",
        profilePicture: Dp,
      },
      {
        id: 4,
        name: "Anna Johnson",
        country: "Australia",
        skills: ["UI/UX Design", "Adobe XD", "Figma"],
        workExperience: "UI/UX Designer at GHI Design Studio",
        profilePicture: Dp,
      },
      {
        id: 5,
        name: "Michael Wilson",
        country: "Germany",
        skills: ["Backend Development", "Node.js", "Express"],
        workExperience: "Backend Developer at JKL Solutions",
        profilePicture: Dp,
      },
      {
        id: 6,
        name: "Sophie Turner",
        country: "France",
        skills: ["Frontend Development", "Vue.js", "CSS"],
        workExperience: "Frontend Developer at MNO Tech",
        profilePicture: Dp,
      },
      {
        id: 7,
        name: "Chris Evans",
        country: "Brazil",
        skills: ["Full Stack Development", "MongoDB", "Angular"],
        workExperience: "Full Stack Developer at PQR Solutions",
        profilePicture: Dp,
      },
      {
        id: 8,
        name: "Emma Watson",
        country: "India",
        skills: ["Cloud Computing", "AWS", "Azure"],
        workExperience: "Cloud Engineer at STU Cloud Services",
        profilePicture: Dp,
      },
      {
        id: 9,
        name: "Tom Hardy",
        country: "Japan",
        skills: ["DevOps", "Docker", "Kubernetes"],
        workExperience: "DevOps Engineer at UVW Technologies",
        profilePicture: Dp,
      },
      {
        id: 10,
        name: "Natalie Portman",
        country: "South Korea",
        skills: ["Blockchain Development", "Smart Contracts", "Ethereum"],
        workExperience: "Blockchain Developer at XYZ Blockchain",
        profilePicture: Dp,
      },
    // Add more mentor data as needed
  ];

  return (
    <div className="mentor-container">
      <h1>Mentor List</h1>
      <div className="mentor-list">
        {mentors.map((mentor) => (
          <MentorProfile key={mentor.id} mentor={mentor} />
        ))}
      </div>
    </div>
  );
};

export default Mentor;
