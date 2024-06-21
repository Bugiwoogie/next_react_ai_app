import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <label className="block">
          <textarea rows="4" cols="50" type="text" name="input_promt" style={{color: "black"}} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Type your idea here" />
        </label>
        <div>
          <button style={{borderRadius: "10%", backgroundColor: "white", color: "black", float: "right"}} className="p-2 mt-3" >Generate</button>
        </div>
      </div>

    </main>
  );
}
 // className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">