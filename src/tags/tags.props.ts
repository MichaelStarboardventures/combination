import { FC } from 'react';
import { TagsGroup } from '@/tags/tags.group';

export type TagActiveKey = string | number;

export type TagsGroupProps = {
  /**
   * 当前选中的key值
   */
  activeKey?: TagActiveKey;

  /**
   * tag click回调
   * @param key
   */
  onClick?: (key: TagActiveKey) => void;

  /**
   * tag 类型
   */
  type?: 'tag' | 'card';
};

export type TagsProps = {
  /**
   * tag value
   */
  value: TagActiveKey;
};

export type TagsBasicProps = FC<TagsProps> & {
  Group: typeof TagsGroup;
};
