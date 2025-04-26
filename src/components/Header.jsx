import { Navbar } from "./NavBar";

export default function Header() {
  const buttonStyle =
    "menu-btn md:hidden w-10 h-10 grid place-items-center bg-zinc-50/10 rounded-xl ring-inset ring-1 ring-zinc-50/[0.02] backdrop-blur-2xl hover:bg-zinc-50/15 transition-[transform, background-color] active:scale-95";

  const headerStyle = "fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0";

  return (
    <header className={headerStyle} bg-red-500>
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a href="/" className="favIcon">
            <img
              src="/Images/favIcon.svg"
              width={40}
              height={40}
              alt="Leon Salvatore"
            />
          </a>
        </h1>
        <div className="relative md:justify-self-center">
          <button className={buttonStyle} onClick={null}>
            <span className="material-symbols-rounded">menu</span>
          </button>
          <Navbar />
        </div>
        <a href="Contact" className="">
          Contact Me
        </a>
      </div>
    </header>
  );
}