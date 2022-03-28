export default function Event({ data }) {
  console.log(data);
  return (
    <div className="flex flex-col mr-8 max-w-md ">
      <h6 className="uppercase mb-2 text-base text_color tracking-widest">
        арга хэмжээ
      </h6>
      {data &&
        data.map((d) => {
          return (
            <>
              <div
                className="flex justify-start items-center mb-3"
                key={d.place_event_id}
              >
                <div className="mr-6">
                  <h1 className="text-2xl font-semibold text_color">{d.day}</h1>
                  <h6>{d.month} сар</h6>
                </div>
                <div>
                  <h6 className="font-bold text-xs">{d.title}</h6>
                  <div className="mt-2">
                    <h5 className="text-gray-700">{d.place}</h5>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
}
