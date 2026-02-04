import BaseNode from "./BaseNode";

export default function OutputNode(){
    return(
        <BaseNode 
        title="Output"
        inputs={["input"]}>
        <div>Output</div>
        </BaseNode>
    )
}