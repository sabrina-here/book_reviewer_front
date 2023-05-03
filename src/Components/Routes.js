import Main from "./Main";
import Home from "./Home";
import ReviewPage from "./ReviewPage";
const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/reviewPage",
        element: <ReviewPage></ReviewPage>,
      },
      {
        path: "/reviewPage/:id",
        loader: ({ params }) =>
          fetch(`https://gutendex.com/books/${params.id}`),
        element: <ReviewPage></ReviewPage>,
      },
    ],
  },
]);

export default router;
