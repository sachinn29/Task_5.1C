import React, { useState } from "react";
import './First.css';
function First() {
  const [questionpart, setQuestionpart] = useState(false);
  const [articlepart, setArticlepart] = useState(false);

  const handleQuestionpartClick = () => {
    setQuestionpart(true);
    setArticlepart(false);
  };

  const handleArticlepartClick = () => {
    setArticlepart(true);
    setQuestionpart(false);
  };
  return (
    <>
      <div className="text_box">
        <h2 className="Post">New Post</h2>
      </div>

      <form className="choices">
        <h2 className="Heading">Select post option: </h2>

        <input type="radio" id="question" name="language" value="Question" onClick={handleQuestionpartClick} />
        <label for="question">Question</label><br />

        <input type="radio" id="article" name="language" value="Article" onClick={handleArticlepartClick} />
        <label for="article">Article</label>
      </form>


      {questionpart &&
        <div>
          <div className="Text_outline">
            <p className="Text11">What do you want to ask or share</p>
          </div>
          <div className="Title_add">
            <label for="title">Title</label>
            <input className="Title" type="text" placeholder="Start your question" name="title" />

          </div>
          <div className="Second">
            <h3 className="textbox">Describe your Problem</h3>
            <textarea id="area" rows="10" cols="50"></textarea>
          </div>
          <div className="Tags">
            <p>Tags</p>
            <input type="text" id="text" placeholder="Add upto 3 tags" />
          </div>
          <div className="button">
            <button>Post</button>

          </div>
        </div>
      }


      {
        articlepart &&
        <div className="margin_ar">
          <div className="text_order">
            <p className="text_n">What do you want to ask or share</p>
          </div>
          <div className="Title_add">
            <label for="title">Title</label>
            <input className="Title" type="text" placeholder="Start your question" name="title" />

          </div>
          <div className="text_box2">
            <h3 className="textbox4">Describe your Problem</h3>
            <textarea id="area" rows="10" cols="50"></textarea>
          </div>
          <div className="Tags">
            <p>Tags</p>
            <input type="text" id="text" placeholder="Add upto 3 tags" />
          </div>
          <div className="button">
            <button>Post</button>

          </div>
        </div>

      }

    </>
  )
}
export default First;