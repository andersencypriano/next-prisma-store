import Logo from "./Logo";
import NavBar from "./NavBar";
import UserNavBar from "./UserNavBar";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 bg-slate-900 p-3">
      <div className="container mx-auto flex items-center justify-between text-white">
        <div className="w-1/5">
          <Logo />
        </div>
        <NavBar />
        <div className="w-1/5 flex justify-end">
          <UserNavBar />
        </div>
      </div>
    </header>
  );
}
