import Link from 'next/link'
import styles from "../styles/reservation.module.css";
import { useState } from "react";
import React from "react";

export default function Button() {

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [state, setState] = React.useState({
        Name: "",
        Age: "",
        Gender: "",
        Phone: "",
        Pdate: "",
        Ptime: "",
        Pcut: "",
        Pbarb: ""
      })

    const onKeyUp = (evt) => {

        const value = evt.target.value;
        setState({
        ...state,
        [evt.target.name]: value
        });
    }

  
  
    const onClick = (event) => {

        console.log(state.Name);
        console.log(state.Age);
        console.log(state.Gender);
        console.log(state.Phone);
        console.log(state.Pdate);
        console.log(state.Ptime);
        console.log(state.Pcut);
        console.log(state.Pbarb);
        
        if (state.Name.length > 0 && state.Age.length > 0 && state.Gender.length > 0
            && state.Phone.length > 0 && state.Pdate.length > 0  && state.Ptime.length > 0
            && state.Pcut.length > 0 && state.Pbarb.length > 0){

                setShow(true);
            
            }
        else
        {

            setShow2(true);   
        }
            

       

    }

  return (
      <div class={styles.salOf_spades}>
        <title>Reservation</title>
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
                    <div class={styles.Reservation}>
                        <h2> CHOOSE YOUR PREFERRED BARBER </h2>
                        <div class={styles.imgContainer}>
                          <img src="Jem.png"/>
                          <img src="Chris.png"/>
                          <img src="Jiro.png"/>
                          <img src="Fritz.png"/>
                          <img src="Other.png"/>
                        </div>
                        <div class={styles.barbersButton}>
                            <div>
                            <button onClick={()=>setState({
                                ...state,
                                Pbarb: "JEM"})}> 
                            </button>
                            </div>
                            <div>
                            <button onClick={()=>setState({
                                ...state,
                                Pbarb: "CHRIS"})}> 
                            </button>
                            </div>
                            <div>
                            <button onClick={()=>setState({
                                ...state,
                                Pbarb: "JIRO"})}> 
                            </button>
                            </div>
                            <div>
                            <button onClick={()=>setState({
                                ...state,
                                Pbarb: "FRITZ"})}> 
                            </button>
                            </div>
                            <div>
                            <button onClick={()=>setState({
                                ...state,
                                Pbarb: "OTHER"})}> 
                            </button>
                            </div>
                        </div>
                        <div class={styles.reserve_form}>
                            <div class={styles.reserve_form1}>
                                <label class={styles.label}> NAME: </label>
                                <input type="text" name="Name" value={state.Name} onChange={onKeyUp}></input>
                                <label class={styles.label}> AGE: </label>
                                <input type="number" name="Age" value={state.Age} onChange={onKeyUp}></input>
                                <label class={styles.label}> GENDER: </label>
                                <input type="text" name="Gender" value={state.Gender} onChange={onKeyUp}></input>
                                <label class={styles.label}> PHONE NUM.: </label>
                                <input type="number" name="Phone" value={state.Phone} onChange={onKeyUp}></input>
                            </div>
                            <div class={styles.reserve_form2}>
                                <div>
                                    <label class={styles.label}> PREFERRED DATE: </label>
                                    <label class={styles.label}> PREFERRED TIME: </label>
                                    <label class={styles.label}> PREFERRED CUT: </label>
                                    <label class={styles.label}> PREFERRED BARBER: </label>
                                </div>
                                <div>
                                    <input class={styles.input} type="date" name="Pdate" value={state.Pdate} onChange={onKeyUp}></input>                               
                                    <input class={styles.input} type="time" name="Ptime" value={state.Ptime} onChange={onKeyUp}></input>                               
                                    <input class={styles.input} type="text" name="Pcut" value={state.Pcut} onChange={onKeyUp}></input>                               
                                    <input class={styles.input} type="text" name="Pbarb" value={state.Pbarb} onChange={onKeyUp}></input>
                                </div>
                            </div>
                            <button type="button" onClick={onClick}> SCHEDULE APPOINTMENT </button>
                        </div>   
                    </div>
                    {
                        show ?
                        <div class={styles.messageBox1}>
                            <h1> Your Appointment is Done! </h1>
                            <ul>
                                <li> Name: {state.Name} </li>
                                <li> Age: {state.Age} </li>
                                <li> Gender: {state.Gender} </li>
                                <li> Phon No.: {state.Phone} </li>
                                <li> Preferred Date: {state.Pdate} </li>
                                <li> Preferred Time: {state.Ptime} </li>
                                <li> Preferred Cut: {state.Pcut} </li>
                                <li> Preferred Barber: {state.Pbarb} </li>
                            </ul>
                            <button onClick={()=>setShow(false)} > OK </button>
                        </div>:null
                    }

                    {
                        show2 ?
                        <div class={styles.messageBox2}>
                            <h1> REQUIRED TO FILL UP EVERYTHING! </h1>
                            <button onClick={()=>setShow2(false)}> OK </button>
                        </div>:null
                    }
              
            </div>
  );
}