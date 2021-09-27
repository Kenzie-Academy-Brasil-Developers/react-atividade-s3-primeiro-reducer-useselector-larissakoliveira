
//importando useSelector do react-redux
import { useSelector } from "react-redux";
import { Container } from './styles'
import Banana from '../../assets/Banana.jpeg'
import Morango from '../../assets/Morango.jpeg'
import Maca from '../../assets/Maçã.jpeg'


const FruitsPage = () => {
	//acessando o estado global e pegando o state fruits
  const fruits = useSelector((state) => state.fruits);

  return (
    <ul>
      {fruits.map((fruit) => (
        <Container key={fruit}> {fruit} <img src={fruit === 'Banana' ? Banana : fruit === "Morango" ? Morango : Maca} alt={fruit}/> </Container>
      ))}
    </ul>
  );
}

export default FruitsPage;