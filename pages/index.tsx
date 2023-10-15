import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { InferGetStaticPropsType } from 'next';

import Page from 'components/Page';
import { media } from 'utils/media';
import { getAllPosts } from 'utils/postsFetcher';
import SectionTitle from 'components/SectionTitle';

// components
import Button from 'components/Button';
import { ImageGrid } from 'components/custom';

export default function BlogIndexPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Page
      title="신뢰의 기업 상일중기"
      description="lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem error incidunt a doloremque voluptatem porro inventore voluptate quo deleniti animi laboriosam. Possimus ullam velit rem itaque consectetur, in distinctio?"
      bottomContent={<TitleBottomButtom />}
    >
      <SectionTitle>사진관</SectionTitle>
      <ImageGrid />
    </Page>
  );
}

const TitleBottomButtom = React.memo(() => {
  return (
    <StyledTitieBottomWrapper>
      <Button>
        견적문의<span>&rarr;</span>
      </Button>
    </StyledTitieBottomWrapper>
  );
});

const StyledTitieBottomWrapper = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
