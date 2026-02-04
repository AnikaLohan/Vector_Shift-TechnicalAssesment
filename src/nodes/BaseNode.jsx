import { Handle, Position } from 'reactflow';
import "./node.css";

export default function BaseNode({
    title,
    inputs=[],
    outputs= [],
    children
}){
    return (
        <div className="node">
            <div className="node-header">{title}</div>
            {inputs.map((id, index) => (
                <Handle
                 key={id}
                 type="target"
                 position={Position.Left}
                 id={id}
                 style={{top: 40+ index*20}}
            />
           ))}
           {outputs.map((id,index)=> (
             <Handle
             key={id}
             type="source"
             position={Position.Right}
             id={id}
             style={{top: 40+ index*20}}
             />
           ))}

           <div className='node-content'>
            {children}
           </div>   
        </div>
    );

}