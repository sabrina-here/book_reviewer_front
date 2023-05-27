import Main from "./Main";
import Home from "./Home";
import ReviewPage from "./ReviewPage";
import ApiPage from "./ApiPage";
import SearchedBooksPage from "./SearchedBooksPage";
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
        path: "/apiPage",
        element: <ApiPage></ApiPage>,
      },
      {
        path: "/reviewPage/:id",
        loader: ({ params }) =>
          fetch(`https://gutendex.com/books/${params.id}`),
        element: <ReviewPage></ReviewPage>,
      },
      {
        path: "/searchedBooksPage/:name",
        loader: ({ params }) =>
          fetch(`https://gutendex.com/books/?search=${params.name}`),
        element: <SearchedBooksPage></SearchedBooksPage>,
      },
    ],
  },
]);

export default router;
