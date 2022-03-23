import Head from "next/head";
import Image from "next/image";
import {
     Call,
     CallMade,
     Facebook,
     Instagram,
     Twitter,
     YouTube,
} from "@mui/icons-material";
import Link from "next/link";
import { IconButton } from "@mui/material";

export default function Home() {
     
     return (
          <div className="w-screen h-screen absolute inset-0 bg_dark_green overflow-hidden z-50">
               <div className="place flex">
                    <div className="place_1">
                         <Link href='/1'>
                         <a>
                         <span className="bg-black opacity-50 w-full"></span>
                         <div className="place_1_detail text-white ">
                              <div className="px-4 flex justify-between detail h-1/2 py-2 items-center">
                                   <p>The Corporate Hotel Convention Center</p>
                                   <CallMade sx={{ marginLeft: "5px" }} />
                              </div>
                              <div className="px-4 h-1/2 flex py-2 items-center">
                                   <Call sx={{ marginRight: "5px" }} />
                                   <p>7000 2030</p>
                              </div>
                         </div>
                         </a>
                         </Link>
                    </div>
                    <div className="place_2">
                         <Link href='/2'>
                         <a>
                         <span className="bg-black opacity-50 w-full"></span>
                         <div className="place_2_detail text-white ">
                              <div className="px-4 flex justify-between detail h-1/2 py-2 items-center">
                                   <p>The Corporate Hotel Convention Center</p>
                                   <CallMade sx={{ marginLeft: "5px" }} />
                              </div>
                              <div className="px-4 h-1/2 flex py-2 items-center">
                                   <Call sx={{ marginRight: "5px" }} />
                                   <p>7000 2030</p>
                              </div>
                         </div>
                         </a>
                         </Link>
                    </div>
                    <div className="place_3">
                         <Link href='/3'>
                         <a><span className="bg-black opacity-50 w-full"></span>
                         <div className="place_3_detail text-white ">
                              <div className="px-4 flex justify-between detail h-1/2 py-2 items-center">
                                   <p>The Corporate Hotel Convention Center</p>
                                   <CallMade sx={{ marginLeft: "5px" }} />
                              </div>
                              <div className="px-4 h-1/2 flex py-2 items-center">
                                   <Call sx={{ marginRight: "5px" }} />
                                   <p>7000 2030</p>
                              </div>
                         </div></a>
                         </Link>
                    </div>
                    <div className="place_4">
                         <Link href='/4'>
                         <a>
                         <span className="bg-black opacity-50 w-full"></span>
                         <div className="place_4_detail text-white ">
                              <div className="px-4 flex justify-between detail h-1/2 py-2 items-center">
                                   <p>The Corporate Hotel Convention Center</p>
                                   <CallMade sx={{ marginLeft: "5px" }} />
                              </div>
                              <div className="px-4 h-1/2 flex py-2 items-center">
                                   <Call sx={{ marginRight: "5px" }} />
                                   <p>7000 2030</p>
                              </div>
                         </div>
                         </a>
                         </Link>
                    </div>
               </div>
               <div className="social flex flex-col absolute">
                    <IconButton sx={{ color: "white", marginBottom: "0.5rem" }}>
                         <Link href="/">
                              <Facebook />
                         </Link>
                    </IconButton>
                    <IconButton sx={{ color: "white", marginBottom: "0.5rem" }}>
                         <Link href="/">
                              <Instagram />
                         </Link>
                    </IconButton>
                    <IconButton sx={{ color: "white", marginBottom: "0.5rem" }}>
                         <Link href="/">
                              <Twitter />
                         </Link>
                    </IconButton>
                    <IconButton sx={{ color: "white", marginBottom: "0.5rem" }}>
                         <Link href="/">
                              <YouTube />
                         </Link>
                    </IconButton>
               </div>
          </div>
     );
}
