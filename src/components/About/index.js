import Image from "next/image";
export default function About() {
     return (
          <div className="w-5/12">
               <div className="relative flex items-center">
                    <div className="text-8xl capitalize text-white opacity-70">
                         about
                    </div>
                    <div className="absolute z-10">
                         <h3 className="uppercase text-xl font-medium">
                              corporate hotel
                         </h3>
                    </div>
               </div>
               <p className="text-xs">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolores explicabo blanditiis doloribus, accusamus ut est
                    repellat tenetur unde illo sed, recusandae, maiores nobis
                    asperiores quisquam eveniet perspiciatis quo nostrum
                    incidunt nesciunt cumque? Similique minus dolor nihil
                    reprehenderit voluptas a quia esse autem. Nulla eius modi
                    odio consequuntur quisquam, debitis amet.
               </p>
          </div>
     );
}
