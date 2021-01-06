import "./styles.scss";
import logo from "../../assets/icons/star-wars.svg";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

export function Home() {
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const [people, setPeople] = useState({ people: [] });


  useEffect(() => {
    async function main() {
      const newUrl = `people/?search=${name}&format=json&page=${page}`;
      const data = await api.get(newUrl);
      console.log(data);
      setPeople({ people: data.data.results });
    }
    main();
  }, [name, page]);

  return (
    <>
      <div className="home-container">
        <img className="logo" src={logo} alt="star wars logo" />
        <form>
          <FiSearch size={20} style={{ position: "absolute", marginLeft: 5 }} />
          <input
            placeholder="Insira um personagem"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
      </div>
      <div className="grid-container">
        {people.people.map((item, index) => (
          <div className="section-people" key={index}>
            <span>Name: {item.name}</span>
            <span>Height: {item.height}</span>
            <span>Mass: {item.mass}</span>
            <span>Hair color: {item.hair_color}</span>
            <span>Skin color: {item.skin_color}</span>
          </div>
        ))}
      </div>
      <div className="arrow">
        <FiArrowLeft onClick={() => setPage(page - 1)} size={40} />
        <FiArrowRight onClick={() => setPage(page + 1)} size={40} />
      </div>
    </>
  );
}
