import React from "react";
import Layout from "../../components/Layout";
import BlogForm from "./components/BlogForm";

const AddBlog = () => {
  return (
    <Layout>
	    <BlogForm pageTitle={"Add"}/>
    </Layout>
  );
};

export default AddBlog;
