import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export const LoadingOverlay = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#F5EDDD]/80 backdrop-blur-sm flex items-center justify-center z-70"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="inline-block"
        >
          <Loader2 size={40} className="text-[#A68A64]" />
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 10, ease: "linear" }}
          className="h-1 bg-[#A68A64] mt-4 rounded-full w-48"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-[#876D49] font-medium"
        >
          Loading your experience...
        </motion.p>
      </div>
    </motion.div>
  );
};