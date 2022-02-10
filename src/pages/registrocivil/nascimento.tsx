import { NascimentoLayout } from "../../components/layouts/nascimento/nascimento";
import { CitiesProvider } from "../../contexts/cities";

const Nascimento = () => {
  return (
    <CitiesProvider>
      <NascimentoLayout />
    </CitiesProvider>
  );
}

export default Nascimento;