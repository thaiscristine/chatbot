import styled from 'styled-components';
// import { shade, rgb } from 'polished';

// import bars from '../../assets/bars.png';
import bars from '../../assets/bars2.png';

export const BarsBackground = styled.div`
    width: 860px;
    height: 590px;
    background: #ccc;
    position: relative;
    top: 0;
    margin-top: -252px;
    left: -139px;
    background: url(${bars});
    background-size: contain;
    background-repeat: no-repeat;
}
 /* width: 600px;
  height: 300px;
  background: #ccc;
  position: relative;
  top: 0;
  left: 0px;
  background: url(${bars});
  background-size: contain;
  background-repeat: no-repeat; */
`;