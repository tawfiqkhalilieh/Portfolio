import React from "react";
import Head from "next/head";
import { Fade } from "react-awesome-reveal";
import { VFooter, VMenuBar, VTimelineGrid } from "../../utils";
import styles from "./work.module.scss";
export default function VWork() {
  return (
    <div className={styles.workContainer}>
      <Head>
        <title>Work history</title>
      </Head>
      <VMenuBar activeTab="Work" />
      <div className={styles.content}>
        <div className={styles.summary}>
          <Fade>
            <h1>My work history</h1>
            <h2>
              I&apos;ve started my journey with programming back in 2019 on at
              Loop with c# and HTML (basics) In 2020 I managed to get an
              internship and worked as a trainee Backend developer at altooro.
              Since then, I have been working as a Backend web developer.
            </h2>
          </Fade>
        </div>
        <Fade>
          <div className={styles.timelineGridCotainer}>
            <VTimelineGrid />
          </div>
        </Fade>
      </div>
      <VFooter />
    </div>
  );
}
