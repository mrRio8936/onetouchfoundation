import image from "../assets/bg1.jpg";

const certificates = [
  {
    title: "React Developer Certification",
    recipient: "John Doe",
    issuer: "Code Academy",
    date: "January 2025",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "UI/UX Design Mastery",
    recipient: "Jane Smith",
    issuer: "Design Institute",
    date: "February 2025",
    image: "https://via.placeholder.com/300x200",
  },
];

const Certificates = () => {
  return (
    <>
      <img src={image} alt="Background image" />
    </>
  );
};

export default Certificates;
