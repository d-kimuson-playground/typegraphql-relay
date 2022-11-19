import { Link } from "./link"

export const Nav: React.FC = () => {
  return (
    <ul>
      <li>
        <Link<"/"> path={"/"}>Home</Link>
      </li>
      <li>
        <Link<"/example"> path={"/example"}>Example</Link>
      </li>
      <li>
        <Link<"/nests/:nestId">
          path={"/nests/:nestId"}
          params={{ nestId: "20" }}
        >
          Nests 20
        </Link>
      </li>
    </ul>
  )
}
