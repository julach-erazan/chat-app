import React from "react";

const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="find user" />
      <div className="userChatWrapper flex flex-col justify-center items-center p-[10px]">
        <div className="userChat flex">
          <img src="/Images/man2.jpg" alt="" />
          <div className="userChatInfo ml-[20px]">
            <h1>Jhone</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
