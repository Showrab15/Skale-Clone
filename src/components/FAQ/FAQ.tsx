/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// import { AnimatePresence, motion, Variants } from "framer-motion";
// import { Plus } from "lucide-react";
// import React, { useState } from "react";

// interface FAQItem {
//   id: number;
//   question: string;
//   answer: string;
// }

// const faqData: FAQItem[] = [
//   {
//     id: 1,
//     question: "How long does it take to complete a project?",
//     answer:
//       "Typically, a landing takes 1-2 weeks, and Success as a Service 3-4 weeks, depending on the complexity and scope. We'll provide a detailed timeline during the initial consultation.",
//   },
//   {
//     id: 2,
//     question: "What is included in the design process?",
//     answer:
//       "Our process covers everything from wireframes to final design, including copy assistance, mobile optimization, and unlimited revisions until you're satisfied.",
//   },
//   {
//     id: 3,
//     question: "Do you offer post-launch support?",
//     answer: "Yes, we provide lifetime free support after launch",
//   },
//   {
//     id: 4,
//     question: "Can I customize the package?",
//     answer:
//       "Absolutely! We tailor our services to your needs. Let us know what you're looking for, and we'll create a plan that fits your business.",
//   },
//   {
//     id: 5,
//     question: "What payment methods do you accept?",
//     answer:
//       "We accept everything. Credit cards, bank transfers, PayPal, and Crypto. Payment plans can also be arranged for larger projects.",
//   },
// ];

// const FAQSection: React.FC = () => {
//   const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

//   const toggleItem = (id: number) => {
//     const newExpandedItems = new Set(expandedItems);
//     if (newExpandedItems.has(id)) {
//       newExpandedItems.delete(id);
//     } else {
//       newExpandedItems.add(id);
//     }
//     setExpandedItems(newExpandedItems);
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut", // this works if typed correctly
//       },
//     },
//   };

//   const contentVariants = {
//     collapsed: {
//       height: 0,
//       opacity: 0,
//       transition: {
//         height: {
//           duration: 0.3,
//           ease: "easeInOut",
//         },
//         opacity: {
//           duration: 0.2,
//           ease: "easeInOut",
//         },
//       },
//     },
//     expanded: {
//       height: "auto",
//       opacity: 1,
//       transition: {
//         height: {
//           duration: 0.3,
//           ease: "easeInOut",
//         },
//         opacity: {
//           duration: 0.3,
//           delay: 0.1,
//           ease: "easeInOut",
//         },
//       },
//     },
//   };

//   const iconVariants = {
//     collapsed: {
//       rotate: 0,
//       transition: { duration: 0.3, ease: "easeInOut" },
//     },
//     expanded: {
//       rotate: 45,
//       transition: { duration: 0.3, ease: "easeInOut" },
//     },
//   };

//   return (
//     <section className="font-inter w-full px-[24px] sm:px-[48px] py-[20px] lg:py-[56px] lg:px-[64px] mx-auto max-w-[1200px] ">
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         variants={containerVariants}
//         className="grid xl:grid-cols-2 gap-[12px] lg:gap-[56px] items-start"
//       >
//         {/* Left side - Header */}
//         <motion.div variants={itemVariants} className="">
//           <div className="space-y-8">
//             <h2 className=" text-4xl sm:text-[56px] 2xl:text-[80px] leading-[100%] font-extrabold ">
//               Frequently <span className="text-black/50">asked</span>
//               <br />
//               questions
//             </h2>
//             <p className="text-[20px] leading-[28px]  text-[#000000cc] ">
//               If you {`don't`} find your answer here, feel free to{" "}
//               <a
//                 href="https://t.me/markknd"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className=" text-[#ff5f14]/70  font-normal hover:underline hover:underline-offset-2 decoration-2  transition-all duration-200"
//               >
//                 reach out!
//               </a>
//             </p>
//           </div>
//         </motion.div>

//         {/* Right side - FAQ Items */}
//         <motion.div variants={itemVariants} className="space-y-4">
//           {faqData.map((item) => (
//             <motion.div key={item.id} className="group" variants={itemVariants}>
//               <div
//                 className="w-full p-[24px] framer-card
//                border border-[#ffffff] "
//               >
//                 <div className="flex items-center gap-4">
//                   <motion.div
//                     aria-expanded={expandedItems.has(item.id)}
//                     onClick={() => toggleItem(item.id)}
//                     variants={iconVariants}
//                     animate={
//                       expandedItems.has(item.id) ? "expanded" : "collapsed"
//                     }
//                     className="flex-shrink-0 w-[22px] h-[22px] text-orange-500"
//                   >
//                     <Plus className="w-full h-full" strokeWidth={2.5} />
//                   </motion.div>

//                   <h3 className=" text-lg  font-medium text-[#000] pr -4 leading-tight">
//                     {item.question}
//                   </h3>
//                 </div>

//                 <AnimatePresence initial={false}>
//                   {expandedItems.has(item.id) && (
//                     <motion.div
//                       key={`content-${item.id}`}
//                       initial="collapsed"
//                       animate="expanded"
//                       exit="collapsed"
//                       variants={contentVariants}
//                       className="overflow-hidden"
//                     >
//                       <div className="px-6 sm:px-8 pb-6 sm:pb-8">
//                         <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
//                           {item.answer}
//                         </p>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default FAQSection;
"use client";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { Plus } from "lucide-react";
import React, { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How long does it take to complete a project?",
    answer:
      "Typically, a landing takes 1-2 weeks, and Success as a Service 3-4 weeks, depending on the complexity and scope. We'll provide a detailed timeline during the initial consultation.",
  },
  {
    id: 2,
    question: "What is included in the design process?",
    answer:
      "Our process covers everything from wireframes to final design, including copy assistance, mobile optimization, and unlimited revisions until you're satisfied.",
  },
  {
    id: 3,
    question: "Do you offer post-launch support?",
    answer: "Yes, we provide lifetime free support after launch",
  },
  {
    id: 4,
    question: "Can I customize the package?",
    answer:
      "Absolutely! We tailor our services to your needs. Let us know what you're looking for, and we'll create a plan that fits your business.",
  },
  {
    id: 5,
    question: "What payment methods do you accept?",
    answer:
      "We accept everything. Credit cards, bank transfers, PayPal, and Crypto. Payment plans can also be arranged for larger projects.",
  },
];

const FAQSection: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleItem = (id: number) => {
    const newExpandedItems = new Set(expandedItems);
    if (newExpandedItems.has(id)) {
      newExpandedItems.delete(id);
    } else {
      newExpandedItems.add(id);
    }
    setExpandedItems(newExpandedItems);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as any },
    },
  };

  const contentVariants: Variants = {
    collapsed: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.3, ease: "easeInOut" as any },
        opacity: { duration: 0.2, ease: "easeInOut" as any },
      },
    },
    expanded: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.3, ease: "easeInOut" as any },
        opacity: { duration: 0.3, delay: 0.1, ease: "easeInOut" as any },
      },
    },
  };

  const iconVariants: Variants = {
    collapsed: {
      rotate: 0,
      transition: { duration: 0.3, ease: "easeInOut" as any },
    },
    expanded: {
      rotate: 45,
      transition: { duration: 0.3, ease: "easeInOut" as any },
    },
  };

  return (
    <section className="font-inter w-full px-[24px] sm:px-[48px] py-[20px] lg:py-[56px] lg:px-[64px] mx-auto max-w-[1200px]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="grid xl:grid-cols-2 gap-[12px] lg:gap-[56px] items-start"
      >
        {/* Left side - Header */}
        <motion.div variants={itemVariants}>
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-[56px] 2xl:text-[80px] leading-[100%] font-extrabold">
              Frequently <span className="text-black/50">asked</span>
              <br />
              questions
            </h2>
            <p className="text-[20px] leading-[28px] text-[#000000cc]">
              If you {`don't`} find your answer here, feel free to{" "}
              <a
                href="https://t.me/markknd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff5f14]/70 font-normal hover:underline hover:underline-offset-2 decoration-2 transition-all duration-200"
              >
                reach out!
              </a>
            </p>
          </div>
        </motion.div>

        {/* Right side - FAQ Items */}
        <motion.div variants={itemVariants} className="space-y-4">
          {faqData.map((item) => (
            <motion.div key={item.id} className="group" variants={itemVariants}>
              <div className="w-full p-[24px] framer-card border border-[#ffffff]">
                <div className="flex items-center gap-4">
                  <motion.div
                    aria-expanded={expandedItems.has(item.id)}
                    onClick={() => toggleItem(item.id)}
                    variants={iconVariants}
                    animate={
                      expandedItems.has(item.id) ? "expanded" : "collapsed"
                    }
                    className="flex-shrink-0 w-[22px] h-[22px] text-orange-500 cursor-pointer"
                  >
                    <Plus className="w-full h-full" strokeWidth={2.5} />
                  </motion.div>

                  <h3 className="text-lg font-medium text-[#000] pr-4 leading-tight">
                    {item.question}
                  </h3>
                </div>

                <AnimatePresence initial={false}>
                  {expandedItems.has(item.id) && (
                    <motion.div
                      key={`content-${item.id}`}
                      initial="collapsed"
                      animate="expanded"
                      exit="collapsed"
                      variants={contentVariants}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                        <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FAQSection;
