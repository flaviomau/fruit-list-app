import { FruitDTO } from "@/app/domain/fruit.dto";

export function PlainList({ list }: { list: Array<FruitDTO> }) {
  return (
    <ul>
      {list.map(f =>
        <li>
          {f.name}
        </li>
      )}
    </ul>
  );
}
