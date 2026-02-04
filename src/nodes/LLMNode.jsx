import BaseNode from "./BaseNode";

export default function LLMNode(){
    return(
        <BaseNode 
        title="LLM"
        inputs={["system","prompt"]}
        outputs={["response"]}
        >
        <div>Large Language Model</div>
        </BaseNode>
    )
}