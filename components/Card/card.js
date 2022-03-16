import { useState } from 'react'
import Image from 'next/image'
import styles from './card.module.css'
import { motion } from 'framer-motion'
import cls from 'classnames'


const Card = (props) => {
    const { imgUrl = '/static/movie-placeholder.jpg', size = 'medium', title, id } = props;
    const [imgSrc, setImgSrc] = useState(imgUrl);
    const classMap = {
        large: styles.lgItem,
        medium: styles.mdItem,
        small: styles.smItem
    }
    const handleImgError = () => {
        setImgSrc('/static/movie-placeholder.jpg');
    }
    const scale = id === 0 ? {scaleY: 1.1} : {scale: 1.1};

    return (
        <div className={styles.container}>
            <motion.div 
                className={cls( styles.imgMotionWrapper, classMap[size] )}
                whileHover={{ ...scale }}>
                <Image
                    src={imgSrc}
                    alt={`${title} movie title`}
                    layout='fill'
                    className={styles.cardImg}
                    onError={handleImgError}
                />
            </motion.div>
        </div>
    )
}

export default Card;