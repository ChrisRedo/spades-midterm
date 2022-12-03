import Link from 'next/link'
import styles from "../styles/index.module.css";

export default function Home() {
    return (
            <div class={styles.landingPage}>
                <title>Home Page</title>
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

                    <div class={styles.spadesLogo}> 
                        <h1> SALON OF SPADES</h1>
                    </div>
                </div>

                <div class={styles.meetYr_Barber}>
                    <img src="Jem.png"></img>
                    <img src="Chris.png"></img>
                    <img src="Jiro.png"></img>
                    <img src="Fritz.png"></img>
                    <h1> MEET YOUR BARBER </h1>
                </div>

                <div class={styles.pickYr_Style}>
                    <h1> PICK YOUR STYLE </h1>
                </div>

                <div class={styles.resNow}>
                    <h1> RESERVE NOW </h1>
                </div>
            </div>
  );
  }