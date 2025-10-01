import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-gray-300 shadow-sm">
      <div className="header-container max-w-[1440px] mx-auto  py-4  ">
        <nav className="navbar flex flex-col lg:flex-row justify-between items-center">
          <h1 className="logo font-bold text-[1.5rem]">CS &minus; Ticket System</h1>
          <ul className="nav-links flex flex-col md:flex-row gap-8 text-base items-center">
            <li className="nav-link">
              <a href="">Home</a>
            </li>
            <li className="nav-link">
              <a href="">FAQ</a>
            </li>
            <li className="nav-link">
              <a href="">Changelog</a>
            </li>
            <li className="nav-link">
              <a href="">Blog</a>
            </li>
            <li className="nav-link">
              <a href="">Download</a>
            </li>
            <li className="nav-link">
              <a href="">Contact</a>
            </li>
            <li>
              <button className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] px-4 py-3 rounded-[4px] text-white flex justify-center gap-[10px]">
                <span>
                  <p>+</p>
                </span>
                Ticket
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
