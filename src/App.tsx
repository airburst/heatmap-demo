import { apiData } from "./apiData";
import { Heatmap } from "./components/Heatmap";
import { transformData } from "./utils/transform";

const data = transformData(apiData);

function App() {
  return <Heatmap data={data} width={1200} height={1200} />;
}

export default App;
