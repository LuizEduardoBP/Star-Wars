import "./styles.scss";
import { useLocation } from "react-router-dom";

export function People() {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  return (
    <div className="container-page">
        <h1>RESULTADOS</h1>
      
      {data.map((item, index) => (
        <div className="section-people" key={index}>
          <span>Name: {item.name}</span>
          <span>Height: {item.height}</span>
          <span>Mass: {item.mass}</span>
          <span>Hair color: {item.hair_color}</span>
          <span>Skin color: {item.skin_color}</span>
        </div>
      ))}

      
    </div>
  );
}
