import { useRef } from "react";
import { FooterChilds, HeaderChilds } from "./childs";
import Forgot from "../../assets/img/KEY.png";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuthStore } from "../../global/authStore";
import toast from "react-hot-toast";

export const EmailVerification = () => {
    const inputRefs = useRef<HTMLInputElement[]>([]);

    {
        document.body.style.backgroundColor = "FFFCF8";
    }

    const [code, setCode] = useState<string[]>(Array(6).fill(""));

    const handleInput = (index: number, e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        if (value.length === 1 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
        console.log(newCode);
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && index > 0 && !e.currentTarget.value) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData("text").trim();
        if (pasteData.length === 6 && /^\d+$/.test(pasteData)) {
            const newCode = pasteData.split("");
            setCode(newCode);
            newCode.forEach((char, index) => {
                if (inputRefs.current[index]) {
                    inputRefs.current[index].value = char;
                }
            });
            inputRefs.current[5].focus(); // Focus on the last input field
        } else {
            toast.error("Invalid paste. Please paste a 6-digit code.");
        }
    };

    const navigate = useNavigate();
    const { verifyEamil } : any = useAuthStore();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = code.join("");
        console.log("Form Data:", data);
        // API fetch Logic

        try {
            await verifyEamil(data);
            navigate("/authentication/validEamil");
        } catch (error : any) {
            toast.error("Invalid Code");
        }
    };

    return (
        <section className="space-y-3 p-6 grid place-content-center mt-[120px]">
            <HeaderChilds
                h3Content="Confirmation code"
                pContent="Enter your verification code"
                imgSrc={Forgot}
            />

            <div className="p-1 flex justify-center space-x-2">
                <form action="" onSubmit={onSubmit}>
                    {[...Array(6)].map((_, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength={1}
                            className="text-center h-12 w-12 m-1 rounded-[7px] border-1 border-[#B2916C]"
                            ref={(el) => {
                                if (el) inputRefs.current[index] = el;
                            }}
                            onInput={(e) => handleInput(index, e)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            onPaste={index === 0 ? handlePaste : undefined} // Only allow paste on the first input
                        />
                    ))}
                    <div className="mt-2 p-1">
                        <button
                            type="submit"
                            className="text-[15px] w-full flex justify-center py-2 px-4 border border-[#B2916C]
                            bg-transparent  rounded-md text-sm font-medium hover:shadow-sm"
                        >
                            Confirm the code
                        </button>
                    </div>
                </form>
            </div>

            <FooterChilds buttonContent="Back to login" />
        </section>
    );
};