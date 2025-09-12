import React from 'react';

interface GeneralVcardProps {
    firstname?: string;
    name? :  string;
    job?: string;
    location?: string,
    showLocation?: boolean;
    showJob?: boolean
}

const GeneralVcard: React.FC<GeneralVcardProps> = ({firstname, name}) => {
    return (
        <div>
            <div className="flex flex-col -space-y-1 px-4 dark:text-white text-gray-900">
                <span className="text-3xl font-black">
                    {firstname}
                </span>
                <span className="text-3xl font-black">
                    {name}
                </span>
            </div>
        </div>
    );
};

export default GeneralVcard;
