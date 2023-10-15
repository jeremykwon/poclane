import Image from 'next/image';
import { media } from 'utils/media';
import styled from 'styled-components';

//! TODO: imageList 를 받아오자
export const ImageGrid = () => {
  return (
    <StyledImageGrid>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(() => {
        return (
          <div>
            <Image src="/images/temp-banner-image.jpeg" width={'100%'} height={'100%'} layout="responsive" alt="현장이미지" />
          </div>
        );
      })}
    </StyledImageGrid>
  );
};

const StyledImageGrid = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 3개의 열을 가진 그리드 설정 */
  grid-gap: 16px; /* 열과 행 사이의 간격 설정 */

  img {
    border-radius: 5px;
  }

  ${media('<=tablet')} {
    grid-template-columns: repeat(3, 1fr); /* 3개의 열을 가진 그리드 설정 */
  }

  ${media('<=phone')} {
    grid-template-columns: repeat(2, 1fr); /* 3개의 열을 가진 그리드 설정 */
  }
`;
