import React from 'react';

function Meme ({key, topText, bottomText, url, deleteMeme}){
    function handleDeleteMeme() {
        deleteMeme(key);
      }
    return (
        <div>
            <p>{topText}</p>
            <img src={url} alt=""></img>
            <p>{bottomText}</p>
            <button onClick={handleDeleteMeme}>Delete me</button>
        </div>
    )
}

export default Meme;