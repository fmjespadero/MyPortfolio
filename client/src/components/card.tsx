type CartType = {
  className?: string;
  children: React.ReactNode;
};
export const Card = ({ className, children }: CartType) => {
  return (
    <div
      className={`${className} flex flex-col p-3 bg-[#242526] rounded-md gap-2`}
    >
      {children}
    </div>
  );
};
