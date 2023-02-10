import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Route";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={true}
      />
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  );
}

export default App;
