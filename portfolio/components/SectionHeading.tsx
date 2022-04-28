import Image from "next/image";

interface ISectionHeadingProps {
  title: string;
  icon?: string;
  margin?: boolean;
}

const SectionHeading = (props: ISectionHeadingProps) => {
  return (
    <div
      className={
        props.margin
          ? "mb-[10px] flex flex-shrink-0 flex-col"
          : "flex flex-shrink-0 flex-col"
      }
    >
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

export default SectionHeading;

const defaultProps: ISectionHeadingProps = {
  title: "",
  margin: true,
};

SectionHeading.defaultProps = defaultProps;
