
import { Job } from "@/app/types/job";
import Image from "next/image";
import Button from "@/app/components/Button";
import { Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from "next/navigation";

interface Props {
  job: Job;
}

export default function JobCard({ job }: Props) {
  const router = useRouter();
  return (
    <motion.div
      key={job.id}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.35 }}
      className="bg-white mb-2 rounded-xl p-5 flex flex-col md:flex-row md:items-center md:justify-between shadow-sm hover:shadow-md transition"
    >
      {/* Left */}
      <div className="flex items-start gap-4 " >
        {job.logo && (
          <Image src={job.logo} width={40} height={40} alt="companylogo" className="text-2xl" />
        )}
        <div>
          <h3 className="font-semibold text-gray-900">{job.title}</h3>
          <p className="text-sm text-gray-500">{job.company}</p>
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
          btnLabel="Job Details"
          variant="secondary"
          className="hover:rounded-tl-2xl hover:rounded-br-2xl cursor-pointer"
          onClick={() => router.push(`/jobs/${job.id}`)}
        />
      </div>
    </motion.div>
  );
}
