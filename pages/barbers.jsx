import Link from 'next/link'
import styles from "../styles/barbers.module.css";

export default function Button() {
  return (
      <div class={styles.salOf_spades}>
        <title>Barbers</title>
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

          <div class={styles.barbers}>
            <h1> MEET YOUR BARBER </h1>
            <div class={styles.barbContainer}>
              <div class={styles.jem}>
                <img src="Jem.png"/>
                <div class={styles.jemDesc}>
                  <h2> JEM </h2>
                  <p> 
                    Jeremy Calcetas is one of the co-founder and a barber of Salon of Spades. He is known for his famous "Primojem Cut" that can make all males look attractive to women. 
                  </p>
                </div>
              </div>

              <div class={styles.chris}>
                <img src="Chris.png"/>
                <div class={styles.chrisDesc}>
                  <h2> CHRIS </h2>
                  <p> 
                  Roi Christian Beredo, ONE OF THE CO-FOUNDERS OF THE SALON AND IS WELL KNOWN FOR HIS “PM STYLE” HAIRCUT WHOM MOST ROCK AND ROLL CUSTOMERS GO FOR. 
                  </p>
                </div>
              </div>

              <div class={styles.jiro}>
                <img src="Jiro.png"/>
                <div class={styles.jiroDesc}>
                  <h2> JIRO </h2>
                  <p> 
                  John Gienrou Evangelista the 3rd of the great pioneers who lead the Salon of Spades is one known for his extreme tenacity and passion at surmounting every challenges on his way by malding through it. 
                  </p>
                </div>
              </div>

              <div class={styles.fritz}>
                <img src="Fritz.png"/>
                <div class={styles.fritzDesc}>
                  <h2> FRITZ </h2>
                  <p> 
                  Fritz Gerald Fegalan is one of the great barbers in spades popular for his skills in using scissors also on his unique style of cutting hair. 
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
  );
}