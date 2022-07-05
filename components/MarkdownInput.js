import React from 'react';

export default function MarkdownInput(props) {
    const handleChange = (e) => {
        
        props.editText(e.target.value);
    }

    return (
        <>
            <div className="w-1/2 h-full p-2.5 border-solid border-r-2 border-gray-500" >
                <div className='border-solid border-b font-semibold text-3xl mb-4 px-0 py-2'>Markdown</div>
                <textarea className="w-full h-full resize-none border-none outline-none text-base" onChange={handleChange}></textarea>
            </div>
        </>
    )
}
