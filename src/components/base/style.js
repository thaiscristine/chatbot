import styled from 'styled-components';
// import { shade, rgb } from 'polished';

import bars from '../../assets/bars.png';

export const BarsBackground = styled.div`
  width: 600px;
  height: 300px;
  background: #ccc;
  position: relative;
  left: 0px;
  background: url(${bars});
  background-size: contain;
  background-repeat: no-repeat;
`;