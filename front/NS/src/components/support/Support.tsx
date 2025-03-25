import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, ChevronDown, ChevronUp, Bot, User, Loader2 } from 'lucide-react';
import NavBar from '../landing/home/navBar';
import { Footer } from '../landing/benefits/footer';
import { generateAIResponse } from '../../services/chatService';

const Support = () => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState<Array<{ type: 'user' | 'ai'; content: string }>>([]);
    const [isExpanded, setIsExpanded] = useState<{ [key: string]: boolean }>({});
    const [isLoading, setIsLoading] = useState(false);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    const faqs = [
        {
            question: 'How do I track my order?',
            answer: 'You can track your order by logging into your account and visiting the "Orders" section. There you\'ll find real-time updates on your shipment.'
        },
        {
            question: 'What is your return policy?',
            answer: 'We offer a 30-day return policy for all our products. Items must be in their original condition with tags attached.'
        },
        {
            question: 'Do you offer international shipping?',
            answer: 'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location.'
        },
        {
            question: 'How can I care for my furniture?',
            answer: 'We recommend regular dusting and cleaning with appropriate wood/fabric cleaners. Avoid direct sunlight and maintain consistent room temperature.'
        }
    ];

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatHistory]);

    const toggleFAQ = (index: string) => {
        setIsExpanded(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim()) return;

        const currentMessage = message;
        setMessage('');

        const userMessage = { type: 'user' as const, content: currentMessage };
        setChatHistory(prev => [...prev, userMessage]);
        
        setIsLoading(true);
        
        try {
            const responseText = await generateAIResponse(currentMessage);
            
            const aiResponse = { 
                type: 'ai' as const, 
                content: responseText
            };
            setChatHistory(prev => [...prev, aiResponse]);
        } catch (error) {
            const errorResponse = { 
                type: 'ai' as const, 
                content: 'I apologize, but I encountered an issue processing your request. Please try again later.'
            };
            setChatHistory(prev => [...prev, errorResponse]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#FFF8E9]">
            <NavBar />
            <div className="max-w-6xl mx-auto px-4 py-8 mb-11">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-[#A68A64] mb-2 text-center"
                >
                    Customer Support
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center text-[#876D49] mb-12"
                >
                    How can we help you today?
                </motion.p>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white rounded-lg shadow-md p-6 border border-[#A68A64]/20"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <Bot className="text-[#A68A64]" />
                            <h2 className="text-2xl font-semibold text-[#A68A64]">AI Assistant</h2>
                        </div>

                        <div className="h-[400px] flex flex-col">
                            <div ref={chatContainerRef} className="flex-1 overflow-y-auto mb-4 space-y-4">
                                {chatHistory.map((msg, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`flex items-start gap-2 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}
                                    >
                                        <div className={`p-2 rounded-full ${msg.type === 'user' ? 'bg-[#A68A64]' : 'bg-[#F5EDDD]'}`}>
                                            {msg.type === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-[#A68A64]" />}
                                        </div>
                                        <div className={`max-w-[80%] p-3 rounded-lg ${msg.type === 'user' ? 'bg-[#A68A64] text-white' : 'bg-[#F5EDDD] text-[#876D49]'}`}>
                                            {msg.content}
                                        </div>
                                    </motion.div>
                                ))}
                                {chatHistory.length === 0 && (
                                    <div className="text-center text-gray-500 mt-8">
                                        <MessageSquare className="mx-auto mb-2 opacity-50" />
                                        <p>Start a conversation with our AI assistant</p>
                                    </div>
                                )}
                            </div>

                            <form onSubmit={handleSubmit} className="mt-auto">
                                <div className="flex gap-2 relative">
                                    <input
                                        type="text"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Type your message..."
                                        className="flex-1 p-3 rounded-lg border border-[#A68A64]/20 focus:outline-none focus:border-[#A68A64] transition-colors"
                                    />
                                    <button
                                        type="submit"
                                        className="p-3 bg-[#A68A64] text-white rounded-lg hover:bg-[#8a7353] transition-colors disabled:opacity-50 flex items-center justify-center"
                                        disabled={!message.trim() || isLoading}
                                    >
                                        {isLoading ? (
                                            <Loader2 size={20} className="animate-spin" />
                                        ) : (
                                            <Send size={20} />
                                        )}
                                    </button>
                                    
                                    {/* Loading indicator */}
                                    {isLoading && (
                                        <motion.div 
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="absolute -top-10 left-0 right-0 text-center text-sm text-[#876D49]">
                                            <p className="flex items-center justify-center gap-2">
                                                <Loader2 size={14} className="animate-spin" />
                                                AI is thinking...
                                            </p>
                                        </motion.div>
                                    )}
                                </div>
                            </form>
                        </div>
                    </motion.div>

                    {/* FAQ Section */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white rounded-lg shadow-md p-6 border border-[#A68A64]/20"
                    >
                        <h2 className="text-2xl font-semibold text-[#A68A64] mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div 
                                    key={index}
                                    initial={false}
                                    animate={{ backgroundColor: isExpanded[index.toString()] ? '#F5EDDD' : 'white' }}
                                    className="border border-[#A68A64]/20 rounded-lg overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggleFAQ(index.toString())}
                                        className="w-full p-4 text-left flex justify-between items-center hover:bg-[#F5EDDD] transition-colors"
                                    >
                                        <span className="font-medium text-[#876D49]">{faq.question}</span>
                                        {isExpanded[index.toString()] ? (
                                            <ChevronUp className="text-[#A68A64]" />
                                        ) : (
                                            <ChevronDown className="text-[#A68A64]" />
                                        )}
                                    </button>
                                    <AnimatePresence>
                                        {isExpanded[index.toString()] && (
                                            <motion.div
                                                initial={{ height: 0 }}
                                                animate={{ height: 'auto' }}
                                                exit={{ height: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="p-4 pt-0 text-[#876D49]">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Support;