from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Pipeline(BaseModel):
    nodes: list
    edges: list


def is_dag(nodes, edges):
    graph={ node['id']: [] for node in nodes}
     

    for edge in edges:
        graph[edge["source"]].append(edge["target"])
    

    visited=set()
    stack=set()

    def dfs(node):
        visited.add(node)
        stack.add(node)

        for neighbor in graph[node]:
            if neighbor not in visited:
                if dfs(neighbor):
                    return True
            elif neighbor in stack:
                return True
            

        stack.remove(node)
        return False
    
    for node in graph:
        if node not in visited:
            if dfs(node):
                return False
    
    return True

@app.post("/pipelines/parse")
def parse_pipelines(pipeline: Pipeline):
    return{
        "num_nodes": len(pipeline.nodes),
        "num_edges": len(pipeline.edges),
        "is_dag": is_dag(pipeline.nodes , pipeline.edges),
    }
    
    