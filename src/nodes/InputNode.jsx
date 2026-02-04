import BaseNode from "./BaseNode";

export default function InputNode({data}){
    return (
        <BaseNode title="Input" outputs={["output"]}>
            <div>{data?.label || "Input value"}</div>
        </BaseNode>
    );
}