import React from "react";
import PostDetailPresenter from "./PostDetailPresenter";

export default function PostDetailContainer() {
  return (
    <>
      <PostDetailPresenter postData={POST_DETAIL_DATA} />
    </>
  );
}

const POST_DETAIL_DATA = {
  postId: 5,
  postImage_url:
    "https://likeherdingcatsblog.files.wordpress.com/2018/10/harry_potter-2.jpg",
  title: "Harry Potter",
  synopsis:
    "harry potter is wizard and he is very very important wizard in harry potter world. Fight with voldmort to use magic spells.",
  username: "DobbyisFree",
  categories: ["판타지", "SF"],
  created_at: "2020.11.06",
  last_phase: 3,
  max_phase: 5,
  posts: [
    {
      post_id: 1,
      phase: 1,
      subtitle: "Harry Potter and the Philosopher's Stone",
      writer: "JKRolling",
      post: `조그만 체구에 갸름한 얼굴을 하고 흐트러진 까만 머리와 초록빛 눈을 가진 소년인 해리 포터는 이마에 번개 모양의 가느다란 흉터가 있고 늘 헐렁한 헌옷에 낡은 안경을 끼고 다닌다. 해리는 한 살 때 자신의 부모를 살해하고 자신을 공격한 어둠의 마왕을 물리친 위대한 영웅임에도 자신이 마법사라는 사실도 모른 채 이모부인 더즐리 가족의 집에 맡겨진 채 온갖 멸시와 학대와 모욕을 당하며 계단 밑 벽장에서 불우한 삶을 살아간다. \n  

        그러다 해리의 열한번째 생일날, 호그와트의 사냥터지기 루베우스 해그리드가 나타나서 해리에게 모든 사실을 알려주며 해리는 호그와트라는 마법 학교에 입학하고 호그와트로 가는 열차에서 론 위즐리, 헤르미온느 그레인저와 친구를 맺는다. 호그와트에 도착한 해리는 4개의 기숙사 중 그리핀도르에 배정을 받고 론과 절친이 된다. \n

        호그와트 마법 학교에선 마법의 약 제조법, 약초학, 변신술, 어둠의 마법 방어술, 마법의 역사를 배우게 된다.해리는 첫 수업부터 스네이프 교수가 마음에 들지 않았고, 스네이프 교수도 해리를 마음에 들어하지 않았다. 해리와 원수지간인 드레이코 말포이는 결투를 신청해오고, 밤에 몰래 나가려던 해리와 론은 얼떨결에 헤르미온느와 네빌과 동행하게 된다. 학교 경비인 필치의 고양이인 노리스 부인을 발견하자 그들은 말포이의 속임수였다는 것을 눈치채고 도망갔지만 우연히 들어간 방에는 머리가 세 개 달린 개가 지하로 통하는 나무 문을 발로 밟아 지키고 있었다. \n 
        
         해리는 그 지하실에 들어있는 물품이 자신과 해그리드가 그린고트 금고에 갔을 적에 해그리드가 비밀 임무라며 꺼냈던 꾸러미라고 추측한다.`,
    },
    {
      post_id: 18,
      phase: 2,
      subtitle: "Harry Potter and the Chamber of Secrets",
      writer: "Ron",
      post:
        "It’s been another long summer at the Dursley’s for Harry Potter. He can’t wait to get back to Hogwarts and is counting down the days until he can return. He’s surprised when, on his birthday, a strange elfish creature named Dobby shows up with dire warnings for Harry: He must not return to Hogwarts!",
    },
    {
      post_id: 320,
      phase: 3,
      subtitle: "Harry Potter and the Prisoner of Azkaban",
      writer: "Harry",
      post:
        "Harry starts off his third year at Hogwarts rather eventfully when he inadvertently blows up his Aunt Marge, goes on the run, and is then personally absolved by the Minister of Magic himself. He then learns that mass murderer, Sirius Black, is intent on killing him, and Mr. Weasley makes him promise a strange thing, that no matter what he hears he won’t go looking for Black. Confused, Harry agrees.",
    },
  ],
};
