import React from 'react';

interface ErrorCardsParams{
    title: string,
    content: React.JSX.Element | string
}
function ErrorCard({title, content}:ErrorCardsParams) {
    return (
        <div role="alert" className="w-2/3 m-auto">
            <div className="bg-red-500 text-white font-bold rounded-t-lg px-4 py-2">
                {title}
            </div>
            <div className="border border-t-0 border-red-400 rounded-b-lg bg-red-100 px-4 py-3 text-red-700">
                <h3>
                    {content}
                </h3>
            </div>
        </div>
    );
}

export default ErrorCard;