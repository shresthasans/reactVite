import React from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";

const BlogDetail = () => {
  let confirmDelete = () => {
    confirm("Do you want to delete?");
  };

  if (confirmDelete === true) {
    console.log("Delete");
  } else {
    console.log("Don't do anything");
  }
  return (
    <Layout>
      <div className="flex gap-8">
        <div className="w-full md:w-3/4">
          <div className="flex flex-col gap-6">
            <header>
              <div className="flex justify-between items-start flex-col gap-4 md:gap-0  md:flex-row">
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl">
                    <strong>Content title</strong>
                  </h2>
                  <h3 className="text-lg">Sub title</h3>
                  <div className="flex gap-4">
                    <span>Tags:</span>
                    <div className="flex gap-2">
                      <span className="bg-gray-200 rounded-full px-2 py-1 text-sm">
                        Tags #1
                      </span>
                      <span className="bg-gray-200 rounded-full px-2 py-1 text-sm">
                        Tags #2
                      </span>
                      <span className="bg-gray-200 rounded-full px-2 py-1 text-sm">
                        Tags #3
                      </span>
                      <span className="bg-gray-200 rounded-full px-2 py-1 text-sm">
                        Tags #4
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link
                    to={"../blog/edit"}
                    className="px-4 py-2 text-blue-600 border border-blue-500 rounded-sm hover:bg-blue-50"
                  >
                    Edit
                  </Link>
                  <Link
                    onClick={confirmDelete}
                    className="px-4 py-2 text-blue-600 border border-blue-500 rounded-sm hover:bg-blue-50"
                  >
                    Delete
                  </Link>
                </div>
              </div>
            </header>
            <main>
              <div className="flex flex-col gap-6">
                <img
                  src="https://flowbite.com/docs/images/blog/image-1.jpg"
                  alt="Placeholder"
                />
                <p>
                  Mauris a urna egestas, gravida arcu sed, tempor sapien.
                  Curabitur ullamcorper metus enim, id gravida risus tristique
                  ac. Cras vehicula at tellus nec gravida. Pellentesque habitant
                  morbi tristique senectus et netus et malesuada fames ac turpis
                  egestas. Suspendisse potenti. Nam vitae elementum diam. Fusce
                  quis finibus elit. Quisque nec ex at libero tristique cursus.
                  Mauris pulvinar egestas mi, ut interdum purus facilisis nec.
                  In arcu dolor, efficitur eu suscipit eget, semper ut mi. Duis
                  pulvinar arcu ut ornare porttitor. <br />
                  <br />
                  Pellentesque sollicitudin condimentum ultrices. Sed vehicula
                  commodo nulla ac auctor. Donec eget velit sem. Sed arcu odio,
                  scelerisque et arcu sed, tempor ornare diam. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Etiam hendrerit
                  venenatis velit, at efficitur nulla posuere et. Pellentesque
                  lacinia maximus elementum. Vivamus tempor ex quis urna dapibus
                  viverra.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="w-1/4 hidden md:block">
          <h2>Sidebar</h2>
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetail;
