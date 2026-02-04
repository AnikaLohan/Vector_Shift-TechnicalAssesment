import BaseNode from "./BaseNode";

export default function NumberNode({data}){
    return (
        <BaseNode title="Number" outputs={["value"]}>
            <input
            type="number"
            defaultValue={data?.value || 0}
            style={{width:"100%"}}
            />
            
        </BaseNode>
    );
}