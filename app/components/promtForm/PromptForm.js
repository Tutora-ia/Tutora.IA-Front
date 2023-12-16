import { useState } from "react";
import styles from './PromptForm.module.css'
import { set } from "react-hook-form";
export default function PromptForm({ onSubmit, isLoading }) {

    const [prompt, setPrompt] = useState("")


    return (
        <form className={styles.form}
            onSubmit={(e) => {

                e.preventDefault();

                if (prompt === ""){
                    return;
                }

                onSubmit(prompt)
                setPrompt("");

            }}>
            <label>CHAT COM A AURORA</label>
            <input className={styles.input} placeholder="Digite aqui sua dúvida, Pupilo." type="text" value={prompt} onChange={e => {
                setPrompt(e.target.value)
            }} />
            <input type="submit" disabled={isLoading}/>

        </form>
    )
}