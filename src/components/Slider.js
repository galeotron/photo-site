import React, { useState } from "react";
import { images } from "../images/images";
import {MdArrowBackIos, MdArrowForwardIos} from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";

export default function Slider() {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const ImgStyle = {
    width: "100%",
    height: "750px",
    maxHeight: "100%",
    maxWidth: "100%",
    objectFit: "contain"

  }

  const LeftArrow = {
    position: "absolute",
    top: "325px",
    left: "300px",
    fontSize: "60px"
  }
  const RightArrow = {
    position: "absolute",
    top: "325px",
    right: "300px",
    fontSize: "60px"
  }


  return (
    <div>
      <>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img style={ImgStyle}
            key={page}
            src={images[imageIndex]}
            custom={direction}
            initial={{ opacity: 1, x: 1000 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 300 },
              opacity: { duration: 1 },
            }}
            // drag={"x"}
            // dragConstraints={{ left: 0, right: 0 }}
            // dragElastic={1}
          />
        </AnimatePresence>
        <motion.div
        whileHover={{scale: 1.2,
        transition: {duration: 0.5}
        }}
        whileTap={{scale: 0.9}}
        onClick={() => paginate(1)}
        >
          <MdArrowBackIos style={LeftArrow}/>
        </motion.div>
        <motion.div
        // whileHover={{scale: 1.2,
        // transition: {duration: 0.5}
        // }}
        // whileTap={{scale: 0.9}}
        onClick={() => paginate(-1)}
        >
        <MdArrowForwardIos style={RightArrow} />
        </motion.div>
      </>
    </div>
  );
}
