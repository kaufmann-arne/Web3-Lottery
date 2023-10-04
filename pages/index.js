import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import LotteryEntrance from "../components/LotteryEntrance";
import { useMoralis } from "react-moralis";

const supportedChains = ["31337", "11155111"]

export default function Home() {
  const { isWeb3Enabled, chainId } = useMoralis();

  return (
    <div className="bg-[url('../bg.jpg')] w-screen h-screen items-center">
    <div className={styles.container}>
    <div>
      <Head>
        <title>Web3 Lottery</title>
        <meta name="description" content="Web3 Lottery by AK" />
        <link rel="icon" href="../lottery.png" />
      </Head>
      <Header />
      {isWeb3Enabled ? (
        <div>
          {supportedChains.includes(parseInt(chainId).toString()) ? (
            <div >
              <LotteryEntrance/>
            </div>
          ) : (
          <div className={styles.transparentelement3}>
          <div className={styles.transparentelement2}>
            <div className="font-bold text-l py-4 px-4">{`Please switch to a supported chainId. The supported Chain Ids are: ${supportedChains}`}</div>
          </div>
          </div>
          )}
        </div>
      ) : (
      <div className={styles.transparentelement3}>
      <div className={styles.transparentelement2}>
        <div className="font-bold text-l py-4 px-4">Please connect to a Wallet</div>
      </div>
      </div>
      )}
    </div>
    </div>
    </div>
  );
}
