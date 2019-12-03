import React, { Component } from "react";
import styles from "./Why.module.scss";

class Why extends Component {
  state = {};
  render() {
    return (
      <>
        <section className={styles.intro}>
          <p className={styles.mainTitle}>
            Hall of Mirrors: A <a href="https://www.nology.io/">_nology</a>{" "}
            Brief
          </p>
          <p>
            In week 7/12 of the _nology course, it was our second week of
            learning React.js. We had gained a decent understanding of how React
            worked, particularly spending time dealing with the unidirectional
            data flow it uses, and how to use this to our advantage by passing
            data as props. We built on this, by incorporating{" "}
            <a href="http://firebase.google.com/">Firebase</a> for auth,
            databases and hosting. <b>Hall of Mirrors</b> is a brief we were set
            on the Friday morning of this week, to establish our understanding
            of these concepts. The brief is as follows:
          </p>
        </section>
        <section className={styles.mainBody}>
          <p className={styles.title}>Description</p>
          <p>
            Make a react application that allows the user to login with their
            gmail account. When logged in, they will be shown their profile
            picture numerous times. Each picture shown should be modified with
            different angles and should be different to the other pictures.
          </p>

          <p className={styles.title}>Requirements</p>
          <ul>
            <li> Create a new react app using create-react-app</li>
            <li>
              Host this application on firebase using your custom domain name
            </li>
            <li>
              When each mirror is clicked it should toggle between a normal look
              and the distorted mirror look
            </li>
          </ul>
          <p className={styles.title}>What next?</p>
          <p>
            Following the brief, I saw an opportunity to further consolidate my
            understanding of React and Firebase, so I set myself the challenge
            to build upon this app. I extended the Hall of Mirrors brief to
            include a game. This involved adding a little bit of routing to the
            site & passing state about a lot. From this I learned a lot about
            setState() and where it can and cannot be used. Having achieved a
            functioning game I added a leaderboard which is linked to firestore
            to incorporate some CRUD and use the auth a bit more. Given some
            more time working on this I would make the user data context rather
            than a prop & potentially make my user ID an admin who can delete
            leaderboard entries, to practice the authorisation side of auth.
          </p>
        </section>
      </>
    );
  }
}

export default Why;
