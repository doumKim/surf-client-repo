import React, { useEffect, useState } from "react";
import { getPhase } from "../../postApi";
import CreatePhasePresenter from "./CreatePhasePresenter";

export default function CreatePhaseContainer({ match }) {
  const [phaseData, setPhaseData] = useState(null);

  useEffect(() => {
    const fetcher = async () => {
      const data = await getPhase(
        match.params.id,
        match.params.phase - 1
      ).then(res => res.json());

      setPhaseData(data);
    };

    fetcher();
  }, []);

  return <>{phaseData && <CreatePhasePresenter phaseData={phaseData} />}</>;
}
