import Link from 'next/link'
import styles from "../styles/haircuts.module.css";

export default function Button() {
  return (
    <div class={styles.aboutUs}>
      <title>Haircuts</title>
      <div class={styles.salOf_spades}>
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
                    <div class={styles.Haircuts}>
                        <div class={styles.imgContainer}>
                          <img src="Primojem Cut.png"></img>
                          <img src="PM Style.png"></img>
                          <img src="Gwen 10.png"></img>
                          <img src="Hope by Hope.png"></img>
                        </div>
                        <h3> SPECIALTY HAIRCUTS </h3>
                        <p>
                        Salon of Spades is capable of any haircuts you desire, just input what you like or tell it to them on person. the following are the specialty haircuts that our barbers are famous for.
                        </p>
                    </div>
                </div>
    </div>
  );
}
