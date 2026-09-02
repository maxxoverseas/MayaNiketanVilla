import React from "react";

const FloatingWhatsApp = () => {
  const phoneNumber = "919960572239";

  const message = `*Welcome to*

# Maya Niketan Villa`;

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Maya Niketan Villa on WhatsApp"
      className="
        group
        fixed
        bottom-5
        right-4
        z-[9999]

        flex
        h-[58px]
        w-[58px]
        items-center
        justify-center

        rounded-full
        bg-[#25D366]

        shadow-[0_8px_30px_rgba(0,0,0,0.25)]

        transition-all
        duration-300

        hover:scale-110
        hover:shadow-[0_10px_35px_rgba(37,211,102,0.45)]

        sm:bottom-6
        sm:right-6
        sm:h-[62px]
        sm:w-[62px]

        md:bottom-7
        md:right-7

        lg:bottom-8
        lg:right-8
        lg:h-[66px]
        lg:w-[66px]
      "
    >
      {/* PULSE EFFECT */}
      <span
        className="
          absolute
          inset-0
          -z-10
          animate-ping
          rounded-full
          bg-[#25D366]/40
        "
      />

      {/* WHATSAPP SVG */}
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        className="
          h-8
          w-8
          fill-white
          sm:h-9
          sm:w-9
        "
      >
        <path d="M16.04 2.003A13.91 13.91 0 0 0 4.084 23.02L2 30l7.16-1.88A13.93 13.93 0 1 0 16.04 2.003Zm0 25.33a11.34 11.34 0 0 1-5.78-1.58l-.414-.247-4.25 1.116 1.134-4.14-.27-.426a11.34 11.34 0 1 1 9.58 5.277Zm6.22-8.49c-.34-.17-2.01-.99-2.32-1.104-.31-.113-.536-.17-.762.17-.226.34-.875 1.104-1.073 1.33-.198.227-.396.255-.735.085-.34-.17-1.433-.528-2.73-1.684-1.01-.9-1.692-2.01-1.89-2.35-.198-.34-.02-.523.149-.692.152-.151.34-.396.51-.594.17-.198.226-.34.34-.566.113-.227.056-.425-.029-.595-.085-.17-.762-1.84-1.044-2.52-.275-.66-.555-.57-.762-.58l-.65-.012c-.226 0-.594.085-.905.425-.311.34-1.188 1.16-1.188 2.83 0 1.67 1.217 3.283 1.386 3.51.17.226 2.394 3.656 5.8 5.127.81.35 1.442.558 1.935.714.813.258 1.553.222 2.138.135.652-.097 2.01-.82 2.293-1.613.283-.792.283-1.47.198-1.612-.085-.142-.311-.227-.65-.397Z" />
      </svg>

      {/* TOOLTIP */}
      <div
        className="
          pointer-events-none
          absolute
          right-[72px]
          hidden
          whitespace-nowrap
          rounded-lg
          bg-[#1f3223]
          px-4
          py-2.5
          text-xs
          font-medium
          text-white
          opacity-0
          shadow-lg
          transition-all
          duration-300

          group-hover:translate-x-0
          group-hover:opacity-100

          md:block
        "
      >
        Chat with us
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
