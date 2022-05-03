import React, { useContext, useMemo } from 'react';
import { TagsBasicProps, TagsGroupProps } from './tags.props';
import { TagsGroupContext, TagsGroup } from './tags.group';
import { TagsStyled } from './tags.styled';

export const useTagsContainer = (type?: TagsGroupProps['type']): string => {
  return useMemo(() => {
    if (!type) {
      return 'tag';
    }

    if (type !== 'tag' && type !== 'card') {
      console.warn(`错误的type类型${type + ''},Tags的type类型只有：tag或card`);

      return 'tag';
    }

    if (type === 'card') {
      return 'card';
    }

    return 'tag';
  }, [type]);
};

export const Tags: TagsBasicProps = ({ children, value }) => {
  const { data } = useContext(TagsGroupContext);
  const className = useTagsContainer(data?.type);

  return (
    <TagsStyled
      data-testid={'tags'}
      selected={data?.activeKey === value}
      type={data?.type}
      onClick={() => {
        if (data?.onClick) {
          data?.onClick(value);
        }
      }}
    >
      <div className={className}>{children}</div>
    </TagsStyled>
  );
};

Tags.Group = TagsGroup;
