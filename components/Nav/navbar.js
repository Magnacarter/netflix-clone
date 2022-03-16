import styles from './nav.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'


const Navbar = (props) => {
    const { userName } = props;
    const router = useRouter();

    const [showDropDown, setDropDown] = useState(false);

    const handleHomeClick = (e) => {
        e.preventDefault();
        router.push('/');
    }

    const handleMyListClick = (e) => {
        e.preventDefault();
        router.push('/browse/my-list');
    }

    const handleShowDropDown = (e) => {
        e.preventDefault();
        setDropDown(!showDropDown);
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <a className={styles.logoLink} href='/'>
                    <div className={styles.logoWraper}>
                        <Image
                            src='/static/netflix.svg'
                            alt='Netflix Clone Logo'
                            width='128px'
                            height='42px'
                        />
                    </div>
                </a>
                <ul className={styles.navItems}>
                    <li className={styles.navItem} onClick={handleHomeClick}>Home</li>
                    <li className={styles.navItem2} onClick={handleMyListClick}>My List</li>
                </ul>
                <nav className={styles.navContainer}>
                    <div>
                        <button onClick={handleShowDropDown} className={styles.usernameBtn}>
                            <p className={styles.username}>{userName}</p>
                            <Image
                                src='/static/expand-more.svg'
                                alt='Expand more icon'
                                width='24px'
                                height='24px'
                            />
                        </button>
                        {showDropDown && (
                            <div className={styles.navDropdown}>
                                <div>
                                    <Link href='/login'>
                                        <a className={styles.linkName}>Sign Out</a>
                                    </Link>
                                    <div className={styles.lineWrapper}></div>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;