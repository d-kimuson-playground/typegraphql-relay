import { Nav } from "~/features/common/components/nav";
import { useNavigate } from "~/features/common/hooks/use-navigate";

export const HomePage: React.FC = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate('/nests/:nestId', { nestId: '20' })
  }

  return (
    <div>
      <h2>Home</h2>
      <Nav />

      <button onClick={onClick}>navigate で遷移</button>
    </div>
  );
};
