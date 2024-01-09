import logo from './logo.svg';
import './App.css';

import Folder from './folder';
import explorer from './folder11';
function App() {
  return (
    <div className="App">
      <h3>File structure tree</h3>
      <Folder explorer={explorer} />
    </div>
  );
}

export default App;




// import Folder from "./components/Folder";
// import explorer from "../public/Data/folderData";

// export default function App() {
//   return (
//     <div className="App">
//       <Folder explorer={explorer} />
//     </div>
//   );
// }

