import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";

const styles = {
  container:
    "flex w-full max-w-[595px] max-h-[842px] flex-grow items-stretch justify-between self-center justify-self bg-white dark:bg-slate-800 py-[45px] px-[29px] my-auto",
  leftWrapper: "relative mx-[8px] flex w-[210px] flex-grow flex-col bg-white",
  personalImage:
    "absolute top-[-14px] left-0 right-0 z-10 mx-auto h-[128px] w-[96px]",
  leftContent:
    "pt-[75px] mt-[45px] flex flex-grow flex-col bg-[#FFE6CF] dark:bg-slate-900 space-y-[15px]",
  righWrapper:
    "mx-[8px] flex w-[289px] flex-grow flex-col bg-white dark:bg-slate-800 space-y-[15px]",
};

const Home: NextPage = () => {
  useEffect(() => {
    // document.documentElement.className = "dark";
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.leftWrapper}>
        <div className={styles.personalImage}>
          <Image priority={true} src={"/assets/Avatar.svg"} layout="fill" />
        </div>

        <div className={styles.leftContent}>
          <NameTitle />
          <SectionContainer padding>
            <SectionHeading title="ABOUT ME" />
            <SectionItem>
              <p className="text-[9px] opacity-80">
                Highly passionate about programming languages and technologies,
                eager to learn and discover new dimensions, flexible and
                adaptable to changes, and able to perform independently.
              </p>
            </SectionItem>
          </SectionContainer>
          <SectionContainer padding>
            <SectionHeading title="INFORMATION" />
            <SectionItem />
          </SectionContainer>
          <SectionContainer padding>
            <SectionHeading title="SKILLS" />
            <SectionItem />
          </SectionContainer>
          <SectionContainer padding>
            <SectionHeading title="LANGUAGES" />
            <SectionItem />
          </SectionContainer>
        </div>
      </div>
      <div className={styles.righWrapper}>
        <SectionContainer>
          <SectionHeading title="EDUCATION" icon="/assets/experience.svg" />
          <SectionContent
            heading={"Bachelor of Computer Science"}
            subHeading={"American University of Ras Al Khaimah, 2014 – 2019"}
            padding={false}
          >
            <SectionList />
          </SectionContent>
        </SectionContainer>
        <SectionContainer>
          <SectionHeading title="EXPERIENCE" icon="/assets/education.svg" />
          <SectionContent
            heading={".Net Developer"}
            subHeading={
              "Electronic Government Authority, Ras Al-Khaimah, Oct 2021 – Present \n Department of Economic Development, Ras Al-Khaimah, Sep 2020 – Oct 2021"
            }
          >
            <SectionList
              list={[
                "Utilized a utility-first CSS approach which result in scalable and highly maintained CSS and small file size.",
                "Produced direction-friendly components that eliminated the need for separate CSS files for both LTR and RTL layouts.",
                "Delivered a google maps module that utilizes paginated APIs to provide reactive location filtering.",
                "Developed reusable custom components with minimal to zero dependencies",
              ]}
            />
          </SectionContent>
          <SectionContent heading="Freelance Developer">
            <SectionList />
          </SectionContent>
          <SectionContent
            heading="Developer"
            subHeading="Goverment Sector, Ras Al-Khaimah, Feb 2020 – Sep 2020"
          >
            <SectionList
              list={[
                "Engaged in developing HTML pages from sketchs.",
                "Handled mentoring a team of fresh React developers.",
              ]}
            />
          </SectionContent>
          <SectionContent
            heading="Developer"
            subHeading="Sheikh Said Bin Saqr Charitable Foundation, Ras Al-Khaimah, 2019–2019"
          >
            <SectionList
              list={["Developed an electron based human resources application"]}
            />
          </SectionContent>
        </SectionContainer>
        <SectionContainer>
          <SectionHeading title="INTERESTS" icon="/assets/interests.svg" />
          <SectionContent heading="Digital assets trading" />
          <SectionContent heading="DApps and DeFi protocols" />
          <SectionContent heading="Functional Programing" />
        </SectionContainer>
      </div>
    </div>
  );
};

export default Home;

interface ISectionContainerProps {
  padding?: boolean;
  children: any;
}
interface ISectionHeadingProps {
  title: string;
  icon?: string;
}

const SectionContainer = (props: ISectionContainerProps) => {
  return (
    <div
      className={
        props.padding
          ? "flex flex-shrink-0 flex-col px-[14px] text-[#414042] dark:text-slate-300"
          : "flex flex-shrink-0 flex-col text-[#414042] dark:text-slate-300"
      }
    >
      <div className="flex flex-shrink-0 flex-col">{props.children}</div>
    </div>
  );
};

const SectionHeading = (props: ISectionHeadingProps) => {
  return (
    <div className="mb-[10px] flex flex-shrink-0 flex-col">
      <span className="h-[1px] bg-[#414042] dark:bg-slate-300"></span>
      <div className="flex flex-shrink-0 items-center py-[5px]">
        {props.icon && (
          <Image priority={true} src={props.icon} width="21px" height="15px" />
        )}
        <h3
          className={
            props.icon
              ? "mx-[10px] text-xs font-semibold tracking-[0.15em]"
              : "text-xs font-semibold tracking-[0.15em]"
          }
        >
          {props.title}
        </h3>
      </div>
      <span className="h-[1px] bg-[#414042] dark:bg-slate-300"></span>
    </div>
  );
};

const SectionContent = ({ heading, subHeading, padding = true, children }) => {
  return (
    <div className="flex flex-shrink-0 items-stretch">
      <div className="relative mr-[10px] w-[1px] flex-shrink-0 bg-[#414042] rtl:ml-[10px] dark:bg-slate-300">
        <span className="absolute top-0 left-[-2px] right-[-2px] mx-auto h-[5px] w-[5px] rounded-full bg-[#414042]" />
      </div>
      <div className={padding ? "space-y-[4px] pb-[16px]" : "space-y-[4px]"}>
        <h4 className="text-[10px] font-semibold leading-none tracking-[0.02em]">
          {heading}
        </h4>
        <p className="text-[8px] opacity-70">{subHeading}</p>
        {children}
      </div>
    </div>
  );
};
const SectionList = ({
  list = [
    "Algorithms and Programming Languages Concentration",
    "Research on Recommendation Algorithms",
    "Android Mobile Application Graduation Project",
  ],
}) => {
  return (
    <ul className="list-disc space-y-[4px] px-[8px] text-[8px]">
      {list.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

const SectionItem = ({ children }) => {
  return <div className="space-y-[4px] font-openSans">{children}</div>;
};

const NameTitle = () => {
  return (
    <div className="mt-[10px] flex flex-col items-center px-[10px] text-[#414042]">
      <h1 className="text-lg font-bold leading-[1.375rem] tracking-[0.08em]">
        <span className="font-light">AHMED</span> SAADAWI
      </h1>
      <div className="flex items-center leading-[0.875rem]">
        <span className="mx-1 h-[2px] w-[2px] rounded-full bg-[#414042]" />
        <p className="font-openSans text-[10px]">Fullstack Developer</p>
        <span className="mx-1 h-[2px] w-[2px] rounded-full bg-[#414042]" />
      </div>
    </div>
  );
};
