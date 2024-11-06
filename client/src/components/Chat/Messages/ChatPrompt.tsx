import React, { memo, useCallback } from "react"
import { useSubmitMessage } from "~/hooks"

type ChatPromptPropsType = {
  prompt: string
}

const ChatPrompt = ({ prompt }: ChatPromptPropsType) => {
  const { submitPrompt } = useSubmitMessage()

  const handleSendMessage = useCallback(() => {
    submitPrompt(prompt)
  }, [])

  return (
    <div
      className="delay-50 line-clamp-3 h-20 w-40 cursor-pointer rounded-xl border p-2.5 text-left text-sm font-light text-gray-400 transition ease-in-out hover:border-gray-300 hover:bg-gray-100 hover:text-gray-500 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-400"
      onClick={handleSendMessage}
    >
      {prompt}
    </div>
  )
}

export default memo(ChatPrompt)
