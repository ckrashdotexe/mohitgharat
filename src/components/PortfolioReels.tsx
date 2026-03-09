"use client";

import React from "react";
import { motion } from "framer-motion";
import { ReelsGallery } from "./ReelsGallery";
import type { ReelItem } from "../types/content";

interface PortfolioReelsProps {
  items: ReelItem[];
}

export const PortfolioReels: React.FC<PortfolioReelsProps> = ({ items }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <ReelsGallery items={items} />
    </motion.div>
  );
};