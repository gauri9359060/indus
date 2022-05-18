import React, { useState } from "react";

export const EmojiConverter = () => {
    const [value,setValue] = useState("");
  
    const handleOnChange = (e) =>{
          setValue(e.target.value)
    }
  return (
    <div>
      <h1> EmojiConverter </h1>

      <input
        type="text" 
        value={value} 
        onChange={handleOnChange}
        placeholder="Type a text"
       />
    </div>
  );
};
