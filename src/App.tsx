import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import CategoryAdd from "./Pages/Category/Add";
import CategoryEdit from "./Pages/Category/Edit";
import ListCategory from "./Pages/Category/List";
import ListPost from "./Pages/Post/List";

import AddPost from "./Pages/Post/Add";

import EditPost from "./Pages/Post/Edit";
import Edit from "./Pages/Profile/Edit";
import ChangePassword from "./Pages/Profile/ChangePassword";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/category" element={<ListCategory />} />

            <Route path="/category/edit" element={<CategoryEdit />} />

            <Route path="/category/add" element={<CategoryAdd />} />

            <Route path="/post" element={<ListPost />} />

            <Route path="/post/edit" element={<EditPost />} />

            <Route path="/subcategory/add" element={<AddPost />} />

            <Route path="/profile/edit" element={<Edit />} />

            <Route
              path="/profile/change-password"
              element={<ChangePassword />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
