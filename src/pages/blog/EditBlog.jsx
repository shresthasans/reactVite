import React from "react";
import BlogForm from "./components/BlogForm";
import Layout from "../../components/Layout";

const EditBlog = () => {
  return (
    <Layout>
      <BlogForm pageTitle={"Edit"}></BlogForm>
    </Layout>
  );
};

export default EditBlog;
