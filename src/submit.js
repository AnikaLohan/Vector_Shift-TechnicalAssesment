//submit.js
import { useStore } from "./store";

export default async function submitPipeline(){
    const { nodes, edges }= useStore.getState();

    try{
        const response= await fetch("http://localhost:8000/pipelines/parse", {
            method: "POST",
            headers: { "Content-Type":"application/json"},
            body: JSON.stringify({nodes, edges}),
        });
        const data=await response.json();

       alert(
      `Pipeline Analysis\n\n` +
      `Nodes: ${data.num_nodes}\n` +
      `Edges: ${data.num_edges}\n` +
      `Valid DAG: ${data.is_dag ? "Yes" : "No"}`
    );
  } catch (error) {
    alert("Error connecting to backend");
  }
    
}