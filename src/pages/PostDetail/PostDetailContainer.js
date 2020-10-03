import React, { useEffect, useState } from "react";
import PostDetailPresenter from "./PostDetailPresenter";
import { getPhase, getWaveDetail } from "../../postApi";

export default function PostDetailContainer({ match }) {
  // post_detail_data  "get" api needed
  // like_send  "post" api needed
  const [postData, setPostData] = useState(null);
  // const [phaseData, setPhaseData] = useState(null);
  const id = match.params.id;

  useEffect(() => {
    const fetcher = async () => {
      await getWaveDetail(id)
        .then(res => res.json())
        .then(data => setPostData(data));
      // await getPhase(id, id)
      //   .then(res => res.json())
      //   .then(data => setPhaseData(data));
      // setPostData(post);
      // setPhaseData(phase);
    };
    fetcher();
  }, []);

  return <>{postData ? <PostDetailPresenter postData={postData} /> : null}</>;
}
