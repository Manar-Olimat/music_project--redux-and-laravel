import React from "react";

const Blog = () => {
  return (
    <div className="container ">
      <div
        className="section section-padding pb-0 "
        style={{ color: "black", textAlign: "left", marginTop: "100px" }}
      >
        <div className="">
          <div className="row learts-mb-n30">
            <div className="col-md-6 col-12 align-self-center learts-mb-30 ">
              <div className="about-us3">
                <h2 className="title text-white">Title</h2>
                <div className="desc">
                  <p className="text-white">
                    {" "}
                    We know that if sounds get our attention, the stories hold
                    it; if the songs create fans, the stories create super fans.
                    We believe song stories come in all shapes and sizes and,
                    most importantly, belong in the same place – connected by
                    their genre - and decade-spanning similarities.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 text-center learts-mb-30 ">
              <img
                src="https://media.istockphoto.com/id/1307556218/vector/cartoon-vector-doodles-disco-music-illustration.jpg?s=612x612&w=0&k=20&c=95siwcwQpuwzqtp2ypJgWMs12ukdu6hucDXPYoGT6mU="
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className="section section-padding pb-0 mt5 ">
        <div className="">
          <div className="row learts-mb-n30">
            <div className=" col-md-6 col-12 align-self-center learts-mb-30">
              <img
                src="https://i0.wp.com/www.ncw.co.uk/wp-content/uploads/2020/06/Music-Club.jpg?fit=500%2C351&ssl=1"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 col-12 text-center learts-mb-30">
              <div
                className="about-us3"
                style={{
                  color: "black",
                  textAlign: "left",
                  marginTop: "100px",
                }}
              >
                <div className="desc text-white">
                  <p>
                    Your song stories belong in the archive. We will work
                    tirelessly to propel and nurture your story. We will give it
                    lasting relevance in a world that seems to conspire to make
                    it disposable. Get creative and have fun with it:
                    documentary-style, selfie-style, animated, slideshow, VR –
                    this is another form of creative expression.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
