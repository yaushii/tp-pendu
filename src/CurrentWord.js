import React from 'react';
import './App.css';

const CurrentWord = ({ currentWord, usedLetter, win }) => {

    return (
        <div id ="current_word">
            {
                currentWord.split('').map(
                    (letter, key) => {

                        let status = "finded"

                        if (usedLetter.indexOf(letter) == -1) {
                            status = "lost"
                        }else{
                                if (win === -1){
                                    status="notfinded"

                                }   

                        }

                        return <span key={'letter_' + key} classname={status} >
                            {status == "finded" ? letter :
                                (win === -1 ? letter : "?")}</span>
                    }
                )
            }
        </div>
    )
}

export default CurrentWord;
