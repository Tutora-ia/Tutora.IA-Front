'use client'

import { useState } from 'react'
import styles from './page.module.css'
import PurpleBackground from '@/app/components/purpleBackgroundAuthdUser/purpleBackground.jsx'
import PromptForm from '@/app/components/promtForm/PromptForm.js'

export default function Home() {

  const [choices, setChoices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <PurpleBackground>
      <main className={styles.main}>

        <PromptForm
          isLoading={isLoading}
          onSubmit={async (prompt) => {

            setIsLoading(true)

            const response = await fetch("/chat_aurora/api/chat_api", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                prompt: prompt
              }),
            });


            setIsLoading(false)
            const result = await response.json();
            setChoices(result.choices)
          }}


        />


        {choices.map(choice => {
          return (
            <p key={choice.index}>{choice.message.content}</p>
          )
        })}

      </main>
    </PurpleBackground>
  )
}
