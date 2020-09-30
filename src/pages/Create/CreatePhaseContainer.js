import React from "react";
import CreatePhasePresenter from "./CreatePhasePresenter";

export default function CreatePhaseContainer() {
  return (
    <>
      <CreatePhasePresenter phaseData={LAST_PHASE_DATA} />
    </>
  );
}

const LAST_PHASE_DATA = {
  postId: 320,
  phase: 3,
  username: "Harry",
  max_phase: 5,
  subtitle: "Harry Potter and the Prisoner of Azkaban",
  post:
    "Harry starts off his third year at Hogwarts rather eventfully when he inadvertently blows up his Aunt Marge, goes on the run, and is then personally absolved by the Minister of Magic himself. He then learns that mass murderer, Sirius Black, is intent on killing him, and Mr. Weasley makes him promise a strange thing, that no matter what he hears he won’t go looking for Black. Confused, Harry agrees. \n Harry starts off his third year at Hogwarts rather eventfully when he inadvertently blows up his Aunt Marge, goes on the run, and is then personally absolved by the Minister of Magic himself. He then learns that mass murderer, Sirius Black, is intent on killing him, and Mr. Weasley makes him promise a strange thing, that no matter what he hears he won’t go looking for Black. Confused, Harry agrees.\n Harry starts off his third year at Hogwarts rather eventfully when he inadvertently blows up his Aunt Marge, goes on the run, and is then personally absolved by the Minister of Magic himself. He then learns that mass murderer, Sirius Black, is intent on killing him, and Mr. Weasley makes him promise a strange thing, that no matter what he hears he won’t go looking for Black. Confused, Harry agrees.",
};
