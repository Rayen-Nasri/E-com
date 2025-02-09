import { useEffect, useRef } from "react";
import { FooterChilds, HeaderChilds } from "../childs";

export const EmailVerification = () => {
    const inputRefs = useRef<HTMLInputElement[]>([]);

    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).backgroundColor;
        document.body.style.backgroundColor = "#FFFCF8";
        return () => {
            document.body.style.backgroundColor = originalStyle;
        };
    }, []);


    //!Move to next input
    const handleInput = (index: number, e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        if (value.length === 1 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    
    //!Move to previous input on backspace
    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && index > 0 && !e.currentTarget.value) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <section className="space-y-3 p-6 grid place-content-center mt-[120px]">
            <HeaderChilds
                h3Content="Confirmation code"
                pContent="Enter your verification code"
                imgSrc="src/assets/Forgot.jpg"
            />

            <div className="p-2 flex justify-center space-x-2">
                {[...Array(6)].map((_, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength={1}
                        className="text-center h-12 w-12 rounded-[7px] border-1 border-gray-400 focus:border-gray-100"
                        ref={(el) => {
                            if (el) inputRefs.current[index] = el;
                        }}
                        onInput={(e) => handleInput(index, e)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                    />
                ))}
            </div>
            <div className="mt-2 p-2">
                <button
                    type="submit"
                    className="text-[15px] w-full flex justify-center py-2 px-4 border 
                    border-transparent rounded-md text-sm font-medium hover:shadow-sm"
                    style={{ backgroundColor: "#F5F3F1" }}
                >
                    Confirm the code
                </button>
            </div>

            <FooterChilds buttonContent="Back to login"/>
        </section>
    );
};