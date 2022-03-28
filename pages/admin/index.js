import Login from "./login";
import { useRouter } from "next/router";
export default function Admin() {
  const router = useRouter();
  return (
    <div className="flex">
      <button
        onClick={() =>
          router.push({ pathname: "/admin/login", query: { pid: 4 } })
        }
      >
        Corporate
      </button>
      <button
        onClick={() => router.push("/admin/login", { params: { pid: 2 } })}
      >
        Corporate_1
      </button>
      <button
        onClick={() => router.push("/admin/login", { params: { pid: 3 } })}
      >
        Corporate_2
      </button>
      <button
        onClick={() => router.push("/admin/login", { params: { pid: 4 } })}
      >
        Corporate_3
      </button>
    </div>
  );
}
