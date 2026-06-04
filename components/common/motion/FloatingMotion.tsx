import { motion, HTMLMotionProps } from "framer-motion";

export default function FloatingMotion({
  children,
  ...props
}: Omit<HTMLMotionProps<"div">, "ref">) {
  return (
    <motion.div
      {...props}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
