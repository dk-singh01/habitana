
import { useWallet } from "@solana/wallet-adapter-react";

export default function Airdrop() {
    const wallet = useWallet();

    return (
        <div>
           <input type="text"></input>
           <button>Request Airdrop</button>
        </div>
    );
}