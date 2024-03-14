import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white p-4 flex">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">Yazda Exercises</h1>
        <nav className="mt-4">
          <ul className="flex space-x-4">
            <li>
              <Link className="hover:text-gray-300" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" href="/exercises">
                Exercises
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" href="/workouts">
                Workouts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Image src="/app.png" alt="App Icon" width={100} height={24} />
      </div>
    </header>
  );
};

export default Header;
