import React from 'react';
import SingleTutorialEntry from "@/app/tutorial/SingleTutorialEntry";
import {getAllTutorialPages} from "@/utils/utils";

function Page() {
    const tutorialPages:string[] = getAllTutorialPages();

    return (
        <ol>
            {tutorialPages.map((tutorialName, index) =>
                <SingleTutorialEntry key={index+tutorialName} name={tutorialName} id={index}/>
            )}
        </ol>
    );
}

export default Page;
