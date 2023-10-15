import Image from 'next/image';
import styled from 'styled-components';

const Logo = () => {
  return (
    <StyledImageContainer>
      <Image src={'/images/logo-poclain.png'} alt="logo" width={45} height={45} />
    </StyledImageContainer>
  );
};

export { Logo };

const StyledImageContainer = styled.div`
  img {
    border-radius: 50%;
  }
`;
