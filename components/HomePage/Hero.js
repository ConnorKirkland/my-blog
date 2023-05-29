import styles from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.image}>
                <Image
                    src="/images/site/connor.jpg"
                    alt="An image showing Connor"
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi, I'm Connor</h1>
            <p>I blog about web development, and other cool stuff.</p>
        </section>
    );
};

export default Hero;
