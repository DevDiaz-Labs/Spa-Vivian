import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
    return (
        <motion.a
            href="https://wa.me/525514753188"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[100] flex items-center justify-center group"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
            whileHover={{ scale: 1.05 }}
        >
            <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B49327] rounded-full shadow-2xl transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] border border-white/20">

                {/* Text */}
                <span className="font-sans text-white text-xs font-bold uppercase tracking-[0.2em] pt-0.5">
                    Reservar Ahora
                </span>

                {/* WhatsApp Icon */}
                <div className="w-5 h-5 flex items-center justify-center">
                    <svg
                        viewBox="0 0 24 24"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                    >
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112-.149.224-.579.73-.709.88-.131.149-.261.168-.486.056-.224-.112-.953-.351-1.815-1.12-.673-.6-1.125-1.34-1.258-1.565-.133-.224-.014-.346.098-.458.101-.1.224-.261.336-.393.112-.131.149-.224.224-.374.075-.149.037-.28-.019-.393-.056-.113-.504-1.214-.69-1.663-.181-.435-.366-.377-.504-.383-.13-.006-.28-.006-.429-.006-.15 0-.393.056-.6.28-.206.225-.785.767-.785 1.871 0 1.104.804 2.17.916 2.32.112.15 1.582 2.415 3.832 3.387 1.336.577 1.859.619 2.536.52.748-.109 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.206-.149-.43-.262" />
                    </svg>
                </div>
            </div>
        </motion.a>
    );
};

export default WhatsAppButton;
