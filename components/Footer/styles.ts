import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 250px;
  
  display: block;
  /* flex: 1; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  border-top: 1px solid #fff;
  border-top: 1px solid #C86DD7;

  background: linear-gradient(45deg, #F0722B,  #FFA842);
  background: linear-gradient(to right, #1900FF, #C86DD7);
  /* background: #d2d6db; */
  padding: 4.8rem;
  /* padding-bottom: 6rem; */

  /* background: #fff; */

  @media(max-width: 580px) {
    padding: 2rem;
  }
`;

export const Text = styled.p`
  color: #fff;
  /* color: #7d2440; */
  /* color: #C86DD7; */
  /* color: #202428; */
  font-size: 14px;
  text-align: center;
  /* margin-top: 1.6rem; */
  margin: 8px ;
`;

export const Link = styled.h3`
  color: #202428;
  color: #fff;

  font-size: 14px;
  text-align: center;
  /* margin-top: .6rem; */
  margin: 1.6rem;

  @media(max-width: 580px) {
    margin: .8rem;
  }
`;

export const Redes = styled.div`
  display: flex;
  /* flex: 1; */
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background: #ddd; */

  h4 {
    margin: 0px .8rem ;
    color: #202428;
    color: #ffff;
  }
`;

export const Line = styled.hr`
  height: 1px;
  width: 20%;
  background: #d2d6db;
  margin-top: 2.6rem;
  margin-bottom: 2.6rem;
  border: 1px solid #fff;
`;