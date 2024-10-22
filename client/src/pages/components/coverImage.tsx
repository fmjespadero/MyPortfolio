export const CoverImage = () => {
  return (
    <div className="h-[clamp(180px,_36vw,_360px)]  max-w-screen-xl mx-auto rounded-b-lg overflow-hidden">
      <img
        className="object-cover w-full h-full bg-center"
        src="https://placehold.co/600x400"
        alt=""
      />
    </div>
  );
};
