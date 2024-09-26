import Title from "common/Title/Title";

import { nameTitle } from "common/Title/titleData";
import ButtonArea from "./components/ButtonArea";
import ClubCard from "./components/ClubCard/ClubCard";
import BookingHistory from "./components/BookingHistory/BookingHistory";


const PersonalArea = () => {
  return (
    <div >
      <Title titleStart={nameTitle[7][1]} titleEnd={nameTitle[7][2]} />
      <br />
      <ButtonArea />
      <br />
      <ClubCard />
      <BookingHistory/>
    </div>
  );
};

export default PersonalArea;
