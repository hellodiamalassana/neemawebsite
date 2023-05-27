import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";



interface cardProps {
  className?: string;
  color: string;
  icon: string;
  title: string;
  subtitle: string;
  href: string;
  button: string;
}

export default function Card(props: cardProps) {
  return (
    <div
      data-aos="fade-in"
      data-aos-duration="1000"
      className={props.className}
    >
      <div className="h-[379px] w-[308px] drop-shadow-md rounded-3xl bg-white">
        <div className="flex items-center h-full w-full px-5 py-10">
          <div className="flex flex-col justify-between h-full items-center">
            <div
              className={`border h-[121px] w-[121px] flex justify-center items-center rounded-xl ${props.color}`}
            >
              <img src={props.icon} />
            </div>
            <div className="title text-[24px] text-center w-4/5">
              {props.title}
            </div>
            <div className="pt-5 text-center">{props.subtitle}</div>
            <div className="title text-[24px] text-center w-4/5">
              <Link to={props.href} className=" bg-[brown] text-px-0 hover:bg-[black] text-white text-sm px-2 rounded-full mr-10 cursor-pointer">
                {props.button}
              </Link>
            </div>


          </div>
        </div>
      </div>
    </div>

    /*
        <div
          data-aos="fade-in"
          data-aos-duration="1000"
          className={props.className}
        >
          
          <div className="space-y-2.5 mt-4 px-4">
            <h2 className=" ">
              <Link to={props.href} className="line-clamp-1" title={props.title}>
                {props.title}
              </Link>
            </h2>
            <p className=" ">
              <Link to={props.href} className="">
                {props.disc}
              </Link>
            </p>
          </div>
        </div> */
  );
}
