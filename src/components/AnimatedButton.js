import { motion } from 'framer-motion'

export const AnimatedBtn = ({label, callback}) => {

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={callback}
        >
            {label}
        </motion.button>
    )
}