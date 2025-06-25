'use client';

import { CSSProperties } from 'react';

import { useActions } from '@/hooks/useActions';
import { useHandleData } from '@/hooks/useHandleData';
import { GridItem } from '@/types/gridItem';

import { StyleBox } from './StyleBox';

interface ButtonCompoProps {
  data?: GridItem;
  style?: CSSProperties;
}

const Button = ({ data, style }: ButtonCompoProps) => {
  console.log('🚀 ~ Button ~ data:', data);
  const { handleAction } = useActions(data);
  const { dataState } = useHandleData({ dataProp: data?.data });

  return (
    <StyleBox
      as={'button'}
      onClick={() => handleAction('onClick')}
      type="button"
      className="cursor-pointer"
      style={style}
      styledComponentCss={data?.styledComponentCss}
    >
      {dataState || 'Button'}
    </StyleBox>
  );
};

export default Button;
