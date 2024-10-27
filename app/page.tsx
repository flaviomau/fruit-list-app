import { FruitList } from "./feature/fuit-list/fruit-list";
import { Jar } from "./feature/jar/jar";

export default function Home() {
  return (
    <div className="flex flex-row w-full">
      <div className="w-1/2 m-4">
        <FruitList />
      </div>
      <div className="w-1/2 m-4">
        <Jar />
      </div>
    </div>
  );
}
