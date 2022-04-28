interface ISectionContainerProps {
  padding?: boolean;
  children: any;
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
export default SectionContainer;
