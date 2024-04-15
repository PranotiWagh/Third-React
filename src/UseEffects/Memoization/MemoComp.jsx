import React,{useMemo,useState} from 'react'
import { useState } from "react"

const MemoComp =() =>{
    let [count1, setCount1]=useState(0)
    let [count2, setCount2]=useState(0)

    let increaseOne =()=>{
        setCount(count1+1)
    }

    let increaseTwo= ()=>{
        setCount(count2+1)
    }
    //! useMemo- is used tomemoize a value

    let isEven =()=>{
        let i=0;
        while(i<200000){
            i++
        }
        return count1%2==0
    }
    //let isEven=useMeno(()=>{
      //  let i=0;
        //while(i<2000000000){
          //  i++;
        //}
       // return count1%2==0
    //})

    //let isEven=useMemo(()=>{
      //  let i=0;
        //while(i<20000000){
          //  i++
        //}
        //return count1%2==0
    //},[count1])
    return(
        <>
        <button onCick={increasseone}>Counter</button>
        <span>{isEven() ? 'Even' : 'odd'}</span>        
        <br /><br />
        <button onClick={increaseTwo}Counter></button>
        </>
    )
}