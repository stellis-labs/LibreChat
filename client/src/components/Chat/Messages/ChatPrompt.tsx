import React, { memo, useCallback } from 'react'
import { useSubmitMessage } from '~/hooks';

type ChatPromptPropsType = {
    prompt: string;
}

const ChatPrompt = ({ prompt }: ChatPromptPropsType) => {

    const { submitPrompt } = useSubmitMessage();

    const handleSendMessage = useCallback(() => { 
        submitPrompt(prompt);
    }, []);
    
  return (
      <div className='w-40 h-20 rounded-xl border dark:border-gray-600 p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 text-sm line-clamp-3 text-gray-400 font-light transition ease-in-out delay-50' onClick={handleSendMessage}>
          {prompt}
      </div>
  )
}

export default memo(ChatPrompt);