export default function User() {
  return (
    <div className="max-w-md relative">
      <h2 className="uppercase mb-2">сүүлийн үеийн мэдээ</h2>
      <h1 className="capitalize text-xl">
        enter your <b>email address</b> for our mailing list to keep your self
        update.
      </h1>
      <form action="" className="absolute bottom-0">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="px-3 py-2"
        />
        <button type="submit" className="py-2 px-6 text-white bg-black">
          Илгээх
        </button>
      </form>
    </div>
  );
}
