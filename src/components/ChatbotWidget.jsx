import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { apiUrl } from '../apiBase.js';

const INITIAL_MESSAGE = {
  role: 'assistant',
  content: "👋 Hi! I'm Max, your Blue Rhino Roofing assistant. How can I help you today? I can answer questions about our services, the insurance process, or get you set up for a free estimate!",
};

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [unread, setUnread] = useState(1);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg = { role: 'user', content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await axios.post(apiUrl('/api/chat'), {
        messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
      });
      setMessages((prev) => [...prev, { role: 'assistant', content: res.data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: "Sorry, I'm having trouble right now. Please call us at (555) 123-4567 or fill out the estimate form!" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickReplies = ['Get a free estimate', 'Storm damage help', 'Insurance process', 'How long does it take?'];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat window */}
      {open && (
        <div className="w-[360px] max-w-[calc(100vw-2rem)] h-[min(520px,calc(100dvh-8rem))] bg-white rounded-3xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header — shrink-0 keeps bar + avatar fully visible; panel height capped so top isn’t clipped by viewport */}
          <div className="shrink-0 bg-rhino-blue px-5 py-4 flex items-center gap-3 rounded-t-3xl">
            <div className="w-10 h-10 bg-rhino-yellow rounded-full flex items-center justify-center text-rhino-blue font-display text-lg font-bold">M</div>
            <div className="flex-1">
              <div className="font-heading font-bold text-white text-sm">Max — Blue Rhino AI</div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-gray-300 text-xs font-body">Online — replies instantly</span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-gray-300 hover:text-white text-xl leading-none">✕</button>
          </div>

          {/* Messages — min-h-0 lets flex child scroll instead of clipping against header */}
          <div className="flex-1 min-h-0 overflow-y-auto px-4 pb-4 pt-3 chat-scroll flex flex-col gap-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 bg-rhino-blue rounded-full flex items-center justify-center text-rhino-yellow text-xs font-bold mr-2 mt-1 shrink-0">M</div>
                )}
                <div className={msg.role === 'user' ? 'chat-message-user' : 'chat-message-bot'}>
                  <p className="text-sm font-body leading-relaxed">{msg.content}</p>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="w-7 h-7 bg-rhino-blue rounded-full flex items-center justify-center text-rhino-yellow text-xs font-bold mr-2 mt-1 shrink-0">M</div>
                <div className="chat-message-bot">
                  <div className="flex gap-1 items-center h-5">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick replies */}
          {messages.length <= 1 && (
            <div className="shrink-0 px-4 pb-2 flex flex-wrap gap-2">
              {quickReplies.map((q) => (
                <button
                  key={q}
                  onClick={() => { setInput(q); setTimeout(sendMessage, 50); }}
                  className="bg-rhino-gray border border-gray-200 text-rhino-blue text-xs font-heading font-semibold px-3 py-1.5 rounded-full hover:bg-rhino-blue hover:text-white transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="shrink-0 px-4 pb-4 pt-2 border-t border-gray-100 flex gap-2 rounded-b-3xl bg-white">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type a message..."
              className="flex-1 bg-gray-100 rounded-xl px-4 py-2.5 text-sm font-body focus:outline-none focus:ring-2 focus:ring-rhino-blue-mid"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              className="w-10 h-10 bg-rhino-blue rounded-xl flex items-center justify-center text-white hover:bg-rhino-blue-mid transition-colors disabled:opacity-40"
            >
              ➤
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-16 h-16 bg-rhino-blue rounded-full shadow-2xl flex items-center justify-center text-2xl hover:bg-rhino-blue-mid transition-all duration-200 hover:scale-110 relative"
        aria-label="Open chat"
      >
        {open ? '✕' : '💬'}
        {!open && unread > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-rhino-yellow text-rhino-blue text-xs font-bold rounded-full flex items-center justify-center">
            {unread}
          </span>
        )}
      </button>
    </div>
  );
}
