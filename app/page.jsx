import Link from "next/link";

function Home() {

  return(
  <>
    <div className="text-green-400">I am the home page</div>
    <Link href="/todos" className="px-2 py-1 bg-white text-blue-500 rounded-lg">
      TodoList
    </Link>
  </>
  )
}

export default Home;
