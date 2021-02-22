import React from "react";
import PropTypes from "prop-types";
import "./landingPageLayout.scss";
import Emoji from "./widgets/emoji";
import { Link } from "gatsby";

const LandingPageLayout = () => (
  <main>
    <section class="firstSection">
    <div class="landingPageQuote">
      "Demystifying the mystical art of JavaScript one 💩 at a time!"
    </div>
      <Emoji bigLogo={true} />
      <Link to="/" class="mainSiteLogo">
        arcane
      </Link>
      <span class="quoteOfTheDay">So nice</span>
    </section>
    <div class="secondSection">
    22Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium dapibus lectus, ac interdum dolor euismod et. Phasellus aliquam, velit vel aliquet vulputate, velit ligula interdum dolor, in blandit ante mauris nec odio. Donec vitae tortor sagittis, varius mauris a, accumsan dolor. Fusce a nisi erat. Quisque sit amet ultricies turpis. Suspendisse eu porttitor turpis. Aliquam rutrum lacus at odio fermentum, ut tempor justo iaculis. Maecenas porta ultricies convallis. In quis nibh feugiat nunc vulputate sollicitudin. Mauris in tincidunt libero.Duis cursus, risus a suscipit consectetur, ante tellus gravida orci, a fermentum orci tellus semper nisi. Duis eget feugiat lorem. Cras suscipit porta ante, eget efficitur dui pharetra a. Nam scelerisque, mi quis accumsan blandit, justo lectus euismod sapien, ac vestibulum diam enim eget risus. Sed convallis urna arcu, tempus aliquet sapien commodo a. Fusce non elit nisi. Vestibulum a purus efficitur, finibus justo sit amet, gravida nulla. Phasellus fermentum sem et risus maximus, eu porta ipsum porta. Donec quis rhoncus nisi.

   div 1</div>
    <div class="thirdSection">Test div 1</div>
    <div class="fourthSection">Test div 1</div>
  </main>
);

LandingPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LandingPageLayout;
