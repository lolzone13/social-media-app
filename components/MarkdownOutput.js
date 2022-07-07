import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'


export default function MarkdownOutput(props) {
    //console.log(props.markdownValue);
    return (
        <>
            <div className="h-full p-3 w-1/2">
                <div className="border-solid border-b font-semibold text-3xl mb-4 px-0 py-2">Preview</div>
                <div className="h-full w-full">
                    <ReactMarkdown  remarkPlugins={{remarkGfm}} >
                    {props.markdownValue}
                    </ReactMarkdown>
                </div>
            </div>
        </>
    )
}
