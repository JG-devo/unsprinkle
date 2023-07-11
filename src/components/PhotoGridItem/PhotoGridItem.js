import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <Image>
          <source
            type="image/avif"
            srcset={`
            ${src.replace('.jpg', '.avif')} 1x,
            ${src.replace('.jpg', '@2x.avif')} 2x,
            ${src.replace('.jpg', '@3x.avif')} 3x,
    `}
          />
          <source
            type="image/jpeg"
            srcset={`
            ${src} 1x,
            ${src.replace('.jpg', '@2x.jpg')} 2x,
            ${src.replace('.jpg', '@3x.jpg')} 3x,
            `}
          />
          <img alt={alt} src={src} />
        </Image>
      </Anchor>
      <Tags>
        {tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.picture`
  & img {
    height: 300px;
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    display: block;
    border-radius: 2px;
    margin-bottom: 8px;
  }
`;

const Tags = styled.ul`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 4px 0;
`;

const Tag = styled.li`
  display: inline;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);

  &:not(:last-of-type) {
    margin-right: 8px;
  }
`;

export default PhotoGridItem;
