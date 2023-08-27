import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <p>&copy; {currentYear} SHAAM. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
