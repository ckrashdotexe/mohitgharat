"use client";

import React from "react";
import { ReelsGallery } from "./ReelsGallery";
import type { ReelItem } from "../types/content";

interface PortfolioReelsProps {
  items: ReelItem[];
}

export const PortfolioReels: React.FC<PortfolioReelsProps> = ({ items }) => {
  return <ReelsGallery items={items} />;
};

