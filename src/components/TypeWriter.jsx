import { motion } from "framer-motion";

const LETTER_DELAY = 0.04;
const BOX_FADE_DURATION = 0.125;

const Typewriter = ({ text, delay = 0, className = "", start = false }) => {
  return (
    <p className={`${className}`}>
      {text.split("").map((char, i) => {
        const displayChar = char === " " ? "\u00A0" : char;

        return (
          <span key={i} className="relative inline-block">
            {/* Character fade-in */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: start ? 1 : 0 }}
              transition={{
                delay: delay + i * LETTER_DELAY,
                duration: 0,
              }}
            >
              {displayChar}
            </motion.span>

            {/* Wipe effect */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: start ? [0, 1, 0] : 0 }}
              transition={{
                delay: delay + i * LETTER_DELAY,
                times: [0, 0.1, 1],
                duration: BOX_FADE_DURATION,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-800"
            />
          </span>
        );
      })}
    </p>
  );
};

export default Typewriter;
