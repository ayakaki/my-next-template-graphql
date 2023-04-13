import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  title: string;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  type: string;
};

export const InputArea: React.FC<Props> = (props: Props) => {
  const modifyText = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setText(e.target.value);
  };

  return (
    <>
      <p className="font-bold text-teal-text mb-1">{props.title}</p>
      <input
        className="bg-color-500 bg-teal-input border-teal-base border-2 rounded-md w-full h-10 pl-2"
        onChange={modifyText}
        type={props.type}
      />
    </>
  );
};
