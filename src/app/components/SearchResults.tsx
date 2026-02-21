"use client"
import React, { useEffect } from "react";
import { motion } from 'framer-motion';
import { Bookmark } from 'lucide-react';
import Button from "./Button"
import Image from "next/image";
import { Job } from "@/app/types/job";
import { FcCancel } from "react-icons/fc";
export default function SearchResults({ jobs, onClose }: { jobs: Job[]; onClose: () => void }) {
  const modalRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const modal = modalRef.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;

    const focusableSelector = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
    const getFocusable = () => (modal ? Array.from(modal.querySelectorAll<HTMLElement>(focusableSelector)).filter(el => !el.hasAttribute('disabled')) : []);

    // Focus first focusable element or modal container
    const focusable = getFocusable();
    if (focusable.length) focusable[0].focus();
    else modal?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();

      if (e.key === 'Tab') {
        const nodes = getFocusable();
        if (nodes.length === 0) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('keydown', handleKey);
      previouslyFocused?.focus();
    };
  }, [onClose]);
  
    return (
        <>
            <span onClick={onClose} aria-hidden="true" className="z-99 SearchResultmodalBackground fixed top-0 left-0 right-0 bottom-0 "></span>

            <div ref={modalRef} role="dialog" aria-modal="true" aria-labelledby="search-results-title" tabIndex={-1} className=" successPopup z-index-999 bg-white p-6 rounded-lg  shadow-lg w-11/12 md:w-3/5 lg:w-2/5 z-100 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3/4 overflow-y-scroll overflow-scrollbar-styles searchResultPopup">
                <div className="flex justify-end">
                  <button aria-label="Close" onClick={() => { onClose(); console.log('cancel modal clicked');}} className=" place-self-end cursor-pointer rounded hover:bg-gray-200 hover:color-white">
                    <FcCancel />
                  </button>
                </div>

                <h2 id="search-results-title" className="sr-only">Search results</h2>

                <div className="space-y-4">
                                            {jobs.map((job) => (
                                                <motion.div
                                                key={job.id}
                                                initial={{ opacity: 0, y: 8 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, amount: 0.2 }}
                                                whileHover={{ y: -6, scale: 1.01 }}
                                                transition={{ duration: 0.35 }}
                                                className="bg-white rounded-xl p-5 flex flex-col md:flex-row md:items-center md:justify-between shadow-sm hover:shadow-md transition"
                                                >
                                                {/* Left */}
                                                <div className="flex items-start gap-4">
                                                    <Image src={job.logo} width={40} height={2} alt="companylogo" className="text-2xl"/>
                                                    <div>
                                                    <h3 className="font-semibold text-gray-900">
                                                        {job.title}
                                                    </h3>
                                                    <p className="text-sm text-gray-500">
                                                        {job.company}
                                                    </p>
                            
                                                    <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-500">
                                                        <span>{job.category}</span>
                                                        <span>• {job.type}</span>
                                                        <span>• {job.salary}</span>
                                                        <span>• {job.location}</span>
                                                    </div>
                                                    </div>
                                                </div>
                            
                                                {/* Right */}
                                                <div className="flex items-center gap-4 mt-4 md:mt-0">
                                                    <motion.button whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.08 }} className="text-gray-400 hover:text-gray-600">
                                                      <Bookmark size={18} />
                                                    </motion.button>
                            
                                                    <Button 
                                                        btnLabel="job details "
                                                        variant="secondary"
                                                        className="hover:rounded-tl-2xl hover:rounded-br-2xl cursor-pointer"
                                                    />
                                                </div>
                                                </motion.div>
                                            ))}
                                            </div>  
                        </div> 

                     </>
                )
            }