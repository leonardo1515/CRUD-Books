import React from "react";

interface TitlePageProps {
  title: string;
  subTitle?: string;
}

const TitlePage: React.FC<TitlePageProps> = ({ title, subTitle }) => {
  return (
    <>
      <h1 className="title-page">{title}</h1>
      <h4>{subTitle}</h4>
    </>
  );
};

export default TitlePage;