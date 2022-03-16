import styles from './section.module.css'
import Card from '../Card/card'

const SectionCards = (props) => {
    const { title, videos } = props;

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.cardWrapper}>
                {videos.map((video, idx) => {
                    return (

                        <Card
                            id={idx}
                            imgUrl={video.imgUrl}
                            size={video.size}
                            title={video.title}
                        />

                    )
                })}
            </div>
        </section>
    )
}

export default SectionCards;