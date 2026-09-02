import React from "react";

const ImageSection = () => {
  return (
    <section
      className="
        relative
        w-full
        h-[420px]
        sm:h-[500px]
        md:h-[600px]
        lg:h-[700px]
        xl:h-[780px]
        bg-[url('/images/1.jpg')]
        bg-cover
        bg-center
        bg-no-repeat
        bg-fixed
      "
      aria-label="Maya Niketan Villa"
    />
  );
};

export default ImageSection;
