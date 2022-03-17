import Head from "next/head";
import Image from "next/image";
import { Call, CallMade } from "@mui/icons-material";
export default function Home() {
  return (
    <div className="w-screen h-screen absolute inset-0 bg_dark_green overflow-hidden">
      <div className="places">
        <div className="mx-auto flex place">
          <div className="place_1">
            <div className="">
              <Image
                src={"/corp1.svg"}
                alt="corporate"
                width={442}
                height={943}
                layout="responsive"
              />
            </div>
            <span className="absolute inset-0 z-10 opacity-50 bg-black"></span>
          </div>
          <div className="place_2">
            <div className="w-full h-full ">
              <Image
                src={"/corp2.svg"}
                alt="corporate"
                width={442}
                height={943}
                layout="responsive"
              />
            </div>
            <span className="absolute inset-0 z-10 opacity-50 bg-black"></span>
          </div>
          <div className="place_3">
            <div className="w-full h-full">
              <Image
                src={"/corp3.svg"}
                alt="corporate"
                width={442}
                height={943}
                layout="responsive"
              />
            </div>
            <span className="absolute inset-0 z-10 opacity-50 bg-black"></span>
          </div>
          <div className="flex flex-col place_4">
            <div className="relative">
              <div className="overflow-hidden">
                <Image
                  src={"/corp4.svg"}
                  alt="corporate"
                  width={442}
                  height={943}
                  layout="fill"
                />
              </div>
              <span className="absolute inset-0 z-10 opacity-50 bg-black"></span>
            </div>
            <div className="place_item_1 w-full">
              <div className="relative places z-20 ">
                <div className="flex justify-between px-4 items-center h-16">
                  <h5 className="text-white">
                    The Corporate Hotel and Convention Center
                  </h5>
                  <CallMade className="text-white" />
                </div>
                <div className="flex  items-center px-4 h-16">
                  <Call className="text-white mr-4" />
                  <h5 className="text-white">7000 2030</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="place_item">
          <div className="place_item_2">
            <div className="relative places z-20 ">
              <div className="flex justify-between px-4 items-center h-16">
                <h5 className="text-white">
                  The Corporate Hotel and Convention Center
                </h5>
                <CallMade className="text-white" />
              </div>
              <div className="flex  items-center px-4 h-16">
                <Call className="text-white mr-4" />
                <h5 className="text-white">7000 2030</h5>
              </div>
            </div>
          </div>
          <div className="place_item_3">
            <div className="relative places z-20 ">
              <div className="flex justify-between px-4 items-center h-16">
                <h5 className="text-white">
                  The Corporate Hotel and Convention Center
                </h5>
                <CallMade className="text-white" />
              </div>
              <div className="flex  items-center px-4 h-16">
                <Call className="text-white mr-4" />
                <h5 className="text-white">7000 2030</h5>
              </div>
            </div>
          </div>
          <div className="place_item_4">
            <div className="relative places z-20 ">
              <div className="flex justify-between px-4 items-center h-16">
                <h5 className="text-white">
                  The Corporate Hotel and Convention Center
                </h5>
                <CallMade className="text-white" />
              </div>
              <div className="flex  items-center px-4 h-16">
                <Call className="text-white mr-4" />
                <h5 className="text-white">7000 2030</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
