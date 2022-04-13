import React, { Component } from "react";
import "./Terms.scss";

export class Terms extends Component {
  render() {
    return (
      <div>
        <div className="container my-3">
          <h1>
            Terms & <span className="text-orange">Conditions</span>
          </h1>
          <div className="bg-light rounded-3 my-3 shadow-sm">
            <div className="terms-main-container p-4">
              <h1 className="display-6 fw-bold">Overview</h1>
              <p className="col-md-12 fs-6">
                Using a series of utilities, you can create this jumbotron, just
                like the one in previous versions of Bootstrap. Check out the
                examples below for how you can remix and restyle it to your
                liking. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Dolores, animi. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Distinctio, unde ipsam. Neque vitae dolor quae
                perferendis, consequuntur provident soluta sed deleniti omnis
                animi iusto dolorum ducimus dolorem reiciendis mollitia
                recusandae itaque sint laudantium quisquam eligendi ipsam? Omnis
                blanditiis, veritatis praesentium doloribus consequuntur, qui
                possimus aperiam iste dignissimos quam dicta nam. Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Enim, aspernatur
                eum odio sunt voluptatibus libero qui omnis exercitationem.
                Impedit incidunt quibusdam delectus doloremque quae aperiam et
                eligendi quaerat natus cupiditate.
              </p>
            </div>
          </div>
        </div>
        <div className="container my-3">
          <div className="row align-items-md-stretch">
            <div className="col-md-6 my-2">
              <div className="h-100 p-4 bg-white border rounded-3 shadow-sm">
                <h4>SECTION 1 – ONLINE STORE TERMS</h4>
                <p>
                  By agreeing to these Terms of Service, you represent that you
                  are at least the age of majority in your state or province of
                  residence, or that you are the age of majority in your state
                  or province of residence and you have given us your consent to
                  allow any of your minor dependents to use this site.
                </p>
              </div>
            </div>

            <div className="col-md-6 my-2">
              <div className="h-100 p-4 bg-white border rounded-3 shadow-sm">
                <h4>SECTION 2 – GENERAL CONDITIONS</h4>
                <p>
                  You understand that your content (not including credit card
                  information), may be transferred unencrypted and involve (a)
                  transmissions over various networks; and (b) changes to
                  conform and adapt to technical requirements of connecting
                  networks or devices. Credit card information is always
                  encrypted during transfer over networks.
                </p>
              </div>
            </div>

            <div className="col-md-6 my-2">
              <div className="h-100 p-4 bg-white border rounded-3 shadow-sm">
                <h4>SECTION 2 – GENERAL CONDITIONS</h4>
                <p>
                  You understand that your content (not including credit card
                  information), may be transferred unencrypted and involve (a)
                  transmissions over various networks; and (b) changes to
                  conform and adapt to technical requirements of connecting
                  networks or devices. Credit card information is always
                  encrypted during transfer over networks.
                </p>
              </div>
            </div>

            <div className="col-md-6 my-2">
              <div className="h-100 p-4 bg-white border rounded-3 shadow-sm">
                <h4>SECTION 1 – ONLINE STORE TERMS</h4>
                <p>
                  By agreeing to these Terms of Service, you represent that you
                  are at least the age of majority in your state or province of
                  residence, or that you are the age of majority in your state
                  or province of residence and you have given us your consent to
                  allow any of your minor dependents to use this site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Terms;
