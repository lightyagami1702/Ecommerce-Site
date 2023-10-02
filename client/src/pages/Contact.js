import React from "react";
import Layout from "../components/Layout/Layout";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
const Contact = () => {
  return (
    <Layout title={"Contact us - Ecommerce app"}>
      <div className="row img-c ">
        <div className="col-md-6 ">
          <img
            src="https://media.istockphoto.com/id/1199755273/video/group-of-workers-call-center-service.jpg?s=640x640&k=20&c=rh3vGZkMqgLNxqLDHKSGPwKMgXSvwD5nUH3B04Unst4="
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <AiOutlineMail /> : www.help@mywatchshop.com
          </p>
          <p className="mt-3">
            <AiOutlinePhone /> : 023-9819357
          </p>
          <p className="mt-3">
            <TfiHeadphoneAlt /> : 1800-1234-4321 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
