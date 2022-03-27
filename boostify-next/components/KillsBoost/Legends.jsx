import { useState } from "react";
import styled from "styled-components";
import { LegendsObj } from "../../utils/InfoObj";
import Extras from "./Extras";
//import "../AcheivementBadges/Acheivementbadges.css"
import Image from "next/image";
import { CheckLabel } from "../ProductComponents/ProductElements";
const BadgeDesc = styled.p`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 5px;

  font-family: "Open Sans Condensed", sans-serif;
  font-size: 22.62px;
  font-weight: 100;
  line-height: 28px;
  color: white;
  text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black,
    -0.07em -0.07em black, -0.07em 0.07em black, 0.07em -0.07em black,
    0.07em 0.07em black;
`;

const TextIconCheckBox = styled.div`
  display: flex;
  justify-content: center;
  justify-self: center;
  padding: 0.5rem;
  margin: 0.5rem;
  flex-direction: column;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#3f3f3f"};
  border-radius: 100%;
  height: 320px;
  width: 320px;

  @media (max-width: 530px) {
    padding: 0.1rem;
    width: 250px;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
  }
  @media (max-width: 400px) {
    width: 200px;
  }
`;
const BadgesSelectionContainers = styled.div`
  display: grid;
  width: 80vw;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: ${(props) => (props.height ? props.height : "500px")};
  overflow-y: auto;
  margin-bottom: 150px;
  @media (max-width: 1780px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 530px) {
    height: 520px;
  }
`;
const Searchbar = styled.input.attrs({
  type: "text",
  placeholder: "search",
})`
  box-sizing: border-box;
  font-size: 2rem;
  padding: 1rem;
  display: block;
  margin: 2rem auto;
  width: 50vw;
  border-radius: 50px;
`;
const BadgesSectionTitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 50px;

  font-family: "Open Sans Condensed", sans-serif;
  font-size: 31.99px;
  font-weight: 700;
  line-height: 48px;
  color: white;
  border-bottom: solid 4px #e43403;
  border-top: solid 4px #e43403;
  border-radius: 10px;
  text-align: center;
  text-transform: uppercase;
  width: 80vw;
`;
const LegendSelectionContainer = styled(BadgesSelectionContainers)`
  margin-bottom: 0;
`;
const LegendsTitle = styled(BadgesSectionTitle)`
  border-color: #6d00ae;
  color: black;
`;
const Search = styled(Searchbar)`
  border: 2px solid #6d00ae;
  outline-color: #6d00ae;
`;
const Legends = ({ price, kills }) => {
  const [searchFieldLegends, setSearchFieldLegends] = useState("");
  const [checkedLegend, setLegend] = useState("");
  const handleChangeLegends = (e) => {
    setLegend({
      [e.target.name]: e.target.checked,
    });
  };

  let ReversedObj = [...LegendsObj].reverse();
  return (
    <>
      <LegendsTitle>Legends</LegendsTitle>
      <Search
        onChange={(e) => setSearchFieldLegends(e.target.value)}
        value={searchFieldLegends}
      ></Search>
      <LegendSelectionContainer>
        {ReversedObj.filter((items) => {
          return items.name
            .toLowerCase()
            .includes(searchFieldLegends.toLowerCase());
        }).map((Items, index) => {
          return (
            <TextIconCheckBox
              backgroundColor="white"
              key={Items.key + index.toString()}
            >
              <div
                style={{
                  marginRight: "auto",
                  marginLeft: "auto",
                  height: "210px",
                  width: "210px",
                  color: "white",
                }}
              >
                {" "}
                <Image src={Items.icon} alt="badge"></Image>
              </div>
              <BadgeDesc>{Items.name}</BadgeDesc>
              <CheckLabel
                className="check"
                key={Items.key}
                style={{ backgroundColor: "black" }}
              >
                <input
                  type="checkbox"
                  className="inputCheck"
                  name={Items.name}
                  checked={checkedLegend[Items.name]}
                  onChange={handleChangeLegends}
                />

                <div className="box" style={{ backgroundColor: "black" }}></div>
              </CheckLabel>
            </TextIconCheckBox>
          );
        })}
      </LegendSelectionContainer>
      <Extras price={price} kills={kills} legend={checkedLegend}>
        {" "}
      </Extras>
    </>
  );
};

export default Legends;
