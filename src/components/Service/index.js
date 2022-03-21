import Image from "next/image";
export default function Service() {
     return (
          <div className="grid grid-cols-4">
               <div className="flex items-center justify-center flex-col relative service_1">
                    <div className="relative text-center z-20">
                         <h4 className="uppercase text-xl font-medium text-yellow-200">
                              bar &
                         </h4>
                         <h4 className="uppercase text-xl text-white font-medium">
                              restaurants
                         </h4>
                    </div>
                    <div className="absolute z-10 opacity-60 bg-black inset-0"></div>
               </div>
               <div className="flex items-center justify-center flex-col relative  service_2">
                    <div className="relative text-center z-20">
                         <h4 className="uppercase text-xl font-medium text-yellow-200">
                              bar &
                         </h4>
                         <h4 className="uppercase text-xl text-white font-medium">
                              restaurants
                         </h4>
                    </div>
                    <div className="absolute z-10 opacity-60 bg-black inset-0"></div>
               </div>
               <div className="flex items-center justify-center flex-col relative service_3">
                    <div className="relative text-center z-20">
                         <h4 className="uppercase text-xl font-medium text-yellow-200">
                              bar &
                         </h4>
                         <h4 className="uppercase text-xl text-white font-medium">
                              restaurants
                         </h4>
                    </div>
                    <div className="absolute z-10 opacity-60 bg-black inset-0"></div>
               </div>
               <div className="flex items-center justify-center flex-col relative service_4">
                    <div className="relative text-center z-20">
                         <h4 className="uppercase text-xl font-medium text-yellow-200">
                              bar &
                         </h4>
                         <h4 className="uppercase text-xl text-white font-medium">
                              restaurants
                         </h4>
                    </div>
                    <div className="absolute z-10 opacity-60 bg-black inset-0"></div>
               </div>
          </div>
     );
}
