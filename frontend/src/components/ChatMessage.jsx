import React from 'react';

const ChatMessage = ({ message, isUser }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 animate-fade-in-up`}>
      <div className={`flex gap-3 max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        {/* Avatar */}
        <div className={`flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center text-white font-semibold shadow-lg transform hover:scale-110 transition-transform duration-200 ${
          isUser
            ? 'bg-gradient-to-br from-emerald-400 to-cyan-500'
            : 'bg-gradient-to-br from-purple-500 to-pink-500'
        }`}>
          {isUser ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
            </svg>
          )}
        </div>

        {/* Message Content */}
        <div className={`rounded-3xl px-5 py-4 shadow-xl transform hover:scale-[1.02] transition-all duration-200 ${
          isUser
            ? 'bg-gradient-to-br from-emerald-500 to-cyan-600 text-white rounded-tr-md border border-emerald-400/30'
            : 'backdrop-blur-md bg-white/90 text-gray-800 rounded-tl-md border border-white/50'
        }`}>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
          <span className={`text-xs mt-2 block font-medium ${isUser ? 'text-emerald-100' : 'text-gray-600'}`}>
            {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
