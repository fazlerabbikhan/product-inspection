import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <section className='quesAns'>
            <h3>Q1: What is Context API and what are its purposes?</h3>
            <h4>Ans: The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.
                The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</h4>

            <h3>Q2: What is Semantic tag?</h3>
            <h4>Ans: Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the 'code' tag is immediately recognized by the browser as some type of coding language. Instead of trying to render that code, the browser understands that you are using that text as an example of the code for the purposes of an article or online tutorial.</h4>

            <h3>Q3: What are the differences between inline and inline-block elements?</h3>
            <h4>Ans: Compared to display: inline, the major difference is that inline-block allows to set a width and height on the element. Also, with display: inline, top and bottom margins and paddings are not respected, and with display: inline-block they are.</h4>
        </section>
    );
};

export default Blogs;