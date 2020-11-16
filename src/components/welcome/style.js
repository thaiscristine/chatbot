import styled from 'styled-components';
import { shade } from 'polished';

// import avatar from '../../assets/LIA_avatar_intro.png';

export const Content = styled.div`
    display: flex;
    position: absolute;
    top: -120px;
    left: -20%;
    background: #ccc;
    width: 800px;
    height: 420px;
    border-radius: 50px;
    div {
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        text-align: left;

        a { 
            align-self: flex-start;
            padding: 30px 20px;
        }
        h1{ 
            /* font-family: 'bc-novatica-cyr,  sans-serif'; */
            align-self: flex-start;
            padding: 30px 20px;
            color: #336195;
        }
        svg {
            margin-left: 5px;
        }
        img { 
           padding: 40px;
       }
       p {

            padding: 0 60px 0 20px;;
       }
    }
`;


export const Button = styled.a`
  background: #F37369;
  height: 26px;
  border-radius: 50px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 200px;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align:center;

  &:hover {
    text-decoration: none;
    color: #fff;
    background: ${shade(0.2, '#F37369')};
  }
`;


// export const Step1BarStyle = styled.div`
//   width: 37px;
//   height: 52px;
//   border-radius: 3px;
//   background: #F37369;
//   position: absolute;
//   top: 234px;
//   left: 37px;
// `;