import React from "react";
import { Button } from "react-bootstrap";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";



const ref = React.createRef();
const Blog = () => {
  return (



    <div  className="">




<div ref={ref}>
    
<div  className="card px-2 mx-2">
        <h1 className="text-center text-warning"> what is cors?</h1>
        <h4>
          Before enabling this feature for your website, it is important to
          understand what "Cross-Origin Resource Sharing" is. It is particularly
          important to be aware of the security implications when allowing your
          API to be fetched from all origins. We recommend that you take a look
          at the following articles before proceeding:
        </h4>
      </div>
      <div className="card p-2 my-2">
        <h1 className="text-center text-warning">
          {" "}
          Why are you using firebase?
        </h1>
        <h4>
          Firebase is great for quick projects: it's easy to set up, fast, in
          many cases requires only front-end logic. It lets you focus on your
          app instead of implementing custom authentication, web sockets or
          database connections.
        </h4>
        <h1 className="text-center text-warning">
          {" "}
          What other options do you have to implement authentication?
        </h1>
        <h4>
          <li>Multi-Factor Authentication (MFA) ...</li>
          <li>Single Sign-On (SSO) ...</li>
          <li>Two-Factor Authentication (2FA) ...</li>
          <li>Password Authentication Protocol (PAP) ... ...</li>
          <li>Single-Factor/Primary Authentication. ...</li>
        </h4>
      </div>
      <div className="card p-2 my-2">
        <h1 className="text-center text-warning">
          {" "}
          How does the private route work?
        </h1>
        <h4>
          Select the Start button, then type settings. Select Settings Network &
          internet Wi-Fi. On the Wi-Fi settings screen, select Manage known
          networks, and then select the Wi-Fi network you want to change. On the
          Wi-Fi network screen, under Network profile type, select Public
          (Recommended) or Private.
        </h4>
      </div>
      <div className="card p-2 my-2">
        <h1 className="text-center text-warning">
          {" "}
          What is Node? How does Node work?
        </h1>
        <h4>
          It is used for server-side programming, and primarily deployed for
          non-blocking, event-driven servers, such as traditional web sites and
          back-end API services, but was originally designed with real-time,
          push-based architectures in mind. Every browser has its own version of
          a JS engine, and node.
        </h4>
        <h5>
          How does node js work internally? Node JS Web Server internally
          maintains a Limited Thread pool to provide services to the Client
          Requests. Node JS Web Server receives those requests and places them
          into a Queue. It is known as “Event Queue”. Node JS Web Server
          internally has a Component, known as “Event Loop”.
        </h5>
      </div>
</div>
<Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <Button onClick={toPdf}>Download Pdf</Button>}
      </Pdf>
    </div>
  );
};

export default Blog;
