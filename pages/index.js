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
import { useEffect, useState } from "react";
export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("api/place")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;
  return (
    data && (
      <>
        <Head>
          <title>The Corporate</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="shortcut icon" href="/img/logo.png" type="image/x-icon" />
        </Head>
        <div className="w-screen h-screen absolute inset-0 bg_dark_green overflow-hidden z-50">
          <div className="place flex">
            {data[0] && (
              <div className="place_1">
                <Link href="/1">
                  <a>
                    <span className="bg-black opacity-50 w-full"></span>
                    <div className="place_1_detail text-white ">
                      <div className="px-4 flex justify-between detail h-1/2 py-2 items-center">
                        <p>{data[0].name}</p>
                        <CallMade sx={{ marginLeft: "5px" }} />
                      </div>
                      <div className="px-4 h-1/2 flex py-2 items-center">
                        <Call sx={{ marginRight: "5px" }} />
                        <p>{data[0].phone}</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            )}
            {data[1] && (
              <div className="place_2">
                <Link href="/2">
                  <a>
                    <span className="bg-black opacity-50 w-full"></span>
                    <div className="place_2_detail text-white ">
                      <div className="px-4 flex justify-between detail h-1/2 py-2 items-center">
                        <p>{data[1].name}</p>
                        <CallMade sx={{ marginLeft: "5px" }} />
                      </div>
                      <div className="px-4 h-1/2 flex py-2 items-center">
                        <Call sx={{ marginRight: "5px" }} />
                        <p>{data[1].phone}</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            )}
            {data[2] && (
              <div className="place_3">
                <Link href="/3">
                  <a>
                    <span className="bg-black opacity-50 w-full"></span>
                    <div className="place_3_detail text-white ">
                      <div className="px-4 flex justify-between detail h-1/2 py-2 items-center">
                        <p>{data[2].name}</p>
                        <CallMade sx={{ marginLeft: "5px" }} />
                      </div>
                      <div className="px-4 h-1/2 flex py-2 items-center">
                        <Call sx={{ marginRight: "5px" }} />
                        <p>{data[2].phone}</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            )}
            {data[3] && (
              <div className="place_4">
                <Link href="/4">
                  <a>
                    <span className="bg-black opacity-50 w-full"></span>
                    <div className="place_4_detail text-white ">
                      <div className="px-4 flex justify-between detail h-1/2 py-2 items-center">
                        <p>{data[3].name}</p>
                        <CallMade sx={{ marginLeft: "5px" }} />
                      </div>
                      <div className="px-4 h-1/2 flex py-2 items-center">
                        <Call sx={{ marginRight: "5px" }} />
                        <p>{data[3].phone}</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            )}
          </div>
          <div className="social flex flex-col absolute">
            <IconButton sx={{ color: "white", marginBottom: "0.5rem" }}>
              <Link href="/">
                <a>
                  <Facebook />
                </a>
              </Link>
            </IconButton>
            <IconButton sx={{ color: "white", marginBottom: "0.5rem" }}>
              <Link href="/">
                <a>
                  <Instagram />
                </a>
              </Link>
            </IconButton>
            <IconButton sx={{ color: "white", marginBottom: "0.5rem" }}>
              <Link href="/">
                <a>
                  <Twitter />
                </a>
              </Link>
            </IconButton>
            <IconButton sx={{ color: "white", marginBottom: "0.5rem" }}>
              <Link href="/">
                <a>
                  <YouTube />
                </a>
              </Link>
            </IconButton>
          </div>
        </div>
      </>
    )
  );
}
