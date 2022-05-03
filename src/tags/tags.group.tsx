import React, { createContext, FC, useEffect, useState } from 'react';
import { TagsGroupProps, TagActiveKey } from './tags.props';
import { TagsGroupStyled } from './tags.styled';

export const TagsGroupContext = createContext<{ data: TagsGroupProps | null }>({
  data: null,
});

export const TagsGroup: FC<TagsGroupProps> = ({
  activeKey,
  onClick,
  children,
  type = 'tag',
}) => {
  const childrens = (children
    ? Array.isArray(children)
      ? children
      : [children]
    : undefined) as unknown as JSX.Element[];
  const [currentKey, setCurrentKey] =
    useState<TagActiveKey | undefined>(activeKey);

  useEffect(() => {
    if (!childrens) return;

    if (!activeKey) {
      setCurrentKey(childrens[0]?.props?.value);
    }
  }, []);

  return childrens ? (
    <TagsGroupContext.Provider
      value={{
        data: {
          onClick: (key) => {
            setCurrentKey(key);

            if (onClick) {
              onClick(key);
            }
          },
          activeKey: currentKey,
          type,
        },
      }}
    >
      <TagsGroupStyled type={type}>{children}</TagsGroupStyled>
    </TagsGroupContext.Provider>
  ) : null;
};

TagsGroup.defaultProps = {
  type: 'tag',
};
