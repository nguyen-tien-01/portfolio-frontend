import './App.css';
import { useRoutes } from 'react-router-dom'
import Admin from './component/Admin';
import Index from './component/Index';
import Update_info from './component/Update_info';
import Update_skill from './component/Update_skill';
import Update_work from './component/Update_work';
import Message from './component/Message';
import Update_school from './component/Update_school';


function App() {
  let routes = [
    { path: "/", element: <Index /> },
    {
      path: "/admin",
      element: <Admin />,
      children: [
        { index: true, element: <Update_info /> },
        { path: "kinang", element: <Update_skill /> },
        { path: "update-work", element: <Update_work /> },
        { path: "update-school", element: <Update_school />},
        { path: "message", element: <Message /> }
      ]
    }
  ];
  let element = useRoutes(routes);

  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;
