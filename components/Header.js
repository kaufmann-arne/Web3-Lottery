import { ConnectButton } from "web3uikit"
import styles from "../styles/Home.module.css";

export default function Header() {
    return (
        <nav>
            <div className="absolute top-6 right-6">
                <ConnectButton moralisAuth={false}/>
            </div> 
            <div className={styles.transparentelement1}>
                <div className={styles.transparentelement}>
                <h1 className="py-4 font-bold text-3xl h-60"> Web3 Lottery by <a href="http://www.arnekaufmann.com/" className="text-sky-500">AK</a></h1>
                </div>
            </div> 
        </nav>
        
    )
}