import React from "react";
import Layout from "../../components/Layout";

const BlogDetail = ()=> {
    return(
        <Layout>
            <div className="flex">

            <div className="w-3/4">
                <div className="flex flex-col gap-6">
                
                <header>
                    <h2>Content title</h2>
                    <h2>Sub title</h2>
                    </header>
                    <main>
                    <div className="flex flex-col gap-6">
                        <img src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="Placeholder" />
                        <p>
                        Mauris a urna egestas, gravida arcu sed, tempor sapien. Curabitur ullamcorper metus enim, id gravida risus tristique ac. Cras vehicula at tellus nec gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Nam vitae elementum diam. Fusce quis finibus elit. Quisque nec ex at libero tristique cursus. Mauris pulvinar egestas mi, ut interdum purus facilisis nec. In arcu dolor, efficitur eu suscipit eget, semper ut mi. Duis pulvinar arcu ut ornare porttitor. <br/><br/>

Pellentesque sollicitudin condimentum ultrices. Sed vehicula commodo nulla ac auctor. Donec eget velit sem. Sed arcu odio, scelerisque et arcu sed, tempor ornare diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit venenatis velit, at efficitur nulla posuere et. Pellentesque lacinia maximus elementum. Vivamus tempor ex quis urna dapibus viverra.
                        </p>
                        </div>
                    </main>
                </div>
                
            </div>
            <div className="w-1/4">
                <h2>Sidebar</h2>
            </div>
            </div>
        </Layout>
       
    )
}

export default BlogDetail