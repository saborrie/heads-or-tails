import React from "react";
import "./App.css";

function App() {
  const [article, setArticle] = React.useState(null);
  const [showLoremIpsum, setShowLoremIpsum] = React.useState("initial");

  async function getRandomArticle() {
    // const res = await fetch("http://localhost:5000/random");
    const res = await fetch("https://en.wikipedia.org/api/rest_v1/page/random/title");
    const json = await res.json();
    setArticle(json);
  }

  return (
    <div className="app">
      <a className="button" onClick={getRandomArticle}>
        Get random article.
      </a>
      {article &&
        article.items.map(i => {
          return (
            <div className="app">
              <p className="text">{i.title}</p>
              <a className="button" href={"https://en.wikipedia.org/wiki/" + i.title} target="_blank">
                HEADS
              </a>
              <a className="button" href={"https://en.wikipedia.org/wiki/Lorem_ipsum"} target="_blank">
                TAILS
              </a>
            </div>
          );
        })}
    </div>
  );
}

export default App;
