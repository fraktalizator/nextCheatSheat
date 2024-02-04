import {getValues} from "@/utils/utils";
import React from "react";

interface params<RowDataType>{
    rowData:RowDataType
}

export default function TableRow<RowDataType>({rowData}: params<RowDataType>) {
    const values= getValues(rowData)

    return (
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            {values.map(value =>
                <th key={value} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {value}
                </th>
            )}
        </tr>
    );
}