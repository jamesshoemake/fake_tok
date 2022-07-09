import React from "react";

interface IProps {
  text: string;
}
const NoResults = ({ text }: IProps) => {
  return <div>{text}</div>;
};

export default NoResults;
