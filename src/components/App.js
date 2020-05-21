import React from "react";
import Rank from "./Rank";
import SuggestedProjectCard from "./SuggestedProjectCard";
import Banner from "./Banner";
import classes from "../styles/BaseStyles.module.css";
import Navbar from "./Navbar";
import Earners from "./Earners";
import { CardItems } from "./data";

const App = (props) => {
  return (
    <div>
      <div className={`${classes.headerBg} position-absolute`}></div>

      <div class="container">
        {/* NAVBAR STARTS */}
        <Navbar />
        {/* NAVBAR ENDS */}

        {/* First row */}
        <div class="row">
        <div class="col-lg-8 mb-4 mb-lg-0">
            <Rank />
          </div>
          <div class="col-lg-4 mb-4 mb-lg-0">
            <Rank />
          </div>
        </div>

        {/* Second Row */}
        <section class="mt-lg-5">
          <div
            className={`row justify-content-between align-items-center no-gutters ${classes.sectionHeader} mb-3`}
          >
            <h1 name="">Projets suggérés</h1>

            <div class="row no-gutters">
              <a href="#" class="mr-2">
                VOIR TOUS LES PROJETS
              </a>
              <img src="assets/chevron_arrow.svg" alt="" />
            </div>
          </div>

          <div class="row">
          {CardItems.map((item, index) => 
            <div class="col-lg-4 col-md-6">
              <SuggestedProjectCard  {...item} />
            </div>
          )}
          </div>
        </section>

        {/* Banner */}
        <div class="row no-gutters mt-lg-5 mt-3">
        <div class="col-12 mb-4 mb-lg-0">
            <Banner />
          </div>
        </div>

        {/* Third Row */}
        <section class="mt-lg-5">
          <div class="row">
            {/* left side */}
            <div class="col-lg-8 col-md-6">
              <div
                className={`row justify-content-between align-items-center no-gutters ${classes.sectionHeader} pb-3`}
              >
                <h1 name="">Activité</h1>

                <div class="row no-gutters">
                  <a href="#" class="mr-2">
                    VOIR TOUTE L'ACTIVITÉ
                  </a>
                  <img src="assets/chevron_arrow.svg" alt="" />
                </div>
              </div>
              <Rank />
            </div>

            {/* Right Side */}
            <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
              <div
                className={`row justify-content-between align-items-center no-gutters ${classes.sectionHeader} pb-3`}
              >
                <h1 name="">Soutiens</h1>

                <div class="row no-gutters">
                  <a href="#" class="mr-2">
                    VOIR TOUS LES SOUTIENS
                  </a>
                  <img src="assets/chevron_arrow.svg" alt="" />
                </div>
              </div>
              <Earners />
            </div>
          </div>
        </section>
        {/* Third Row ENDS */}

        {/* Footer */}
        <footer class="footer mt-auto py-5">
          <div class="container text-center">
            <span class="text-muted">Copyright 2020, Alban Renahy</span>
          </div>
        </footer>
        {/* Footer ENDS */}
      </div>
    </div>
  );
};

export default App;
