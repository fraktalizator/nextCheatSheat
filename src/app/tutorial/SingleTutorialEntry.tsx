import React from 'react';
import {getTutorialDescription} from "@/utils/utils";

interface tutorialEntryProps{
    id: number
    name: string
}
async function SingleTutorialEntry(props:tutorialEntryProps) {
    const pathToTutorial = `/tutorial/${props.name}`
    const description = getTutorialDescription(props.name)
    return (
        <a href={pathToTutorial}>
            <li className="p-4 md:p-0 m-8 rounded-lg md:border-0 md:dark:bg-gray-900 h-16 grid grid-cols-12 items-center">
                <div className="bg-blue-400 text-black rounded-lg h-16 text-center items-center grid">
                    <p className="items-center">{props.id + ". " + props.name}</p>
                </div>
                <div className="grid mr-4 ml-4" style={{gridColumnStart: 2, gridColumnEnd: 13}}>
                    {description}
                </div>
            </li>
        </a>
    );
}

export default SingleTutorialEntry;