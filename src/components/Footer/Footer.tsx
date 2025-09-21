"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-red-100 rounded-[48px] mx-[48px] mb-20 overflow-hidden">
      {/* Main Footer Content */}
      <div className="px-[48px] xl:py-[48px] pt-[48px]">
        <div className="max-w-6xl mx-auto">
          {/* Logo , Description , Button and Social Media Section */}
          <div className="flex flex-col xl:flex-row  items-start justify-between gap-8 mb-12">
            {/* Logo and Description */}
            <div className="flex flex-col gap-[28px] items-start  text-left">
              {/* Logo with orange gradient background */}

              <div className="flex items-center gap-4">
                <Image
                  src="/logo-left.avif"
                  width={50}
                  height={50}
                  alt="logo"
                />
                {/* Company Name */}
                <Image src="/skale.avif" width={127} height={40} alt="logo" />
              </div>

              {/* Description */}
              <p className="text-[#00000080] text-lg lg:text-xl lg:leading-[30px]  xl:max-w-md max-w-[290px] leading-relaxed">
                Scale your business with ease. Over 60+ startups trusted us and
                increased their revenue!
              </p>
              {/* CTA Button */}
              <div className="flex-shrink-0">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative bg-gradient-to-b from-orange-400 to-orange-500 px-8 py-4 rounded-2xl shadow-xl shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-300"
                >
                  <div className="absolute inset-[2px] bg-orange-500 rounded-xl"></div>
                  <div className="relative bg-gradient-to-b from-orange-400 to-orange-500 px-6 py-3 rounded-xl">
                    <span className="text-white font-semibold text-xl">
                      Book a 30-min call
                    </span>
                  </div>
                </motion.button>
              </div>
            </div>
            {/* Social Media Section */}
            <div className="flex flex-col items-start">
              <h3 className="text-[22px] leading-[122%] font-semibold mb-6 text-black">
                Social Media
              </h3>
              <div className="flex gap-5 flex-wrap justify-center lg:justify-start">
                {/* Twitter/X */}
                <motion.a
                  href="https://twitter.com/MarkKnd"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  className="w-[19px] h-[19px] bg-gray-100 rounded-lg flex items-center justify-center opacity-70 hover:bg-gray-200 transition-all duration-200"
                >
                  <svg width="20" height="19" viewBox="0 0 20 19" fill="none">
                    <path
                      d="M 15.751 0.808 L 18.817 0.808 L 12.117 8.466 L 20 18.885 L 13.828 18.885 L 8.995 12.565 L 3.463 18.885 L 0.395 18.885 L 7.562 10.694 L 0 0.809 L 6.328 0.809 L 10.697 6.585 Z M 14.675 17.05 L 16.374 17.05 L 5.405 2.547 L 3.582 2.547 Z"
                      fill="currentColor"
                    />
                  </svg>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/markknd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  className="w-[19px] h-[19px] bg-gray-100 rounded-lg flex items-center justify-center opacity-70 hover:bg-gray-200 transition-all duration-200"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M 17.778 0 C 18.367 0 18.932 0.234 19.349 0.651 C 19.766 1.068 20 1.633 20 2.222 L 20 17.778 C 20 18.367 19.766 18.932 19.349 19.349 C 18.932 19.766 18.367 20 17.778 20 L 2.222 20 C 1.633 20 1.068 19.766 0.651 19.349 C 0.234 18.932 0 18.367 0 17.778 L 0 2.222 C 0 1.633 0.234 1.068 0.651 0.651 C 1.068 0.234 1.633 0 2.222 0 Z M 17.222 17.222 L 17.222 11.333 C 17.222 10.373 16.841 9.451 16.161 8.772 C 15.482 8.093 14.561 7.711 13.6 7.711 C 12.656 7.711 11.556 8.289 11.022 9.156 L 11.022 7.922 L 7.922 7.922 L 7.922 17.222 L 11.022 17.222 L 11.022 11.744 C 11.022 10.889 11.711 10.189 12.567 10.189 C 12.979 10.189 13.375 10.353 13.667 10.644 C 13.958 10.936 14.122 11.332 14.122 11.744 L 14.122 17.222 Z M 4.311 6.178 C 4.806 6.178 5.281 5.981 5.631 5.631 C 5.981 5.281 6.178 4.806 6.178 4.311 C 6.178 3.278 5.344 2.433 4.311 2.433 C 3.813 2.433 3.335 2.631 2.983 2.983 C 2.631 3.335 2.433 3.813 2.433 4.311 C 2.433 5.344 3.278 6.178 4.311 6.178 Z M 5.856 17.222 L 5.856 7.922 L 2.778 7.922 L 2.778 17.222 Z"
                      fill="currentColor"
                    />
                  </svg>
                </motion.a>

                {/* Instagram */}
                <motion.a
                  href="https://www.instagram.com/markvassilevskiy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  className="w-[19px] h-[19px] bg-gray-100 rounded-lg flex items-center justify-center opacity-70 hover:bg-gray-200 transition-all duration-200"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M 9.859 6.573 C 8.048 6.573 6.571 8.051 6.571 9.862 C 6.571 11.673 8.048 13.15 9.859 13.15 C 11.67 13.15 13.148 11.673 13.148 9.862 C 13.148 8.051 11.67 6.573 9.859 6.573 Z M 19.723 9.862 C 19.723 8.5 19.735 7.15 19.659 5.791 C 19.582 4.212 19.222 2.811 18.067 1.656 C 16.91 0.499 15.511 0.141 13.933 0.065 C 12.571 -0.012 11.221 0.001 9.862 0.001 C 8.5 0.001 7.15 -0.012 5.791 0.065 C 4.212 0.141 2.811 0.502 1.656 1.656 C 0.499 2.813 0.141 4.212 0.065 5.791 C -0.012 7.153 0.001 8.502 0.001 9.862 C 0.001 11.221 -0.012 12.573 0.065 13.933 C 0.141 15.511 0.502 16.913 1.656 18.067 C 2.813 19.224 4.212 19.582 5.791 19.659 C 7.153 19.735 8.502 19.723 9.862 19.723 C 11.224 19.723 12.573 19.735 13.933 19.659 C 15.511 19.582 16.913 19.222 18.067 18.067 C 19.224 16.91 19.582 15.511 19.659 13.933 C 19.738 12.573 19.723 11.224 19.723 9.862 Z M 9.859 14.922 C 7.059 14.922 4.799 12.662 4.799 9.862 C 4.799 7.062 7.059 4.802 9.859 4.802 C 12.659 4.802 14.919 7.062 14.919 9.862 C 14.919 12.662 12.659 14.922 9.859 14.922 Z M 15.127 5.776 C 14.473 5.776 13.945 5.248 13.945 4.594 C 13.945 3.941 14.473 3.413 15.127 3.413 C 15.78 3.413 16.308 3.941 16.308 4.594 C 16.309 4.75 16.278 4.903 16.219 5.047 C 16.159 5.19 16.072 5.321 15.963 5.431 C 15.853 5.54 15.723 5.627 15.579 5.687 C 15.436 5.746 15.282 5.776 15.127 5.776 Z"
                      fill="currentColor"
                    />
                  </svg>
                </motion.a>

                {/* Telegram */}
                <motion.a
                  href="https://t.me/markknd"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  className="w-[19px] h-[19px] bg-gray-100 rounded-lg flex items-center justify-center opacity-70 hover:bg-gray-200 transition-all duration-200"
                >
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path
                      d="M 9.5 0 C 4.256 0 0 4.256 0 9.5 C 0 14.744 4.256 19 9.5 19 C 14.744 19 19 14.744 19 9.5 C 19 4.256 14.744 0 9.5 0 Z M 13.908 6.46 C 13.765 7.961 13.148 11.609 12.834 13.29 C 12.701 14.003 12.435 14.24 12.188 14.269 C 11.637 14.316 11.219 13.908 10.687 13.556 C 9.851 13.005 9.376 12.663 8.569 12.131 C 7.628 11.514 8.236 11.172 8.778 10.621 C 8.92 10.478 11.352 8.265 11.4 8.065 C 11.407 8.035 11.406 8.004 11.397 7.974 C 11.389 7.944 11.374 7.917 11.352 7.894 C 11.295 7.847 11.219 7.866 11.153 7.875 C 11.067 7.894 9.737 8.778 7.144 10.526 C 6.764 10.782 6.422 10.915 6.118 10.906 C 5.776 10.896 5.13 10.716 4.645 10.554 C 4.047 10.364 3.581 10.26 3.619 9.927 C 3.638 9.756 3.876 9.585 4.322 9.405 C 7.096 8.198 8.939 7.4 9.861 7.02 C 12.502 5.918 13.043 5.728 13.404 5.728 C 13.48 5.728 13.661 5.747 13.775 5.842 C 13.87 5.918 13.898 6.023 13.908 6.099 C 13.898 6.156 13.917 6.327 13.908 6.46 Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  href="https://wa.me/77778451175"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  className="w-[19px] h-[19px] bg-gray-100 rounded-lg flex items-center justify-center opacity-70 hover:bg-gray-200 transition-all duration-200"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M17.0508 2.9375C15.1875 1.0625 12.6875 0 10.0234 0C4.57812 0 0.15625 4.42188 0.15625 9.86719C0.15625 11.6016 0.609375 13.2969 1.46875 14.7969L0.0390625 20L5.35938 18.6094C6.8125 19.375 8.40625 19.7812 10.0234 19.7812C15.4688 19.7812 19.8906 15.3594 19.8906 9.91406C19.8906 7.25 18.8281 4.75 17.0508 2.9375ZM10.0234 18.125C8.59375 18.125 7.1875 17.7422 5.96875 17.0312L5.6875 16.875L2.46875 17.6406L3.25 14.4844L3.07812 14.1875C2.29688 12.9219 1.875 11.4219 1.875 9.86719C1.875 5.35938 5.51562 1.71875 10.0234 1.71875C12.2188 1.71875 14.2969 2.5625 15.8594 4.14844C17.4219 5.73438 18.2891 7.8125 18.2891 9.91406C18.2891 14.4219 14.5312 18.125 10.0234 18.125ZM14.5156 11.8438C14.2656 11.7188 13.0469 11.125 12.8281 11.0312C12.6094 10.9531 12.4531 10.9062 12.2969 11.1562C12.1406 11.4062 11.6875 11.9531 11.5625 12.1094C11.4375 12.2656 11.3125 12.2812 11.0625 12.1562C10.8125 12.0312 9.98438 11.7656 8.98438 10.875C8.20312 10.1875 7.67188 9.34375 7.54688 9.09375C7.42188 8.84375 7.53125 8.71875 7.65625 8.59375C7.76562 8.48438 7.90625 8.3125 8.03125 8.1875C8.15625 8.0625 8.20312 7.96875 8.28125 7.8125C8.35938 7.65625 8.32812 7.53125 8.26562 7.40625C8.20312 7.28125 7.67188 6.0625 7.48438 5.5625C7.29688 5.07812 7.10938 5.14062 6.96875 5.14062H6.53125C6.375 5.14062 6.125 5.20312 5.90625 5.45312C5.6875 5.70312 5.04688 6.29688 5.04688 7.51562C5.04688 8.73438 5.9375 9.90625 6.0625 10.0625C6.1875 10.2188 7.67188 12.5469 10 13.4844C10.7031 13.7656 11.25 13.9375 11.6719 14.0625C12.375 14.2812 13.0156 14.25 13.5312 14.1875C14.1094 14.1094 15.0938 13.5156 15.2812 12.875C15.4688 12.2344 15.4688 11.6875 15.4062 11.5938C15.3438 11.5 15.1875 11.4375 14.9375 11.3125"
                      fill="currentColor"
                    />
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Ticker */}
      <div className="relative overflow-hidden xl:h-80 h-40 flex items-end">
        <div
          className="absolute inset-0"
          style={{
            maskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 2.5%, rgb(0, 0, 0) 97.5%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          <motion.div
            className="flex gap-24 h-full items-end"
            animate={{ x: [0, -window.innerWidth] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="flex-shrink-0">
                <h2 className="text-[120px] xl:text-[350px]  font-bold text-black/5 whitespace-nowrap">
                  skale.solutions
                </h2>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
