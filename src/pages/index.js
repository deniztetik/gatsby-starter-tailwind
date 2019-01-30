import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
    />

    <div className="text-center">
      <img
        src={catAndHumanIllustration}
        className="block mx-auto w-1/2"
        alt="Cat and human sitting on a couch"
      />

      <h2 className="bg-yellow inline-block my-8 p-3">
        Hey there! Welcome to your special site!
      </h2>

      <p className="leading-loose">
        This is an example of what{" "}
        <a
          href="https://tailwindcss.com/"
          className="font-bold no-underline text-grey-darkest"
        >
          your site{" "}
        </a>
        could look like :).
      </p>
    </div>
  </Layout>
);

export default IndexPage;
