import styled from "@emotion/styled";
import { deviceSize, size } from "./DiviceSize";

export const CardList = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, 330px);
  @media only screen and (max-width: ${size.laptop}) {
    grid-template-columns: repeat(auto-fit, 300px);
  }
  @media only screen and (max-width: ${size.tablet}) {
    grid-template-columns: 1fr;
  }
  grid-gap: 15px;
  justify-content: center;
`;

// Basic Card
export const CardWrap = styled.div`
  display: inline-block;
  overflow: hidden;
  background-color: #f1f3f5;
  box-shadow: rgba(23, 25, 29, 0.05) 0 4px 10px;
  transform: translateY(0);
  margin-right: 1rem;
  margin-bottom: 1rem;
  &:hover {
    box-shadow: rgba(23, 25, 29, 0.15) 0 4px 10px;
    transform: translateY(-4px);
  }
  transition: box-shadow 0.3s, transform 0.3s;
  margin-right: 2rem;
  margin-bottom: 2rem;

  @media ${deviceSize.mobileS} {
    width: 100%;
    height: 380px;
    border-radius: 2px;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }

  @media ${deviceSize.mobileL} {
    width: 100%;
    height: 380px;
    border-radius: 3px;
  }

  @media ${deviceSize.tablet} {
    width: 300px;
    height: 340px;
    border-radius: 5px;
  }
  @media ${deviceSize.laptop} {
    width: 320px;
    height: 380px;
    border-radius: 5px;
  }
`;
export const CardHead = styled.div`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  display: block;
  height: 180px;
  @media ${deviceSize.tablet} {
    height: 120px;
  }
  @media ${deviceSize.laptop} {
    height: 160px;
  }
`;
export const CardBody = styled.div`
  padding: 1rem;
  display: block;
  height: 100px;
  @media ${deviceSize.tablet} {
    padding: 0.8rem;
    height: 100px;
  }
  @media ${deviceSize.laptop} {
    padding: 1rem;
    height: 130px;
  }
`;
export const Title = styled.h2`
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 700;
  color: #495057;
  @media ${deviceSize.tablet} {
    font-size: 18px;
    fontweight: 700;
  }
  @media ${deviceSize.laptop} {
    font-size: 22px;
    fontweight: 700;
  }
`;
export const Synopsis = styled.div`
  padding-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.5;
  font-weight: 400;
  color: #495057;
  @media ${deviceSize.tablet} {
    font-size: 14px;
  }
  @media ${deviceSize.laptop} {
    font-size: 18px;
  }
`;
export const CardBottom = styled.div`
  height: 50px;
  left: 0;
  bottom: 0;
  display: flex;
  padding: 0.6rem 1rem 0.6rem 1rem;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e9ecef;
  @media ${deviceSize.tablet} {
    height: 32px;
  }
  @media ${deviceSize.laptop} {
    height: 40px;
  }
`;
export const CardUser = styled.div`
  font-weight: 600;
  color: #495057;
  @media ${deviceSize.tablet} {
    font-size: 12px;
  }
  @media ${deviceSize.laptop} {
    font-size: 18px;
  }
`;
