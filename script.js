
      let hr = React.createElement("hr");
      let br = React.createElement("br");
      let a1 = React.createElement(
        "a",
        {
          href: "https://www.google.co.in/",
          className: "link",
        },
        "Getting started with the web"
      );
      let a2 = React.createElement(
        "a",
        {
          href: "https://www.google.co.in/",
          className: "link",
        },
        "HTML - Structuring the web"
      );
      let a3 = React.createElement(
        "a",
        {
          href: "https://www.google.co.in/",
          className: "link",
        },
        "CSS - Styling the web"
      );
      let header = React.createElement("h1", null, "Topics covered");
      const p1 =
        "The following is a list of all the topics we cover in the MDN learning area.";
      let p2 = React.createElement(
        "pre",
        null,
        a1,
        br,
        br,
        "     Provides a practical introduction to web development for complete beginners."
      );

      let p3= React.createElement(
        "pre",
        null,
        a2,
        br,
        br,
        "     HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail."
      );

      let p4 = React.createElement(
        "pre",
        null,
        a3,
        br,
        br,
        "     CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS."
      );

      
      let container = React.createElement(
        "div",
        { style: { width: "50%" } },

        header,
        br,
        p1,
        br,
        br,
        p2,
        br,
        br,
        p3,
        br,
        br,
        p4
      );

      ReactDOM.render(container, document.getElementById("root"));
    
