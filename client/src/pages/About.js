import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row img-c ">
        <div className="col-md-6 ">
          <img
            src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg"
            alt="img-c"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1>About Us</h1>
          <p className="text-justify mt-2">
            At My Watch Store, we're passionate about premium watches. Founded
            in 2023, we curate an exclusive collection of exquisite timepieces.
            With our dedication to authenticity, expertise, and personalized
            service, we're your trusted source for luxury watches.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
