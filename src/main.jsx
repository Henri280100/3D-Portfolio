import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/3D-Portfolio/", element: <App /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router}/>);
