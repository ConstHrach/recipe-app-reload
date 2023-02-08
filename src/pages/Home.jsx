import Popular from "../components/Popular";
import TopPick from "../components/VeganPicks";
import { motion } from "framer-motion";

import React from 'react'

function Home() {
  return (
    <motion.div>
        <Popular />
        <TopPick />
    </motion.div>
  )
}

export default Home;