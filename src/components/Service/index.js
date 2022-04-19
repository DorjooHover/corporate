import Image from "next/image";
import { useState } from "react";
import { Box } from "@mui/material";
export default function Service({ data }) {
  const [bar, setBar] = useState(false);
  const [spa, setSpa] = useState(false);
  const [health, setHealth] = useState(false);
  const [concert, setConcert] = useState(false);
  const [lounge, setlounge] = useState(false);
  const handleService = (e) => {
    e.preventDefault();
    switch (e.target.id) {
      case "bar":
      case "bar_text":
      case "bar_span":
        setBar(true);
        break;
      case "spa":
      case "spa_text":
      case "spa_span":
        setSpa(true);
        break;
      case "health":
      case "health_text":
      case "health_span":
        setHealth(true);
        break;
      case "concert":
      case "concert_text":
      case "concert_span":
        setConcert(true);
        break;
      default:
        null;
    }
  };
  const handleServiceOver = (e) => {
    e.preventDefault();
    switch (e.target.id) {
      case "bar":
      case "bar_text":
      case "bar_span":
        setBar(false);
        break;
      case "spa":
      case "spa_text":
      case "spa_span":
        setSpa(false);
        break;
      case "health":
      case "health_text":
      case "health_span":
        setHealth(false);
        break;
      case "concert":
      case "concert_text":
      case "concert_span":
        setConcert(false);
        break;
      case "lounge":
      case "lounge_text":
      case "lounge_span":
        setLounge(false);
        break;
      default:
        null;
    }
  };
  return (
    <>
      {bar && (
        <Box
          sx={{
            position: "absolute",
            width: "40%",
            height: "66%",
            zIndex: "30",
            display: "flex",
            alignItems: "flex-end",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            transition: "0.5s all ease-in-out",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundImage: `url(${data[0].img})`,
          }}
        >
          <div className="relative w-full">
            <span className="absolute z-30 inset-0 bg-black opacity-60"></span>
            <div className="px-6 py-3 relative z-40 ">
              <h4 className="uppercase text-xl font-medium text_color_1 pb-1">
                {data[0].title} &{" "}
                <span className="text-white">{data[0].title_1}</span>
              </h4>
              <p className="text-white text-xs pb-6">{data[0].description}</p>
            </div>
          </div>
        </Box>
      )}
      {spa && data[1] && (
        <Box
          sx={{
            position: "absolute",
            width: "40%",
            height: "66%",
            zIndex: "30",
            display: "flex",
            alignItems: "flex-end",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            transition: "0.5s all ease-in-out",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundImage: `url(${data[1].img})`,
          }}
        >
          <div className="relative w-full">
            <span className="absolute z-30 inset-0 bg-black opacity-60 "></span>
            <div className="px-6 py-3 relative z-40">
              <h4 className="uppercase text-xl font-medium text_color_1 pb-1">
                {data[1].title} &{" "}
                <span className="text-white">{data[1].title_1}</span>
              </h4>
              <p className="text-white text-xs pb-6">{data[1].description}</p>
            </div>
          </div>
        </Box>
      )}
      {health && data[2] && (
        <Box
          sx={{
            position: "absolute",
            width: "40%",
            height: "66%",
            zIndex: "30",
            display: "flex",
            alignItems: "flex-end",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            transition: "0.5s all ease-in-out",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundImage: `url(${data[2].img})`,
          }}
        >
          <div className="relative w-full">
            <span className="absolute z-30 inset-0 bg-black opacity-60"></span>
            <div className="px-6 py-3 relative z-40">
              <h4 className="uppercase text-xl font-medium text_color_1 pb-1">
                bar & <span className="text-white">restaurants</span>
              </h4>
              <p className="text-white text-xs pb-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
                enim eaque est qui reiciendis cumque voluptatem nostrum
                provident, aperiam fugiat!
              </p>
            </div>
          </div>
        </Box>
      )}
      {concert &&
        data[3](
          <Box
            sx={{
              position: "absolute",
              width: "40%",
              height: "66%",
              zIndex: "30",
              display: "flex",
              alignItems: "flex-end",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              transition: "0.5s all ease-in-out",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundImage: `url(${data[3].img})`,
            }}
          >
            <div className="relative w-full">
              <span className="absolute z-30 inset-0 bg-black opacity-60"></span>
              <div className="px-6 py-3 relative z-40">
                <h4 className="uppercase text-xl font-medium text_color_1 pb-1">
                  bar & <span className="text-white">restaurants</span>
                </h4>
                <p className="text-white text-xs pb-6">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta enim eaque est qui reiciendis cumque voluptatem nostrum
                  provident, aperiam fugiat!
                </p>
              </div>
            </div>
          </Box>
        )}
      {lounge && data[4] && (
        <Box
          sx={{
            position: "absolute",
            width: "40%",
            height: "66%",
            zIndex: "30",
            display: "flex",
            alignItems: "flex-end",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            transition: "0.5s all ease-in-out",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundImage: `url(${data[4].img})`,
          }}
        >
          <div className="relative w-full ">
            <span className="absolute z-30 inset-0 bg-black opacity-60"></span>
            <div className="px-6 py-3 relative z-40">
              <h4 className="uppercase text-xl font-medium text_color_1 pb-1">
                bar & <span className="text-white">restaurants</span>
              </h4>
              <p className="text-white text-xs pb-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
                enim eaque est qui reiciendis cumque voluptatem nostrum
                provident, aperiam fugiat!
              </p>
            </div>
          </div>
        </Box>
      )}
      {data && data[0] && (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: `repeat(${data.length}, 1fr)`,
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              position: "relative",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundImage: `url(${data[0].img})`,
              height: "30vw",
              justifyContent: "center",
              textAlign: "center",
            }}
            // className="flex items-center justify-center flex-col relative service_1 "
            onMouseOver={handleService}
            onMouseOut={handleServiceOver}
          >
            <h4
              className="uppercase text-2xl font-medium text_color_1 z-20 relative"
              id="bar_text"
            >
              {data[0].title} &{" "}
              <span className="text-white" id="bar_span">
                <br />
                {data[0].title_1}
              </span>
            </h4>
            <div
              className="absolute z-10 opacity-60 bg-black inset-0"
              id="bar"
            ></div>
          </Box>
          {data[1] && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                position: "relative",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundImage: `url(${data[1].img})`,
                justifyContent: "center",
                textAlign: "center",
              }}
              onMouseOver={handleService}
              onMouseOut={handleServiceOver}
            >
              <h4
                className="uppercase text-2xl font-medium text_color_1 z-20 relative"
                id="spa_text"
              >
                {data[1].title} &{" "}
                <span className="text-white" id="spa_span">
                  <br />
                  {data[1].title_1}
                </span>
              </h4>

              <div
                className="absolute z-10 opacity-60 bg-black inset-0"
                id="spa"
              ></div>
            </Box>
          )}
          {data[2] && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                position: "relative",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundImage: `url(${data[2].img})`,
                justifyContent: "center",
                textAlign: "center",
              }}
              onMouseOver={handleService}
              onMouseOut={handleServiceOver}
            >
              <h4
                className="uppercase text-2xl font-medium text_color_1 z-20 relative"
                id="health_text"
              >
                bar &{" "}
                <span className="text-white" id="health_span">
                  <br />
                  restaurants
                </span>
              </h4>

              <div
                className="absolute z-10 opacity-60 bg-black inset-0"
                id="health"
              ></div>
            </Box>
          )}
          {data[3] && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                position: "relative",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundImage: `url(${data[3].img})`,
                justifyContent: "center",
                textAlign: "center",
              }}
              className="flex items-center justify-center flex-col relative service_4"
              onMouseOver={handleService}
              onMouseOut={handleServiceOver}
            >
              <h4
                className="uppercase text-2xl font-medium text_color_1 z-20 relative"
                id="concert_text"
              >
                bar &{" "}
                <span className="text-white" id="concert_span">
                  <br />
                  restaurants
                </span>
              </h4>

              <div
                className="absolute z-10 opacity-60 bg-black inset-0"
                id="concert"
              ></div>
            </Box>
          )}
          {data[4] && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                position: "relative",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundImage: `url(${data[4].img})`,
                justifyContent: "center",
                textAlign: "center",
              }}
              onMouseOver={handleService}
              onMouseOut={handleServiceOver}
            >
              <h4
                className="uppercase text-2xl font-medium text_color_1 z-20 relative"
                id="lounge_text"
              >
                bar &{" "}
                <span className="text-white" id="lounge_span">
                  <br />
                  restaurants
                </span>
              </h4>

              <div
                className="absolute z-10 opacity-60 bg-black inset-0"
                id="lounge"
              ></div>
            </Box>
          )}
        </Box>
      )}
    </>
  );
}
