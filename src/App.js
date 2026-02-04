import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import submitPipeline from './submit';

function App() {
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <button onClick={submitPipeline}>
      Submit Pipeline
      </button>
    </div>
  );
}

export default App;
