import { useEffect, useState, useRef, useMemo } from "react";
import BaseNode from "./BaseNode";

function extractVariables(text=" "){
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const vars= new Set();
    let match;

    while((match= regex.exec(text)) !== null){
        vars.add(match[1]);
    }

    return Array.from(vars);
}

export default function TextNode({data}){
    const [text, setText]= useState(data?.text || "");
    const textareaRef= useRef(null);

    const variables = useMemo(() => extractVariables(text), [text]);


    //auto resize height 

    useEffect(()=> {
        if(textareaRef.current){
            textareaRef.current.style.height="auto";
            textareaRef.current.style.height= textareaRef.current.scrollHeight+ "px";
        }
    }, [text]);
    return(
        <BaseNode title="Text" 
        inputs={variables}
        outputs={["text"]}>
            <textarea
            ref={textareaRef}
            value={text}
            placeholder="Enter Text with {{variables}}"
            onChange={(e)=>setText(e.target.value)}
            style={{
                width:"100%",
                resize:"none",
                overflow:"hidden",
                fontSize:"13px",
            }}
            />
        </BaseNode>

    );
}