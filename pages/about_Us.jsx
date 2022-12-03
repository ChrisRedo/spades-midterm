import Link from 'next/link'
import styles from "../styles/about_Us.module.css";

export default function Button() {
  return (
      <div class={styles.salOf_spades}>
        <title>About Us</title>
          <div class={styles.navBar}>
                        <div class={styles.logoContainer}>
                            <img src="Logo.png"></img>
                            <Link href="/"> 
                            <h1 class={styles.h1}> SPADES </h1>
                             </Link>
                        </div>
                        <div class={styles.buttonContainer}>
                            <Link href="/about_Us"> 
                            <a class={styles.button}> ABOUT US </a>
                             </Link>
                             <Link href="barbers"> 
                            <a class={styles.button}> BARBERS </a>
                             </Link>
                             <Link href="/haircuts"> 
                            <a class={styles.button}> HAIRCUTS </a>
                             </Link>
                             <Link href="reservation"> 
                            <a class={styles.button}> RESERVATION </a>
                             </Link>
                             <Link href="privacy_Notice"> 
                            <a class={styles.button}> PRIVACY NOTICE </a>
                             </Link>                       
                        </div>
          </div>
          <div class={styles.spadesLogo}>
            <div>
              <img src="Logo.png"></img>
            </div>
            <div>
              <h1>SALON OF SPADES</h1>
              <p>
                The Salon of Spades is a coalition of all of the best barbers all around the globe led by the four pioneers whom in their quest to perfect their craft have spent years researching, practicing, and applying the theoretical knowledge into their life in order to be able to style a haircut one is only able to dream of into a reality, these pioneers are the founders of the National Association of Barbers that is known throughout the globe.
              </p>
            </div>
          </div>
      </div>
  );
}