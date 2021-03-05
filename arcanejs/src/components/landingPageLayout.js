import React from "react";
import PropTypes from "prop-types";
import "./landingPageLayout.scss";
import Emoji from "./widgets/emoji";
import SEO from './seo'

const LandingPageLayout = () => (
  <main>
    <SEO title="ArcaneJS" />
    <section class="firstSection">
      <div class="landingPageQuote">
        "Demystifying the mystical art of JavaScript, one 💩 at a time!"
      </div>
      <Emoji bigLogo={true} />
      <a href="/Preface" class="mainSiteLogo">
        arcane
      </a>
      <p class="quoteOfTheDay">
        <span>Get answers to unexplained questions like: </span>
        <br />
        <br />
        <ul>
          <li class="confusedEmoji">
            <a href="">Is everything an Object?</a>
          </li>
          <li class="fireEmoji">
          <a href="">Undeclared vs Undefined vs Null</a>
          </li>
          <li class="questionEmoji">
          <a href="">What different functions do?</a>
          </li>
          <li class="brainEmoji">
          <a href="">Scope vs Closure</a>
          </li>
        </ul>
      </p>
    </section>
    <div class="secondSection">
      <p>
        22Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium
        dapibus lectus, ac interdum dolor euismod et. Phasellus aliquam, velit
        vel aliquet vulputate, velit ligula interdum dolor, in blandit ante
        mauris nec odio. Donec vitae tortor sagittis, varius mauris a, accumsan
        dolor. Fusce a nisi erat. Quisque sit amet ultricies turpis. Suspendisse
        eu porttitor turpis. Aliquam rutrum lacus at odio fermentum, ut tempor
        justo iaculis. Maecenas porta ultricies convallis. In quis nibh feugiat
        nunc vulputate sollicitudin. Mauris in tincidunt libero.Duis cursus,
        risus a suscipit consectetur, ante tellus gravida orci, a fermentum orci
        tellus semper nisi. Duis eget feugiat lorem. Cras suscipit porta ante,
        eget efficitur dui pharetra a. Nam scelerisque, mi quis accumsan
        blandit, justo lectus euismod sapien, ac vestibulum diam enim eget
        risus. Sed convallis urna arcu, tempus aliquet sapien commodo a. Fusce
        non elit nisi. Vestibulum a purus efficitur, finibus justo sit amet,
        gravida nulla. Phasellus fermentum sem et risus maximus, eu porta ipsum
        porta. Donec quis rhoncus nisi. div 1
      </p>
    </div>
    <div class="thirdSection">
      <h1>Subscribe to the newsletter!</h1>
      <p>As research is done to create </p>
    </div>
    <div class="fourthSection">
      <h1>Subscribe to the newsletter!</h1>
      <p>As research is done to create </p>
      <iframe
        width="540"
        src="https://b3cda88e.sibforms.com/serve/MUIEAOfqaEISodSYQIsaQJzZfvKozb1HCp2VVMJ-civwrG2RBocg_QqMZSnfBPwcEGaThmHQ9JFWw818F6SW5FUZRICdA7_OF-HVY4Oxr3PRl5iLUQtEeEe15aX179Sced-GR_7K6ETC-POFaWw2JOv-IuC9BdIQKdb4D4pXUh11wH6bQYWNJD4mNXH7HeoUA9AFbECYmUsPmymE"
        frameborder="0"
        scrolling="auto"
        allowfullscreen
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "100%",

          height: "41rem",
        }}
      ></iframe>
    </div>
  </main>
);

LandingPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LandingPageLayout;
