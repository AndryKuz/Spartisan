import { useSelector } from "react-redux";

import Title from "common/Title/Title";

import { nameTitle } from "common/Title/titleData";
import ButtonArea from "./components/ButtonArea";
import ClubCard from "./components/ClubCard/ClubCard";
import BookingHistory from "./components/BookingHistory/BookingHistory";
import PersonalForm from "./components/Person/PersonalForm";


const PersonalArea = () => {
const {activeButton} = useSelector(state => state.personal);

const components = {
  1: <PersonalForm />,
  2: <ClubCard />,
  3: <BookingHistory />,
};
  return (
    <div >
      <Title titleStart={nameTitle[7][1]} titleEnd={nameTitle[7][2]} />
      <br />
      <ButtonArea/>
     <div style={{marginBottom:'40px'}}></div>
     {components[activeButton.id] || null}
    </div>
  );
};

export default PersonalArea;
