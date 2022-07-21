import { PrismicRichText } from "@prismicio/react";
import { AnimatePresence, motion } from "framer-motion";

interface WorkProps {
    selectedTab: any
}


const WorkSlide = ({ selectedTab }: WorkProps): JSX.Element => {

    const { header, summary, uid } = selectedTab

    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                key={selectedTab ? uid : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-4 text-left"
            >
                <div className="flex flex-col gap-2 text-custom-white">
                    <PrismicRichText
                        field={header}
                    />
                </div>
                <PrismicRichText
                    field={summary}
                    components={{
                        list: ({ children }) => <ul className='flex flex-col gap-4'>{children}</ul>,
                        listItem: ({ children }) =>
                            <li className='flex flex-row items-center gap-2'>
                                <svg className="grow-0 shrink-0 basis-8" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.66699 11.3335L6.66699 7.3335L2.66699 3.3335" stroke="#2CFF9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 12.6665H13.3333" stroke="#2CFF9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>{children}
                            </li>,
                    }}
                />
            </motion.div>
        </AnimatePresence>
    );
};

export default WorkSlide;